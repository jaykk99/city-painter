# 🍺 CITY PAINTER — Paint the Town Red

First-person voxel bar brawler for phone and PC, in the style of *Paint the Town Red*. Spun out of [City Driver](https://github.com/jaykk99/city-driver).

**Play:** https://jaykk99.github.io/city-painter/ (`?map=biker|disco|prison|saloon|pirate|arena` jumps straight in)

## Maps
- **Biker Bar** — boss: Big Mike
- **Disco** — boss: the Disco King
- **Prison** — inmates *and* guards; boss: the Warden
- **Western Saloon** — boss: the Sheriff
- **Pirate Cove** — boss: Captain Redbeard
- **Arena** — endless waves, a boss every 5th wave, every weapon on the rack

## How a fight starts
Like the real game, every bar starts **calm**: people drink, dance and play pool, and someone's on the jukebox / DJ booth / piano. Nobody touches you until you throw the first punch (or fire a shot, or light dynamite). Then everyone nearby piles in, the brawl spreads across the room, more people pour in through the doors, and if you hit whoever's running the music, the music stops. The Arena is the exception: waves come in swinging.

## Gore physics
Everyone is made of voxels and comes apart. Blades sever arms, legs and heads (rigid debris that tumbles and bounces); sledgehammers, the anchor and dynamite pulp bodies into cubes; blood splats floors and walls; corpses ragdoll and can be mutilated; kicked bodies fly, slam walls and bowl people over.

## 39 weapons
Bottles (break into broken bottles), mugs, pool cues, stools, chairs, stool legs, bats, spiked bats, frying pan, knife, shiv, cleaver, machete, fire axe, sledgehammer, crowbar, pipe wrench, bike chain, guitar, mic stand, katana, cutlass, spear, pitchfork, shovel, weight plate, dumbbell, guard baton, anchor, brass knuckles · revolver, double barrel, flintlock, lever rifle, tommy gun · dynamite, throwing knives, cannonball. Anything can be thrown.

## Controls
- **Phone:** left thumb = move, drag right side = look, buttons: 👊 attack (hold to keep swinging) · 🛡️ block · 🦵 kick · ✋ grab · 🎯 throw · ⤴ jump · 🔥 rage
- **PC:** WASD · mouse look · LMB attack · RMB block · F kick · E grab · Q throw · Space jump · Shift sprint · R rage · Esc pause

Kills fill the RAGE bar: 7 s of super-strength where every hit takes something off. Cash you earn is added to your City Driver wallet (same `jaykk99.github.io` origin).

## Dev
```
npm install --include=dev
npm run build      # -> js/bundle.js
npm test
```
Code: `js/brawl/` — `weapons.js` (table + hit maths), `maps.js` (layouts), `voxel.js` (voxel people + weapon models), `sim.js` (fighters, AI, items), `fx.js` (gibs, blood, debris), `room.js`, `audio.js`, `main.js`.
Deploys to GitHub Pages on push to `main`.
