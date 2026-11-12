// BAR BRAWL — gore physics. Voxel gibs (instanced cubes that bounce, slide
// and settle on the floor and furniture), blood splats on floors and walls,
// and rigid debris for severed limbs, heads and whole bodies.
import * as THREE from 'three';
import { V } from './voxel.js';
import { groundAt } from './maps.js';

let G = 18;   // gravity (m/s^2), a bit heavier than real for punchy arcs
export function setFxGravity(g){ G = g; }

export function createFX(scene, L){
  // ---------- voxel gibs ----------
  const MAXG = 2600;
  const gMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(V, V, V), new THREE.MeshLambertMaterial(), MAXG);
  gMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  gMesh.count = 0; gMesh.frustumCulled = false; gMesh.castShadow = false;
  gMesh.setColorAt(0, new THREE.Color(1, 1, 1));
  scene.add(gMesh);
  const px = new Float32Array(MAXG), py = new Float32Array(MAXG), pz = new Float32Array(MAXG);
  const vx = new Float32Array(MAXG), vy = new Float32Array(MAXG), vz = new Float32Array(MAXG);
  const rs = new Float32Array(MAXG), sc = new Float32Array(MAXG);
  const state = new Uint8Array(MAXG);   // 0 free, 1 flying, 2 resting
  const blood = new Uint8Array(MAXG);
  let gi = 0, gUsed = 0;
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();

  function gib(x, y, z, dx, dy, dz, color, isBlood, size = 1){
    const i = gi; gi = (gi + 1) % MAXG; gUsed = Math.max(gUsed, gi === 0 ? MAXG : gi);
    px[i] = x; py[i] = y; pz[i] = z; vx[i] = dx; vy[i] = dy; vz[i] = dz;
    rs[i] = Math.random() * 6.28; sc[i] = size * (isBlood ? 0.7 + Math.random() * 0.5 : 0.9 + Math.random() * 0.3);
    state[i] = 1; blood[i] = isBlood === 2 ? 2 : isBlood ? 1 : 0;
    gMesh.setColorAt(i, _c.setHex(color));
    gMesh.instanceColor.needsUpdate = true;
    gMesh.count = gUsed;
  }
  const BLOODS = [0x9a0a0a, 0xb01010, 0x7a0606, 0xc81818];
  // a burst of body voxels + blood from a wound. dir = which way the hit pushed
  function burst(x, y, z, n, palette, dirX = 0, dirZ = 0, power = 1){
    n = Math.round(n * (api.gore ?? 1));
    for(let k = 0; k < n; k++){
      const isB = k % 2 === 0 || !palette;
      const col = isB ? BLOODS[k & 3] : palette[(Math.random() * palette.length) | 0];
      const sp = (1.5 + Math.random() * 3.5) * power;
      gib(x + (Math.random() - 0.5) * 0.2, y + (Math.random() - 0.5) * 0.2, z + (Math.random() - 0.5) * 0.2,
        dirX * sp * 0.8 + (Math.random() - 0.5) * sp, 1.5 + Math.random() * 3 * power, dirZ * sp * 0.8 + (Math.random() - 0.5) * sp, col, isB);
    }
  }
  // a single drop of blood (drips from wounds, stumps and weapons)
  function drop(x, y, z, dx = 0, dy = 0, dz = 0){ gib(x, y, z, dx, dy, dz, BLOODS[(Math.random() * 4) | 0], 2, 0.75); }
  // wood / stone chunks from smashed furniture
  function chunks(x, y, z, w, h, d, color, n = 26){
    for(let k = 0; k < n; k++) gib(x + (Math.random() - 0.5) * w, y + Math.random() * h, z + (Math.random() - 0.5) * d, (Math.random() - 0.5) * 6, 1 + Math.random() * 4, (Math.random() - 0.5) * 6, color, false, 1.2 + Math.random() * 1.2);
  }
  function glass(x, y, z, color = 0x7fbf77, n = 14){
    for(let k = 0; k < n; k++) gib(x, y, z, (Math.random() - 0.5) * 5, 1 + Math.random() * 3, (Math.random() - 0.5) * 5, k % 4 ? color : 0xe0ffe0, false, 0.5);
  }

  // ---------- blood splats (floors + walls) ----------
  const MAXS = 4200;
  const sTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
    g.fillStyle = '#fff';
    // blocky splat to match the voxels
    for(let k = 0; k < 26; k++){ const a = Math.random() * 6.28, d = Math.random() * 22, r = 3 + Math.random() * 7; g.fillRect(32 + Math.cos(a) * d - r / 2, 32 + Math.sin(a) * d - r / 2, r, r); }
    g.fillRect(20, 20, 24, 24);
    const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; return t;
  })();
  const sMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1),
    new THREE.MeshLambertMaterial({ alphaMap:sTex, transparent:true, depthWrite:false, polygonOffset:true, polygonOffsetFactor:-2, polygonOffsetUnits:-2 }), MAXS);
  sMesh.count = 0; sMesh.frustumCulled = false; sMesh.setColorAt(0, _c.setHex(0x900000));
  scene.add(sMesh);
  let si = 0, sUsed = 0, splatCount = 0;
  const NX = new THREE.Vector3(), UP = new THREE.Vector3(0, 0, 1);
  const _q2 = new THREE.Quaternion();
  function place(i, x, y, z, nx, ny, nz, sx, sy, rot){
    NX.set(nx, ny, nz);
    _q.setFromUnitVectors(UP, NX);
    _e.set(0, 0, rot); _q2.setFromEuler(_e); _q.multiply(_q2);
    _p.set(x + nx * 0.01, y + ny * 0.012, z + nz * 0.01); _s.set(sx, sy, 1);
    _m.compose(_p, _q, _s);
    sMesh.setMatrixAt(i, _m); sMesh.instanceMatrix.needsUpdate = true;
  }
  function splat(x, y, z, nx, ny, nz, size, rot = Math.random() * 6.28, sy = size, noDrip = false){
    const i = si;
    place(i, x, y, z, nx, ny, nz, size, sy, rot);
    sMesh.setColorAt(i, _c.setHex(BLOODS[(Math.random() * 4) | 0]));
    si = (si + 1) % MAXS; sUsed = Math.max(sUsed, si === 0 ? MAXS : si); sMesh.count = sUsed;
    sMesh.instanceColor.needsUpdate = true;
    splatCount++;
    // blood on a wall runs down it
    if(ny === 0 && !noDrip && y > 0.4){ const n = 1 + (Math.random() * 3 | 0); for(let k = 0; k < n; k++) drip(x + nz * (Math.random() - 0.5) * size * 0.7, y - Math.random() * size * 0.3, z + nx * (Math.random() - 0.5) * size * 0.7, nx, nz); }
    return i;
  }
  // pools on the floor; `grow` makes it spread slowly (under corpses and stumps)
  const pools = [], wet = [];
  function pool(x, z, size, grow = 0){
    const y = groundAt(L, x, z, 2), rot = Math.random() * 6.28;
    const i = splat(x, y, z, 0, 1, 0, size, rot);
    wet.push({ x, z, r:Math.max(size, grow) * 0.45, y }); if(wet.length > 90) wet.shift();
    if(grow > size) pools.push({ i, x, y, z, s:size, max:grow, rot });
  }
  function isWet(x, y, z){ for(const w of wet) if(Math.abs(w.y - y) < 0.3 && (w.x - x) ** 2 + (w.z - z) ** 2 < w.r * w.r) return true; return false; }
  function footprint(x, y, z, yaw, side){
    const ox = Math.cos(yaw) * 0.13 * side, oz = -Math.sin(yaw) * 0.13 * side;
    splat(x + ox, y, z + oz, 0, 1, 0, 0.13, -yaw, 0.3, true);
  }

  // ---------- wall drips: streaks that run down from wall splats ----------
  const MAXDR = 500;
  const dMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshLambertMaterial({ color:0x8a0606, polygonOffset:true, polygonOffsetFactor:-3, polygonOffsetUnits:-3 }), MAXDR);
  dMesh.count = 0; dMesh.frustumCulled = false; scene.add(dMesh);
  const drips = []; let dri = 0, drUsed = 0;
  function drip(x, y, z, nx, nz){
    const d = { i:dri, x, y, z, nx, nz, len:0.02, max:Math.min(y - 0.03, 0.25 + Math.random() * 1.3), sp:0.25 + Math.random() * 0.5, w:0.025 + Math.random() * 0.035 };
    dri = (dri + 1) % MAXDR; drUsed = Math.max(drUsed, dri === 0 ? MAXDR : dri); dMesh.count = drUsed;
    drips.push(d); if(drips.length > 140) drips.shift();
  }

  // ---------- flames / sparks: short-lived glowing cubes that rise ----------
  const MAXF = 700;
  const fMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(V * 1.6, V * 1.6, V * 1.6), new THREE.MeshBasicMaterial({ transparent:true, opacity:0.9 }), MAXF);
  fMesh.count = MAXF; fMesh.frustumCulled = false; scene.add(fMesh);
  const fl = []; for(let i = 0; i < MAXF; i++){ fl.push({ life:0, max:1, x:0, y:0, z:0, vx:0, vy:0, vz:0, kind:0 }); _m.makeScale(0, 0, 0); fMesh.setMatrixAt(i, _m); fMesh.setColorAt(i, _c.setHex(0xff8020)); }
  let fi = 0, fLive = 0;
  function flame(x, y, z, n = 1, spread = 0.25, kind = 0){
    for(let k = 0; k < n; k++){
      const f = fl[fi]; fi = (fi + 1) % MAXF;
      f.x = x + (Math.random() - 0.5) * spread * 2; f.y = y + Math.random() * 0.15; f.z = z + (Math.random() - 0.5) * spread * 2;
      f.vx = (Math.random() - 0.5) * 0.6; f.vz = (Math.random() - 0.5) * 0.6; f.vy = kind ? (Math.random() - 0.3) * 4 : 1.2 + Math.random() * 1.8;
      if(kind){ f.vx *= 10; f.vz *= 10; }
      f.max = f.life = kind ? 0.25 + Math.random() * 0.25 : 0.35 + Math.random() * 0.5; f.kind = kind;
    }
    fLive = 1;
  }

  // ---------- rigid debris (limbs, heads, bodies) ----------
  const debris = [];
  const MAXD = 46;
  function addDebris(obj, vel, angVel, half = 0.15, bleed = true, palette = null){
    obj.updateMatrixWorld(true);
    const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3();
    obj.matrixWorld.decompose(wp, wq, ws);
    if(obj.parent) obj.parent.remove(obj);
    obj.position.copy(wp); obj.quaternion.copy(wq); obj.scale.copy(ws);
    // spin around the part's own centre, not its joint
    const ch = obj.children[0];
    if(ch && ch.geometry){
      if(!ch.geometry.boundingSphere) ch.geometry.computeBoundingSphere();
      const c = ch.geometry.boundingSphere.center.clone();
      for(const k of obj.children) k.position.sub(c);
      obj.position.add(c.multiply(ws).applyQuaternion(wq));
    }
    scene.add(obj);
    const d = { obj, vel:vel.clone(), ang:angVel.clone(), half, bleed:bleed ? 3 : 0, palette, rest:0, kick:null };
    debris.push(d);
    if(debris.length > MAXD){ const o = debris.shift(); scene.remove(o.obj); }
    return d;
  }

  // ---------- tracers ----------
  const tracers = [];
  const tMat = new THREE.LineBasicMaterial({ color:0xffe08a, transparent:true });
  function tracer(a, b, color, dur = 0.08){
    const g = new THREE.BufferGeometry().setFromPoints([a.clone(), b.clone()]);
    const m = tMat.clone(); if(color != null) m.color.setHex(color);
    const l = new THREE.Line(g, m); scene.add(l); tracers.push({ l, t:dur, d:dur });
  }
  // jagged lightning from a to b
  function bolt(a, b){
    for(let s = 0; s < 3; s++){
      let p = a.clone();
      for(let k = 1; k <= 7; k++){
        const q = a.clone().lerp(b, k / 7); if(k < 7){ q.x += (Math.random() - 0.5) * 0.9; q.z += (Math.random() - 0.5) * 0.9; }
        tracer(p, q, s ? 0x9ad0ff : 0xffffff, 0.28); p = q;
      }
    }
  }

  const HW = L.w / 2, HD = L.d / 2;
  const FCOL = [0x3a1408, 0xc02808, 0xff6a10, 0xffb020, 0xfff0a0], SCOL = [0x6080ff, 0xa0c8ff, 0xffffff];
  function update(dt){
    // growing pools
    for(let k = pools.length - 1; k >= 0; k--){
      const p = pools[k]; p.s = Math.min(p.max, p.s + dt * 0.22);
      place(p.i, p.x, p.y, p.z, 0, 1, 0, p.s, p.s, p.rot);
      if(p.s >= p.max) pools.splice(k, 1);
    }
    // wall drips
    for(const d of drips){
      if(d.len >= d.max) continue;
      d.len = Math.min(d.max, d.len + d.sp * dt); d.sp *= (1 - 0.35 * dt);
      NX.set(d.nx, 0, d.nz); _q.setFromUnitVectors(UP, NX);
      _p.set(d.x + d.nx * 0.014, d.y - d.len / 2, d.z + d.nz * 0.014); _s.set(d.w, d.len, 1);
      _m.compose(_p, _q, _s); dMesh.setMatrixAt(d.i, _m); dMesh.instanceMatrix.needsUpdate = true;
    }
    // flames
    if(fLive){
      fLive = 0;
      for(let i = 0; i < MAXF; i++){
        const f = fl[i]; if(f.life <= 0) continue;
        f.life -= dt; fLive = 1;
        if(f.life <= 0){ _m.makeScale(0, 0, 0); fMesh.setMatrixAt(i, _m); continue; }
        f.x += f.vx * dt; f.y += f.vy * dt; f.z += f.vz * dt;
        const k = f.life / f.max, s = 0.4 + k * 0.9;
        _p.set(f.x, f.y, f.z); _e.set(f.life * 5, f.life * 3, 0); _q.setFromEuler(_e); _s.set(s, s, s);
        _m.compose(_p, _q, _s); fMesh.setMatrixAt(i, _m);
        fMesh.setColorAt(i, _c.setHex(f.kind ? SCOL[Math.min(2, k * 3 | 0)] : FCOL[Math.min(4, k * 5 | 0)]));
      }
      fMesh.instanceMatrix.needsUpdate = true; fMesh.instanceColor.needsUpdate = true;
    }
    // gibs
    let dirty = false;
    const put = i => { if(state[i] === 0) _s.set(0, 0, 0); else _s.set(sc[i], sc[i], sc[i]); _e.set(rs[i], rs[i] * 0.7, 0); _q.setFromEuler(_e); _p.set(px[i], py[i], pz[i]); _m.compose(_p, _q, _s); gMesh.setMatrixAt(i, _m); dirty = true; };
    for(let i = 0; i < gUsed; i++){
      if(state[i] !== 1) continue;
      vy[i] -= G * dt;
      px[i] += vx[i] * dt; py[i] += vy[i] * dt; pz[i] += vz[i] * dt;
      // walls: blood paints them, voxels bounce off
      if(Math.abs(px[i]) > HW - 0.04){ const s = Math.sign(px[i]); px[i] = s * (HW - 0.04); if(blood[i] && Math.random() < 0.35 && py[i] < L.h){ splat(px[i], py[i], pz[i], -s, 0, 0, 0.18 + Math.random() * 0.25); state[i] = 0; put(i); continue; } vx[i] *= -0.35; }
      if(Math.abs(pz[i]) > HD - 0.04){ const s = Math.sign(pz[i]); pz[i] = s * (HD - 0.04); if(blood[i] && Math.random() < 0.35 && py[i] < L.h){ splat(px[i], py[i], pz[i], 0, 0, -s, 0.18 + Math.random() * 0.25); state[i] = 0; put(i); continue; } vz[i] *= -0.35; }
      if(L.h && py[i] > L.h - 0.05){ py[i] = L.h - 0.05; vy[i] = -Math.abs(vy[i]) * 0.3; }
      const g = groundAt(L, px[i], pz[i], py[i] + 0.2) + V * 0.5 * sc[i];
      if(py[i] <= g){
        py[i] = g;
        if(blood[i]){ if(blood[i] === 2) splat(px[i], g - V * 0.5 * sc[i], pz[i], 0, 1, 0, 0.07 + Math.random() * 0.1); else if(Math.random() < 0.5) splat(px[i], g - V * 0.5 * sc[i], pz[i], 0, 1, 0, 0.16 + Math.random() * 0.3); state[i] = 0; }
        else if(Math.abs(vy[i]) > 1.2){ vy[i] *= -0.3; vx[i] *= 0.55; vz[i] *= 0.55; }
        else { vy[i] = 0; vx[i] *= 0.82; vz[i] *= 0.82; if(vx[i] * vx[i] + vz[i] * vz[i] < 0.02) state[i] = 2; }
      }
      put(i);
    }
    if(dirty) gMesh.instanceMatrix.needsUpdate = true;
    // debris
    for(const d of debris){
      if(d.rest > 1.5) continue;
      const o = d.obj;
      d.vel.y -= G * dt;
      o.position.addScaledVector(d.vel, dt);
      const al = d.ang.length();
      if(al > 0.01){ _q.setFromAxisAngle(_p.copy(d.ang).divideScalar(al), al * dt); o.quaternion.premultiply(_q); }
      if(Math.abs(o.position.x) > HW - d.half){ o.position.x = Math.sign(o.position.x) * (HW - d.half); d.vel.x *= -0.4; if(d.bleed) splat(o.position.x + Math.sign(o.position.x) * d.half, o.position.y, o.position.z, -Math.sign(o.position.x), 0, 0, 0.5); }
      if(Math.abs(o.position.z) > HD - d.half){ o.position.z = Math.sign(o.position.z) * (HD - d.half); d.vel.z *= -0.4; if(d.bleed) splat(o.position.x, o.position.y, o.position.z + Math.sign(o.position.z) * d.half, 0, 0, -Math.sign(o.position.z), 0.5); }
      const g = groundAt(L, o.position.x, o.position.z, o.position.y + 0.3) + d.half;
      if(o.position.y < g){
        o.position.y = g;
        if(d.vel.y < -2.5 && d.bleed){ pool(o.position.x, o.position.z, 0.4 + Math.random() * 0.4); d.bleed--; }
        d.vel.y = Math.abs(d.vel.y) > 2 ? -d.vel.y * 0.3 : 0;
        d.vel.x *= 0.7; d.vel.z *= 0.7; d.ang.multiplyScalar(0.7);
        if(d.vel.lengthSq() < 0.05){ d.rest += dt; if(d.ang.lengthSq() < 0.5) d.ang.set(0, 0, 0); }
      } else if(d.bleed && Math.random() < 0.3){
        gib(o.position.x, o.position.y, o.position.z, d.vel.x * 0.3, 0, d.vel.z * 0.3, BLOODS[(Math.random() * 4) | 0], true);
      }
    }
    for(let i = tracers.length - 1; i >= 0; i--){
      const t = tracers[i]; t.t -= dt; t.l.material.opacity = Math.max(0, t.t / t.d);
      if(t.t <= 0){ scene.remove(t.l); t.l.geometry.dispose(); tracers.splice(i, 1); }
    }
  }
  // kick resting debris (walk into a head and it rolls away)
  function nudge(x, z, r, fx, fz){
    for(const d of debris){
      const o = d.obj, dx = o.position.x - x, dz = o.position.z - z;
      if(dx * dx + dz * dz < r * r){ d.vel.x += fx; d.vel.z += fz; d.vel.y += 1.5; d.ang.set(Math.random() * 6 - 3, 0, Math.random() * 6 - 3); d.rest = 0; }
    }
  }

  const api = { gib, burst, glass, splat, pool, addDebris, tracer, update, nudge, drop, chunks, flame, bolt, isWet, footprint, gore:1, get splats(){ return splatCount; } };
  return api;
}
