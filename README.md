# 🍺 CITY PAINTER — Paint the Town Red

First-person voxel bar brawler for phone and PC, in the style of *Paint the Town Red*. Spun out of [City Driver](https://github.com/jaykk99/city-driver).

**Play:** https://jaykk99.github.io/city-painter/ (`?map=biker|disco|prison|saloon|pirate|arena` jumps straight in)

## Maps
- **Biker Bar** — boss: Big Mike
- **Disco** — boss: the Disco King
- **Prison** — inmates *and* guards; boss: the Warden
- **Western Saloon** — boss: the Sheriff
- **Pirate Cove** — boss: Captain Redbeard
- **Mead Hall** — Viking feast; battle axes, mead horns, throwing axes; boss: Jarl Bloodaxe
- **Medieval Tavern** — peasants and knights; longswords, maces, flails, crossbow; boss: the Black Knight
- **Dojo** — black belts; nunchucks, bo staffs, naginata, katanas, kunai; boss: the Sensei
- **Speakeasy** — 1920s mobsters and a jazz pianist; tommy guns; boss: Big Tony
- **Office Party** — keyboards, monitors, fire extinguishers, office chairs, golf clubs; boss: the CEO
- **Arena** — endless waves, a boss every 5th wave, every weapon on the rack

## How a fight starts
It's a free-for-all: only a few brawlers come for you at once, the rest fight each other, hold grudges, and wild swings hit whoever's in the way (in the Prison, guards and inmates are on opposite sides).

Like the real game, every bar starts **calm**: people drink, dance and play pool, and someone's on the jukebox / DJ booth / piano. Nobody touches you until you throw the first punch (or fire a shot, or light dynamite). Then everyone nearby piles in, the brawl spreads across the room, more people pour in through the doors, and if you hit whoever's running the music, the music stops. The Arena is the exception: waves come in swinging.

## Gore physics
Everyone is made of voxels and comes apart. **Every hit knocks real voxels out** — punches dent faces, bats cave in skulls, the crater's rim turns red, and a body part carved down far enough falls off or bursts. Blades sever arms, legs and heads (rigid debris that tumbles and bounces); sledgehammers, the anchor and dynamite pulp bodies into cubes; blood splats floors and walls; corpses ragdoll and can be mutilated; kicked bodies fly, slam walls and bowl people over.

## 57 weapons
Bottles (break into broken bottles), mugs, pool cues, stools, chairs, stool legs, bats, spiked bats, frying pan, knife, shiv, cleaver, machete, fire axe, sledgehammer, crowbar, pipe wrench, bike chain, guitar, mic stand, katana, cutlass, spear, pitchfork, shovel, weight plate, dumbbell, guard baton, anchor, brass knuckles, battle axe, war hammer, longsword, mace, flail, mead horn, goblet, nunchucks, bo staff, naginata, golf club, keyboard, monitor, fire extinguisher, office chair · revolver, crossbow, double barrel, flintlock, lever rifle, tommy gun · dynamite, molotovs, throwing knives, kunai, throwing axes, cannonball. Anything can be thrown.

## Blood
Wounds keep dripping after the hit. Stumps spurt in pulses with the heartbeat, and anyone missing a limb bleeds out. Blood that hits a wall runs down it in streaks, pools spread under bodies, you leave red footprints after walking through one, and your weapon gets bloodier and drips.

## Powers, fire and furniture
- **Powers** (the fire bar fills from hits and kills): ⚡ **Smite** (X) calls lightning on whoever you're looking at, 💥 **Shockwave** (Z) blasts everyone around you off their feet, 🔥 **Berserk** (R) at a full bar
- **Fire:** molotovs, the Mead Hall fire pit and the tavern hearth set people alight; they panic, spread it to anyone they touch, and end up charred
- **Breakable furniture:** tables, crates and barrels smash when hit, shot, blown up or when a body is kicked through them. **Red powder kegs explode**
- **Dash** (V / 💨): a quick dodge with a moment of invulnerability
- **Bosses slam the ground** after a wind-up: jump, or hit them to interrupt
- **Slow motion** on boss kills, decapitations and big combos
- **Mutators** on the menu: Big Heads, Low Gravity, Exploding Kills, One Punch, Hardcore (each changes your score multiplier)
- **Stars:** three goals per map

## Fighting
- **Power hits:** hold attack to wind up — more damage, more knockback, cuts deeper, smashes through guards
- **Parry:** tap block just before a hit lands — no damage, the attacker reels and may drop their weapon
- **Enemies** put their guard up when you wind up, and cowards run when they're hurt
- **Drink** a bottle or mug you're holding (H / 🍺) for +25 health
- **Score & combos:** chain kills for DOUBLE KILL → TRIPLE KILL → MASSACRE → BLOODBATH → PAINTED RED; bonuses for heads off, obliterations, thrown kills, wall splats, power hits and bosses. Best score per map is saved
- **Settings:** look speed, field of view, gore (low / normal / insane), graphics (fast / pretty)

## Controls
- **Phone:** left thumb = move, drag right side = look, buttons: 👊 attack (hold to keep swinging) · 🛡️ block · 🦵 kick · ✋ grab · 🎯 throw · ⤴ jump · 🔥 rage
- **PC:** WASD · mouse look · LMB attack (hold = power hit) · RMB block (tap = parry) · H drink · F kick · E grab · Q throw · Space jump · Shift sprint · R rage · Esc pause

Kills fill the RAGE bar: 7 s of super-strength where every hit takes something off. Cash you earn is added to your City Driver wallet (same `jaykk99.github.io` origin).

## Dev
```
npm install --include=dev
npm run build      # -> js/bundle.js
npm test
```
Code: `js/brawl/` — `weapons.js` (table + hit maths), `maps.js` (layouts), `voxel.js` (voxel people + weapon models), `sim.js` (fighters, AI, items), `fx.js` (gibs, blood, debris), `room.js`, `audio.js`, `main.js`.
Deploys to GitHub Pages on push to `main`.
