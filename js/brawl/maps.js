// BAR BRAWL — scenario layouts. Pure data (no three.js) so tests can check
// that every spawn and pickup sits inside the room and off the furniture.
//
// Coordinates: metres, room centred on 0,0, +y up. A "solid" is an AABB box
// { x, z, w, d, h, y=0, c } you can't walk through and can stand things on.
// "deco" boxes are visual only. Pickups are weapon ids lying around.

const box = (x, z, w, d, h, c, y = 0, extra) => Object.assign({ x, z, w, d, h, c, y }, extra || {});

// ---------- furniture kits (each returns { solids, deco, pickups }) ----------
function kit(){ return { solids:[], deco:[], pickups:[] }; }
function merge(into, k){ into.solids.push(...k.solids); into.deco.push(...k.deco); into.pickups.push(...k.pickups); return into; }

function barCounter(x, z, len, alongX, wood = 0x5a3520, top = 0x3a2010){
  const k = kit();
  const w = alongX ? len : 0.9, d = alongX ? 0.9 : len;
  k.solids.push(box(x, z, w, d, 1.05, wood));
  k.deco.push(box(x, z, w + 0.1, d + 0.1, 0.06, top, 1.05));
  // bottles and mugs on top
  const n = Math.floor(len / 0.9);
  for(let i = 0; i < n; i++){
    const t = -len / 2 + 0.45 + i * 0.9;
    const px = alongX ? x + t : x, pz = alongX ? z : z + t;
    k.pickups.push({ w:i % 3 === 1 ? 'mug' : 'bottle', x:px, z:pz, y:1.11 });
  }
  return k;
}
function backShelf(x, z, len, alongX){
  const k = kit();
  const w = alongX ? len : 0.4, d = alongX ? 0.4 : len;
  k.solids.push(box(x, z, w, d, 2.4, 0x3a2414));
  for(const y of [0.9, 1.5, 2.1]) k.deco.push(box(x, z, w + 0.04, d + 0.04, 0.04, 0x2a180c, y));
  // a rainbow of liquor bottles (decor)
  const n = Math.floor(len / 0.22);
  const cols = [0x2f6b2a, 0x8a4a12, 0x6a1a1a, 0xc9a23a, 0x2a3a6a, 0xdddddd];
  for(const y of [0.94, 1.54, 2.14]) for(let i = 0; i < n; i++){
    const t = -len / 2 + 0.11 + i * 0.22;
    k.deco.push(box(alongX ? x + t : x, alongX ? z : z + t, 0.09, 0.09, 0.28, cols[(i * 7 + y * 10) % cols.length | 0], y));
  }
  return k;
}
function table(x, z, round = false, c = 0x6b4423){
  const k = kit();
  k.solids.push(box(x, z, round ? 1 : 1.3, round ? 1 : 0.9, 0.78, c, 0, { hp:70 }));
  k.pickups.push({ w:'bottle', x:x + 0.2, z, y:0.84 });
  k.pickups.push({ w:'chair', x:x - (round ? 0.95 : 1.1), z, y:0 });
  k.pickups.push({ w:'chair', x:x + (round ? 0.95 : 1.1), z:z + 0.1, y:0 });
  return k;
}
function poolTable(x, z){
  const k = kit();
  k.solids.push(box(x, z, 2.5, 1.4, 0.85, 0x3a2010));
  k.deco.push(box(x, z, 2.2, 1.1, 0.04, 0x1f6b35, 0.85));
  k.pickups.push({ w:'cue', x:x, z:z + 1.0, y:0 }, { w:'cue', x:x + 0.4, z:z - 1.0, y:0 });
  return k;
}
function stools(x, z, n, alongX, gap = 0.9){
  const k = kit();
  for(let i = 0; i < n; i++){
    const t = -((n - 1) * gap) / 2 + i * gap;
    k.pickups.push({ w:'stool', x:alongX ? x + t : x, z:alongX ? z : z + t, y:0 });
  }
  return k;
}
function crate(x, z, s = 1, c = 0x8b6b3a){ const k = kit(); k.solids.push(box(x, z, s, s, s, c, 0, { hp:50 })); return k; }
// red powder keg: shoot it, smash it or throw someone into it
function tnt(x, z){ const k = kit(); k.solids.push(box(x, z, 0.75, 0.75, 1.0, 0xc01818, 0, { hp:12, explosive:true, glow:0x400000 })); return k; }
function barrel(x, z, c = 0x6b4423){ const k = kit(); k.solids.push(box(x, z, 0.8, 0.8, 1.1, c, 0, { barrel:true, hp:50 })); return k; }

// ---------- scenarios ----------
// enemy outfit: skin, shirt, pants, hair, hat, beard, vest, shoe; boss = scale + hp multiplier
const SKINS = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac, 0x5c3a21];

function bikerBar(){
  const L = { id:'biker', name:'Biker Bar', blurb:'Leather, beer and broken bottles. The Hellhounds want you out.',
    w:24, d:18, h:4.2, floor:{ c1:0x4a3020, c2:0x3e281a, kind:'planks' }, wall:0x5a2a1e, trim:0x2a1208, ceil:0x1a120c,
    light:0xffb060, ambient:0x5a4030, fog:0x1a100a, lamps:[[-6, -3], [0, 0], [6, 3], [-6, 5], [6, -5]],
    player:[0, 7, 0], musician:[10.6, 6.6, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:18, maxActive:9, outfits:'biker', weapons:{ fists:4, bottle:3, chain:2, knuckles:2, bat:1, knife:1, wrench:1 } },
    boss:{ name:'BIG MIKE', outfit:'bikerBoss', weapon:'sledge', scale:1.35, hp:3.2 } };
  merge(L, barCounter(-4, -6, 9, true));
  merge(L, backShelf(-4, -8.4, 9, true));
  merge(L, stools(-4, -5, 8, true, 1.05));
  merge(L, poolTable(5, -4));
  merge(L, poolTable(5, 2));
  merge(L, table(-6, 1)); merge(L, table(-2, 3, true)); merge(L, table(-7, 5, true));
  L.solids.push(box(10.6, 7.6, 1.2, 1.2, 1.9, 0xb02020, 0, { glow:0xff5030 }));   // jukebox
  merge(L, tnt(11, 3.5)); merge(L, tnt(-11.2, -7.5)); L.pickups.push({ w:'molotov', x:-11, z:3, y:0 });
  L.pickups.push({ w:'bat', x:9.5, z:-8, y:0 }, { w:'crowbar', x:-10.5, z:7, y:0 }, { w:'pan', x:-1, z:-6, y:1.11 }, { w:'knife', x:-7, z:-6, y:1.11 },
    { w:'axe', x:11, z:-1, y:0 }, { w:'spikedbat', x:-11, z:-2, y:0 }, { w:'shotgun', x:-8.1, z:-6, y:1.11 }, { w:'dynamite', x:2, z:8, y:0 });
  return L;
}

function disco(){
  const L = { id:'disco', name:'Disco', blurb:'Saturday night fever. Everyone on the floor wants a piece of you.',
    w:22, d:22, h:5, floor:{ c1:0xff2a7a, c2:0x2a8aff, c3:0xffd23f, c4:0x30e070, kind:'disco' }, wall:0x2a1040, trim:0x6a20a0, ceil:0x0a0418,
    light:0xff60d0, ambient:0x402060, fog:0x0a0418, lamps:[[-5, -5], [5, -5], [-5, 5], [5, 5]], discoBall:true,
    player:[0, 8, 0], musician:[0, -8.6, Math.PI], solids:[], deco:[], pickups:[],
    enemies:{ count:20, maxActive:10, outfits:'disco', weapons:{ fists:5, bottle:2, mug:1, micstand:1, knife:1, guitar:1 } },
    boss:{ name:'DISCO KING', outfit:'discoBoss', weapon:'katana', scale:1.25, hp:3 } };
  // DJ booth + stage
  L.solids.push(box(0, -9.6, 8, 2, 0.6, 0x1a1a2a));
  L.solids.push(box(0, -9.6, 2.4, 1, 1.4, 0x333344, 0.6, { glow:0x40ffff }));
  L.pickups.push({ w:'guitar', x:-3, z:-9.6, y:0.6 }, { w:'micstand', x:2.5, z:-9.6, y:0.6 }, { w:'micstand', x:-1.5, z:-9.2, y:0.6 });
  merge(L, barCounter(9.6, 0, 10, false, 0x30204a, 0x8040c0));
  merge(L, stools(8.6, 0, 8, false, 1.15));
  for(const [x, z] of [[-8, -4], [-8, 1], [-8, 6]]) merge(L, table(x, z, true, 0x40206a));
  merge(L, tnt(-10.2, 10)); L.pickups.push({ w:'molotov', x:3.5, z:-9.6, y:0.6 });
  L.pickups.push({ w:'bat', x:-10, z:-9, y:0 }, { w:'knuckles', x:9.6, z:4, y:1.11 }, { w:'pan', x:9.6, z:-4, y:1.11 }, { w:'tommy', x:-10, z:9, y:0 }, { w:'tknives', x:10, z:9.5, y:0 });
  return L;
}

function prison(){
  const L = { id:'prison', name:'Prison', blurb:'Riot in cell block C. Inmates and guards — nobody is on your side.',
    w:26, d:20, h:5, floor:{ c1:0x8a8a84, c2:0x7e7e78, kind:'concrete' }, wall:0x9aa09a, trim:0x5a605a, ceil:0x4a4e4a,
    light:0xe8f0ff, ambient:0x505860, fog:0x202428, bright:0.55, lamps:[[-8, 0], [0, 0], [8, 0], [0, -6], [0, 6]],
    player:[0, 0, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:22, maxActive:10, outfits:'prison', weapons:{ fists:4, shiv:3, baton:2, weight:1, dumbbell:1, knife:1, pan:1 } },
    boss:{ name:'THE WARDEN', outfit:'warden', weapon:'shotgun', scale:1.3, hp:3 } };
  // two rows of cells with bars (bars are deco, cell side walls solid)
  for(const side of [-1, 1]){
    for(let i = 0; i < 5; i++){
      const x = -10 + i * 5, z = side * 8.2;
      L.solids.push(box(x - 2.4, z, 0.25, 3.6, 3, 0x9aa09a));
      L.deco.push(box(x, z - side * 1.8, 4.6, 0.06, 0.06, 0x333333, 2.9));
      for(let b = -2; b <= 2; b++) if(b !== 0) L.deco.push(box(x + b * 0.9, z - side * 1.8, 0.06, 0.06, 2.9, 0x333333));
      L.solids.push(box(x + 1.2, z + side * 0.9, 1.8, 0.8, 0.6, 0x6a6a6a));   // bunk
      L.pickups.push({ w:i % 2 ? 'shiv' : 'dumbbell', x:x - 1, z:z + side * 0.6, y:0 });
    }
  }
  // weight benches in the middle + canteen tables
  for(const x of [-7, 7]){ L.solids.push(box(x, 0, 1.6, 0.6, 0.5, 0x333333)); L.pickups.push({ w:'weight', x:x - 1.3, z:0.6, y:0 }, { w:'weight', x:x + 1.3, z:-0.6, y:0 }, { w:'dumbbell', x:x, z:1.1, y:0 }); }
  L.solids.push(box(0, -3, 4, 1, 0.78, 0x777777)); L.solids.push(box(0, 3, 4, 1, 0.78, 0x777777));
  merge(L, tnt(12.2, -5.2)); merge(L, tnt(-12.2, 5.2)); L.pickups.push({ w:'molotov', x:-12, z:-1, y:0 });
  L.pickups.push({ w:'pan', x:-1, z:-3, y:0.84 }, { w:'mug', x:1, z:3, y:0.84 }, { w:'knife', x:1.2, z:-3, y:0.84 }, { w:'baton', x:12, z:0, y:0 }, { w:'shovel', x:-12, z:0.5, y:0 }, { w:'revolver', x:0.4, z:3, y:0.84 });
  return L;
}

function saloon(){
  const L = { id:'saloon', name:'Western Saloon', blurb:'This town ain\'t big enough. Draw, partner.',
    w:24, d:20, h:4.6, floor:{ c1:0x9a6a3a, c2:0x8a5c30, kind:'planks' }, wall:0x7a4a26, trim:0x4a2a12, ceil:0x3a2412,
    light:0xffc070, ambient:0x6a4a2a, fog:0x2a1a0e, lamps:[[-6, -4], [6, -4], [0, 2], [-6, 6], [6, 6]],
    player:[0, 8, 0], musician:[9.6, 6.6, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:18, maxActive:9, outfits:'cowboy', weapons:{ fists:4, bottle:3, revolver:2, knife:1, pitchfork:1, shovel:1, rifle:1 } },
    boss:{ name:'THE SHERIFF', outfit:'sheriff', weapon:'rifle', scale:1.25, hp:3 } };
  merge(L, barCounter(-9.6, -1, 12, false, 0x6a3a1a, 0x4a2410));
  merge(L, backShelf(-11.6, -1, 12, false));
  merge(L, stools(-8.5, -1, 9, false, 1.2));
  for(const [x, z] of [[-2, -5], [3, -5], [-2, 2], [3, 2], [8, -2]]) merge(L, table(x, z, true, 0x5a3a1a));
  L.solids.push(box(9.6, 7.6, 2.4, 1, 1.4, 0x2a1a0e));   // piano
  L.deco.push(box(9.6, 7.0, 2.2, 0.3, 0.06, 0xf0f0e0, 0.9));
  merge(L, barrel(-10.8, 8.6)); merge(L, barrel(-9.8, 8.8)); merge(L, crate(11, -8.6));
  merge(L, tnt(11, 8.8)); merge(L, tnt(-11, -9)); L.pickups.push({ w:'molotov', x:5, z:9, y:0 });
  L.pickups.push({ w:'revolver', x:-9.6, z:-6, y:1.11 }, { w:'shotgun', x:11, z:-8.6, y:1 }, { w:'pitchfork', x:-11, z:6, y:0 }, { w:'shovel', x:11, z:3, y:0 },
    { w:'dynamite', x:-10, z:7.6, y:0 }, { w:'tknives', x:0, z:-9, y:0 }, { w:'axe', x:8, z:9, y:0 });
  return L;
}

function pirate(){
  const L = { id:'pirate', name:'Pirate Cove', blurb:'A tavern built into a shipwreck. Yo ho, here come the cutlasses.',
    w:24, d:22, h:5.5, floor:{ c1:0x8a6a44, c2:0x7a5c38, kind:'deck' }, wall:0x4a3826, trim:0x2a1e12, ceil:0x2a1e14,
    light:0xffa050, ambient:0x3a4a5a, fog:0x0e1a24, lamps:[[-6, -5], [6, -5], [0, 0], [-6, 6], [6, 6]],
    player:[0, 9, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:20, maxActive:10, outfits:'pirate', weapons:{ fists:3, cutlass:3, bottle:2, flintlock:2, knife:1, mug:1, spear:1 } },
    boss:{ name:'CAPTAIN REDBEARD', outfit:'captain', weapon:'anchor', scale:1.4, hp:3.5 } };
  L.solids.push(box(0, 0, 0.7, 0.7, 5.5, 0x5a3a1e));   // mast
  merge(L, barCounter(8, -8.6, 8, true, 0x5a3a1e, 0x3a2410));
  merge(L, stools(8, -7.5, 6, true, 1.2));
  for(const [x, z] of [[-6, -4], [-6, 3], [5, 3], [-1, 6]]) merge(L, table(x, z, false, 0x6a4a2a));
  for(const z of [-6, 0, 6]){ L.solids.push(box(-11, z, 1.6, 0.9, 0.9, 0x222222)); L.pickups.push({ w:'cannonball', x:-10, z:z + 1.2, y:0 }); }
  merge(L, barrel(10.8, 9.6)); merge(L, barrel(9.8, 9.8)); merge(L, barrel(10.8, 8.6)); merge(L, crate(-10.5, 9.8, 1.2));
  merge(L, tnt(-8.6, 9.9)); merge(L, tnt(11, -4)); merge(L, tnt(3, -10)); L.pickups.push({ w:'molotov', x:-3, z:9.5, y:0 });
  L.pickups.push({ w:'cutlass', x:10, z:-8.6, y:1.11 }, { w:'flintlock', x:6, z:-8.6, y:1.11 }, { w:'spear', x:11, z:0, y:0 }, { w:'axe', x:-9, z:-9.5, y:0 }, { w:'knife', x:0.4, z:-1, y:0 });
  return L;
}

function arena(){
  const L = { id:'arena', name:'Arena', blurb:'Endless waves. Every weapon in the game on the rack. How long can you last?',
    w:30, d:30, h:7, floor:{ c1:0xc8a868, c2:0xbc9c5c, kind:'sand' }, wall:0x8a7a60, trim:0x5a4a34, ceil:null,
    light:0xfff0d0, ambient:0x8090a0, fog:0x3a4450, bright:0.8, lamps:[[0, 0], [-9, -9], [9, -9], [-9, 9], [9, 9]],
    player:[0, 0, 0], solids:[], deco:[], pickups:[], waves:true,
    enemies:{ count:Infinity, maxActive:6, outfits:'mixed', weapons:{ fists:3, bottle:2, bat:2, knife:2, machete:1, cutlass:1, axe:1, spear:1, revolver:1 } },
    boss:{ name:'THE CHAMPION', outfit:'champion', weapon:'axe', scale:1.4, hp:4 } };
  for(const [x, z] of [[-8, -8], [8, -8], [-8, 8], [8, 8]]) L.solids.push(box(x, z, 1.4, 1.4, 3, 0xa89878));
  // the weapon racks: one of everything melee
  const rack = ['katana', 'axe', 'sledge', 'machete', 'spear', 'spikedbat', 'cleaver', 'cutlass', 'pitchfork', 'crowbar', 'bat', 'shovel', 'knuckles', 'wrench', 'chain', 'anchor', 'battleaxe', 'warhammer', 'longsword', 'flail', 'naginata', 'nunchucks'];
  rack.forEach((w, i) => { const a = (i / rack.length) * Math.PI * 2; L.pickups.push({ w, x:Math.cos(a) * 12.5, z:Math.sin(a) * 12.5, y:0 }); });
  for(const [x, z] of [[-13.5, 0], [13.5, 0], [0, -13.5], [0, 13.5]]) merge(L, tnt(x, z)); L.pickups.push({ w:'molotov', x:-2, z:-2, y:0 }, { w:'molotov', x:5, z:0, y:0 });
  L.pickups.push({ w:'shotgun', x:2, z:2, y:0 }, { w:'revolver', x:-2, z:2, y:0 }, { w:'dynamite', x:0, z:-2.5, y:0 }, { w:'tknives', x:2, z:-2, y:0 });
  return L;
}

function longTable(x, z, len, alongX, c = 0x6b4423, items = ['horn', 'mug']){
  const k = kit();
  const w = alongX ? len : 1.1, d = alongX ? 1.1 : len;
  k.solids.push(box(x, z, w, d, 0.8, c));
  // benches either side: low enough to step onto
  for(const s of [-1, 1]) k.solids.push(box(alongX ? x : x + s * 0.95, alongX ? z + s * 0.95 : z, alongX ? len : 0.4, alongX ? 0.4 : len, 0.42, 0x4a2a12));
  const n = Math.floor(len / 1.4);
  for(let i = 0; i < n; i++){ const t = -len / 2 + 0.7 + i * 1.4; k.pickups.push({ w:items[i % items.length], x:alongX ? x + t : x + (i % 2 ? 0.25 : -0.25), z:alongX ? z + (i % 2 ? 0.25 : -0.25) : z + t, y:0.86 }); }
  return k;
}
function desk(x, z, c = 0xc8c0b0){
  const k = kit();
  k.solids.push(box(x, z, 1.6, 0.8, 0.75, c));
  k.deco.push(box(x, z - 0.25, 1.6, 0.05, 0.5, 0x8a8a9a, 0.75));                       // cubicle divider
  k.pickups.push({ w:'monitor', x:x - 0.3, z:z - 0.05, y:0.81 }, { w:'keyboard', x:x + 0.35, z:z + 0.15, y:0.81 }, { w:'officechair', x:x, z:z + 0.85, y:0 });
  return k;
}

function vikingHall(){
  const L = { id:'viking', name:'Mead Hall', blurb:'Feast night in the longhouse. The jarl\'s men are drunk and armed.',
    w:28, d:16, h:6, floor:{ c1:0x6a4a2a, c2:0x5e4024, kind:'planks' }, wall:0x5a3a1e, trim:0x2a1a0c, ceil:0x2a1a0e,
    light:0xff9040, ambient:0x4a3020, fog:0x1a0e06, lamps:[[-9, 0], [0, 0], [9, 0], [-4, -5], [4, 5]],
    player:[-12, 0, -Math.PI / 2], solids:[], deco:[], pickups:[],
    enemies:{ count:20, maxActive:10, outfits:'viking', weapons:{ fists:3, horn:2, battleaxe:1, longsword:1, mace:1, throwaxe:1, spear:1, knife:1 } },
    boss:{ name:'JARL BLOODAXE', outfit:'jarl', weapon:'battleaxe', scale:1.4, hp:3.5 } };
  merge(L, longTable(0, -4.2, 14, true)); merge(L, longTable(0, 4.2, 14, true));
  L.solids.push(box(0, 0, 3, 1.6, 0.4, 0x3a3a3a, 0, { glow:0xff5010 }));                  // fire pit
  L.solids.push(box(12.6, 0, 1.2, 3, 1.4, 0x4a2a12)); L.deco.push(box(12.6, 0, 1.4, 1.4, 1.2, 0xc9a23a, 1.4));   // throne
  for(const z of [-7.4, 7.4]) for(const x of [-10, -3, 3, 10]) L.solids.push(box(x, z, 0.5, 0.5, 6, 0x4a2a12));    // pillars
  L.fires = [[0, 0, 1.25]]; merge(L, tnt(-13, 3.5)); L.pickups.push({ w:'molotov', x:-13, z:-3, y:0 });
  L.pickups.push({ w:'battleaxe', x:11, z:-2.5, y:0 }, { w:'warhammer', x:11, z:2.5, y:0 }, { w:'throwaxe', x:-12.6, z:-6.5, y:0 }, { w:'longsword', x:-12.6, z:6.5, y:0 }, { w:'spear', x:6, z:0, y:0 }, { w:'mace', x:-6, z:0, y:0 });
  return L;
}
function medievalTavern(){
  const L = { id:'medieval', name:'Medieval Tavern', blurb:'The Prancing Boar. Peasants, knights and one very angry innkeeper.',
    w:22, d:20, h:4.8, floor:{ c1:0x6a6058, c2:0x5e544c, kind:'stone' }, wall:0x8a7a62, trim:0x3a2a18, ceil:0x3a2a18,
    light:0xffa050, ambient:0x4a3a2a, fog:0x1a120a, lamps:[[-5, -4], [5, -4], [0, 3], [-6, 6], [6, 6]],
    player:[0, 8, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:18, maxActive:9, outfits:'medieval', weapons:{ fists:3, goblet:2, mug:2, mace:1, longsword:1, flail:1, pitchfork:1, knife:1 } },
    boss:{ name:'THE BLACK KNIGHT', outfit:'blackKnight', weapon:'warhammer', scale:1.35, hp:4 } };
  merge(L, barCounter(-8.6, -2, 10, false, 0x5a3a1e, 0x3a2410));
  merge(L, stools(-7.5, -2, 7, false, 1.2));
  L.solids.push(box(0, -9.4, 4, 1, 2.2, 0x5a5048, 0, { glow:0xff6020 }));                 // hearth
  for(const [x, z] of [[-2, -4], [3, -4], [-2, 2], [3, 2], [7, -1]]) merge(L, table(x, z, false, 0x5a3a1e));
  merge(L, barrel(9.8, 8.6)); merge(L, barrel(8.8, 8.8)); merge(L, barrel(9.8, 7.6)); merge(L, crate(-9.6, 8.6));
  L.fires = [[0, -8.5, 0.9]]; merge(L, tnt(-9.8, -9)); L.pickups.push({ w:'molotov', x:6, z:8.8, y:0 });
  L.pickups.push({ w:'longsword', x:9.5, z:-8.5, y:0 }, { w:'mace', x:-3, z:-9, y:0 }, { w:'flail', x:9.6, z:0, y:0 }, { w:'crossbow', x:-8.6, z:2, y:1.11 }, { w:'goblet', x:-8.6, z:-5, y:1.11 }, { w:'throwaxe', x:0, z:-8.6, y:0 });
  return L;
}
function dojo(){
  const L = { id:'dojo', name:'Dojo', blurb:'Paper walls, polished mats and a room full of black belts.',
    w:22, d:22, h:5, floor:{ c1:0xc8b878, c2:0xbcac6c, kind:'tatami' }, wall:0xeee6d0, trim:0x3a2414, ceil:0x5a3a1e, bright:0.55,
    light:0xfff0d8, ambient:0x6a6050, fog:0x2a2418, lamps:[[-5, -5], [5, -5], [-5, 5], [5, 5]],
    player:[0, 9, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:20, maxActive:9, outfits:'ninja', weapons:{ fists:5, nunchucks:2, bostaff:2, katana:1, kunai:1, naginata:1 } },
    boss:{ name:'THE SENSEI', outfit:'sensei', weapon:'katana', scale:1.2, hp:3.5 } };
  // paper-wall panel frames (decor)
  for(let i = -4; i <= 4; i++){ for(const z of [-10.95, 10.95]) L.deco.push(box(i * 2.4, z, 0.08, 0.06, 4.6, 0x3a2414)); for(const x of [-10.95, 10.95]) L.deco.push(box(x, i * 2.4, 0.06, 0.08, 4.6, 0x3a2414)); }
  // weapon racks + shrine
  for(const x of [-10.4, 10.4]) L.solids.push(box(x, 0, 0.5, 6, 1.6, 0x3a2414));
  L.solids.push(box(0, -10.4, 5, 0.8, 1.2, 0x3a2414)); L.deco.push(box(0, -10.6, 1, 0.3, 1.4, 0xd01818, 1.2));
  for(const z of [-2, 0, 2]){ L.pickups.push({ w:z ? 'bostaff' : 'naginata', x:-9.9, z, y:0 }, { w:z ? 'nunchucks' : 'katana', x:9.9, z, y:0 }); }
  merge(L, tnt(-9.6, -9.8)); merge(L, tnt(9.6, 9.8));
  L.pickups.push({ w:'kunai', x:-1.5, z:-9.6, y:0 }, { w:'kunai', x:1.5, z:-9.6, y:0 }, { w:'katana', x:0, z:-10.4, y:1.2 });
  return L;
}
function speakeasy(){
  const L = { id:'speakeasy', name:'Speakeasy', blurb:'1928. Bootleg gin, a jazz band, and the Moretti family owes you nothing.',
    w:22, d:18, h:4.4, floor:{ c1:0x1a1a1a, c2:0xe8e0d0, kind:'checker' }, wall:0x3a1a20, trim:0xc9a23a, ceil:0x1a0a0e,
    light:0xffc070, ambient:0x3a2028, fog:0x0e0608, lamps:[[-6, -3], [0, 0], [6, -3], [-5, 5], [5, 5]],
    player:[0, 7.5, 0], musician:[8.6, 6.4, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:18, maxActive:9, outfits:'gangster', weapons:{ fists:4, bottle:3, revolver:2, knife:1, bat:1, tommy:1, knuckles:1 } },
    boss:{ name:'BIG TONY', outfit:'mobBoss', weapon:'tommy', scale:1.35, hp:3.2 } };
  merge(L, barCounter(-1, -7.4, 11, true, 0x3a1a10, 0xc9a23a));
  merge(L, backShelf(-1, -8.6, 11, true));
  merge(L, stools(-1, -6.4, 9, true, 1.15));
  L.solids.push(box(8.6, 7.6, 2.4, 1, 1.4, 0x111111));                                     // piano
  for(const [x, z] of [[-6, 0], [-6, 4.5], [0, 2], [5, -1], [5, 3]]) merge(L, table(x, z, true, 0x2a1a10));
  merge(L, tnt(10.2, -8)); L.pickups.push({ w:'molotov', x:-10, z:2, y:0 }, { w:'molotov', x:1, z:-7.4, y:1.11 });
  L.pickups.push({ w:'tommy', x:-6, z:-7.4, y:1.11 }, { w:'revolver', x:3, z:-7.4, y:1.11 }, { w:'golfclub', x:-10, z:7.5, y:0 }, { w:'bat', x:10, z:-1, y:0 }, { w:'dynamite', x:-10.2, z:-3, y:0 });
  return L;
}
function office(){
  const L = { id:'office', name:'Office Party', blurb:'Friday, 4:59 pm. Performance reviews came back. Someone snapped.',
    w:26, d:20, h:3.6, floor:{ c1:0x4a5262, c2:0x404858, kind:'carpet' }, wall:0xd8d4c8, trim:0x8a8a8a, ceil:0xe8e8e0, bright:0.7,
    light:0xf0f4ff, ambient:0x606878, fog:0x2a2e36, lamps:[[-8, -5], [0, -5], [8, -5], [-8, 5], [0, 5], [8, 5]],
    player:[0, 8.5, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:22, maxActive:10, outfits:'office', weapons:{ fists:5, keyboard:2, golfclub:1, extinguisher:1, mug:2, knife:1, officechair:1 } },
    boss:{ name:'THE CEO', outfit:'ceo', weapon:'golfclub', scale:1.3, hp:3.5 } };
  for(const x of [-8, -3, 3, 8]) for(const z of [-5, 0]) merge(L, desk(x, z));
  L.solids.push(box(10.5, 6.5, 3, 1.6, 0.76, 0x3a2a1a));                                   // boss's desk
  L.solids.push(box(-11.6, 6, 1.2, 2.4, 1.0, 0xe0e0e0));                                    // snack table
  L.solids.push(box(-12.4, -8.6, 0.9, 0.9, 1.6, 0x3a6aa0, 0, { glow:0x6aa0ff }));            // water cooler
  merge(L, tnt(12.2, 2)); L.pickups.push({ w:'molotov', x:-10, z:8.8, y:0 });
  L.pickups.push({ w:'extinguisher', x:12.4, z:-8.8, y:0 }, { w:'extinguisher', x:-12.4, z:8.8, y:0 }, { w:'golfclub', x:10.5, z:6.5, y:0.76 }, { w:'mug', x:-11.6, z:5.4, y:1 }, { w:'mug', x:-11.6, z:6.6, y:1 }, { w:'knife', x:-11.6, z:6, y:1 });
  return L;
}

export const SCENARIOS = [bikerBar, disco, prison, saloon, pirate, vikingHall, medievalTavern, dojo, speakeasy, office, arena];
export const scenarioIds = () => SCENARIOS.map(f => f().id);
export function getScenario(id){ const f = SCENARIOS.find(f => f().id === id) || SCENARIOS[0]; return f(); }

// spawn points around the room edge, away from the player and furniture
export function spawnPoints(L, n = 16){
  const pts = [], m = 1.2;
  for(let i = 0; i < n * 6 && pts.length < n; i++){
    const a = (i / (n * 6)) * Math.PI * 2 * 3.7;
    const x = Math.cos(a) * (L.w / 2 - m - (i % 3)), z = Math.sin(a) * (L.d / 2 - m - (i % 2) * 1.5);
    if(blocked(L, x, z, 0.5)) continue;
    if(Math.hypot(x - L.player[0], z - L.player[1]) < 5) continue;
    pts.push([x, z]);
  }
  return pts;
}

export function blocked(L, x, z, r){
  if(Math.abs(x) > L.w / 2 - r || Math.abs(z) > L.d / 2 - r) return true;
  for(const s of L.solids) if(x + r > s.x - s.w / 2 && x - r < s.x + s.w / 2 && z + r > s.z - s.d / 2 && z - r < s.z + s.d / 2 && s.y < 1.6) return true;
  return false;
}

// top surface under (x, z) at or below height y (0 = floor)
export function groundAt(L, x, z, y = 99){
  let g = 0;
  for(const s of L.solids){
    const top = s.y + s.h;
    if(top <= y + 0.05 && top > g && Math.abs(x - s.x) <= s.w / 2 && Math.abs(z - s.z) <= s.d / 2) g = top;
  }
  return g;
}

// enemy outfits per scenario
export function outfitFor(kind, rng){
  const pick = a => a[(rng() * a.length) | 0];
  const skin = pick(SKINS);
  switch(kind){
    case 'biker': return { skin, shirt:pick([0x222222, 0x444444, 0x6a6a6a, 0xb03030, 0xffffff]), vest:0x1a1a1a, pants:pick([0x2a3a5a, 0x1a2a44, 0x222222]),
      hair:pick([null, 0x222222, 0x5a3a1a, 0x888888]), beard:pick([null, 0x222222, 0x6a4a2a, 0x999999]), hat:pick([null, null, 'bandana']), hatC:pick([0xb02020, 0x202060, 0x222222]), shoe:0x1a1a1a };
    case 'bikerBoss': return { skin:0xe0ac69, shirt:0x111111, vest:0x0a0a0a, pants:0x1a2a44, hair:null, beard:0x777777, hat:'bandana', hatC:0xb02020, shoe:0x111111 };
    case 'disco': return { skin, shirt:pick([0xff2a7a, 0x2affd0, 0xffd23f, 0xa040ff, 0xff7a2a, 0xffffff]), pants:pick([0xffffff, 0x222222, 0x8a2a8a, 0xd0a040]),
      hair:pick([0x222222, 0x4a2a10, 0xd0a040, 0xb03020]), afro:rng() < 0.4, beard:pick([null, null, 0x222222]), shoe:pick([0xffffff, 0x222222]) };
    case 'discoBoss': return { skin:0x8d5524, shirt:0xffd700, pants:0xffffff, hair:0x111111, afro:true, beard:0x111111, shoe:0xffffff, shades:true };
    case 'prison': return rng() < 0.22
      ? { skin, shirt:0x2a3a6a, pants:0x1a2a4a, hair:pick([0x222222, 0x5a3a1a]), hat:'cap', hatC:0x1a2a4a, shoe:0x111111, guard:true }
      : { skin, shirt:0xff7a1a, pants:0xff7a1a, hair:pick([null, 0x222222, 0x5a3a1a, 0xaaaaaa]), beard:pick([null, 0x222222, 0x5a3a1a]), shoe:0xdddddd };
    case 'warden': return { skin:0xffdbac, shirt:0x1a2a4a, pants:0x111a2a, hair:0x888888, beard:0x888888, hat:'cap', hatC:0x111a2a, shoe:0x111111 };
    case 'cowboy': return { skin, shirt:pick([0xc0a070, 0x8a4a2a, 0x6a6a8a, 0xd0d0c0, 0x8a2a2a]), vest:pick([null, 0x4a2a12, 0x222222]), pants:pick([0x4a3a2a, 0x2a3a5a, 0x6a5a40]),
      hair:pick([0x4a2a10, 0x222222, 0xc09050]), beard:pick([null, 0x4a2a10, 0x222222, 0x888888]), hat:'cowboy', hatC:pick([0x5a3a1a, 0x222222, 0xc0a070]), shoe:0x3a2010 };
    case 'sheriff': return { skin:0xe0ac69, shirt:0xd0c0a0, vest:0x3a2010, pants:0x2a2a3a, hair:0x888888, beard:0x888888, hat:'cowboy', hatC:0xf0e8d0, shoe:0x3a2010, badge:true };
    case 'pirate': return { skin, shirt:pick([0xffffff, 0xd0d0c0]), stripes:pick([0xb02020, 0x202060, 0x222222]), pants:pick([0x3a2a1a, 0x2a2a3a, 0x6a5a40]),
      hair:pick([0x222222, 0x5a3a1a, 0xb04020]), beard:pick([null, 0x222222, 0xb04020]), hat:pick(['bandana', 'bandana', 'tricorn']), hatC:pick([0xb02020, 0x202060, 0x222222]), shoe:0x2a1a0e, eyepatch:rng() < 0.3 };
    case 'captain': return { skin:0xffdbac, shirt:0x8a1a1a, vest:0xc9a23a, pants:0x222222, hair:0xb03010, beard:0xb03010, hat:'tricorn', hatC:0x111111, shoe:0x111111, eyepatch:true };
    case 'viking': return { skin, shirt:pick([0x6a5a40, 0x4a3a2a, 0x7a2a1a, 0x3a4a3a]), vest:pick([0x8a6a40, 0x5a4a30, null]), pants:pick([0x3a2a1a, 0x4a4a3a]),
      hair:pick([0xd09040, 0xb04020, 0x5a3a1a, 0xe0c080]), beard:pick([0xd09040, 0xb04020, 0x5a3a1a, 0xe0c080]), hat:pick(['horns', 'horns', null]), hatC:0x777777, shoe:0x3a2a1a };
    case 'jarl': return { skin:0xffdbac, shirt:0x5a1a1a, vest:0x8a6a40, pants:0x2a2a2a, hair:0xb04020, beard:0xb04020, hat:'horns', hatC:0xc9a23a, shoe:0x2a1a0e };
    case 'medieval': return rng() < 0.25
      ? { skin, shirt:0x8a8a90, pants:0x6a6a70, hair:null, hat:'knight', hatC:0x9a9aa0, shoe:0x5a5a60 }
      : { skin, shirt:pick([0x6a5030, 0x4a5a30, 0x7a3a2a, 0x8a7a5a]), vest:pick([null, 0x4a3018]), pants:pick([0x4a3a2a, 0x5a4a3a]), hair:pick([0x5a3a1a, 0x222222, 0xb08040, null]), beard:pick([null, 0x5a3a1a, 0x888888]), shoe:0x3a2a1a, belt:0x2a1a0a };
    case 'blackKnight': return { skin:0xffdbac, shirt:0x222226, pants:0x1a1a1e, hair:null, hat:'knight', hatC:0x26262a, shoe:0x111111 };
    case 'ninja': return rng() < 0.4
      ? { skin, shirt:0x1a1a1e, pants:0x1a1a1e, hair:0x111111, hat:'headband', hatC:0x1a1a1e, shoe:0x111111, belt:0x111111 }
      : { skin, shirt:0xf0f0ea, pants:0xf0f0ea, hair:pick([0x111111, 0x3a2a1a]), hat:pick(['headband', null]), hatC:0xf0f0ea, shoe:skin, belt:pick([0x111111, 0x8a5a2a, 0xd01818, 0x2a6ad0]) };
    case 'sensei': return { skin:0xe0ac69, shirt:0x8a1a1a, pants:0x111111, hair:0xdddddd, beard:0xdddddd, shoe:0xe0ac69, belt:0x111111 };
    case 'gangster': return { skin, shirt:pick([0x2a2a30, 0x3a3226, 0x1a1a22, 0x4a3a3a]), vest:pick([null, 0x111111]), pants:pick([0x2a2a30, 0x1a1a22]), hair:pick([0x111111, 0x3a2a1a]), beard:pick([null, null, 0x111111]), hat:'fedora', hatC:pick([0x2a2a2a, 0x4a3a2a, 0x3a3a3a]), shoe:0x111111, tie:pick([0xa01010, 0x1a1a6a, 0xd0d0d0]) };
    case 'mobBoss': return { skin:0xe0ac69, shirt:0xe8e0d0, vest:0x3a2a1a, pants:0x2a2a2a, hair:0x222222, beard:null, hat:'fedora', hatC:0xe8e0d0, shoe:0x2a1a0e, tie:0x8a1010, shades:true };
    case 'office': return { skin, shirt:pick([0xffffff, 0xc8d8f0, 0xe0e0e0, 0xf0e0d0, 0xd0e8d0]), pants:pick([0x2a2a3a, 0x3a3a40, 0x5a5048, 0x1a1a2a]), hair:pick([0x222222, 0x5a3a1a, 0xb08040, 0x888888, null]), beard:pick([null, null, 0x5a3a1a]), shoe:0x1a1a1a, tie:pick([null, 0xa01010, 0x1a3a8a, 0x2a6a2a]) };
    case 'ceo': return { skin:0xffdbac, shirt:0x1a1a2a, vest:0x1a1a2a, pants:0x1a1a2a, hair:0xbbbbbb, shoe:0x111111, tie:0xd0a020 };
    case 'champion': return { skin:0xc68642, shirt:null, pants:0x8a1a1a, hair:0x222222, beard:0x222222, hat:'helmet', hatC:0xc9a23a, shoe:0x6b4423 };
    default: return outfitFor(pick(['biker', 'disco', 'prison', 'cowboy', 'pirate', 'viking', 'medieval', 'ninja', 'gangster', 'office']), rng);
  }
}

// weighted pick from { id: weight }
export function pickWeighted(table, rng){
  let tot = 0; for(const k in table) tot += table[k];
  let r = rng() * tot;
  for(const k in table){ r -= table[k]; if(r < 0) return k; }
  return Object.keys(table)[0];
}
