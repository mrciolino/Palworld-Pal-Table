const strongAgainst = {
    Fire: 'Grass',
    Grass: 'Water',
    Water: 'Fire',
    Electric: 'Water',
    Ice: 'Grass',
    Ground: 'Electric',
    Dragon: 'Dragon',
    Dark: 'Neutral',
    Neutral: 'Neutral',
};

const weakAgainst = {
    Fire: 'Water',
    Grass: 'Electric',
    Water: 'Grass',
    Electric: 'Ground',
    Ice: 'Fire',
    Ground: 'Water',
    Dragon: 'Dragon',
    Dark: 'Neutral',
    Neutral: 'Neutral',
};

const professions = ["Cooling", "Farming", "Gathering", "Electricity", "Handiwork", "Kindling", "Lumbering", "Medicine", "Mining", "Planting", "Transporting", "Watering"];


const partnerSkills = {
    'Aerial Marauder': {
        description: 'Increases the player\'s damage dealt to enemy weak points while mounted.',
        pal: ['Vanwyrm', 'Vanwyrm Cryst']
    },
    'Aerial Missile': {
        description: 'Allows you to mount Jetragon and have it fire a series of homing missiles while mounted.',
        pal: ['Jetragon']
    },
    'Amicable Holy Dragon': {
        description: 'While Elphidran is your active Pal, it increases the amount of items Dark Pals drop when defeated.',
        pal: ['Elphidran']
    },
    'Amicable Water Dragon': {
        description: 'While Elphidran Aqua is your active Pal, it increases the amount of items Fire Pals drop when defeated.',
        pal: ['Elphidran Aqua']
    },
    'Angry Shark': {
        description: 'Unleashes a powerful attack when activated. Passively powers up the player\'s attack while this Pal is in the party.',
        pal: ['Gobfin', 'Gobfin Ignis']
    },
    'Antigravity': {
        description: 'Increases the player\'s max carrying capacity by a moderate amount while Lunaris is on the team.',
        pal: ['Lunaris']
    },
    'Aqua Spout': {
        description: 'While Kelpsea is in your party, the attack of your active Water Pal is increased.',
        pal: ['Kelpsea']
    },
    'Aurora Guide': {
        description: 'While Foxcicle is in your party, the attack of your Ice Pals is powered up.',
        pal: ['Foxcicle']
    },
    'Berry Picker': {
        description: 'When assigned to the Ranch, Caprity produces Berries.',
        pal: ['Caprity']
    },
    'Black Ankylosaur': {
        description: 'Improves the player\'s mining efficiency while riding Astegon.',
        pal: ['Astegon']
    },
    'Black Hare': {
        description: 'Increases the player\'s attack significantly and changes the player\'s damage type to Dark while mounting Pyrin Noct.',
        pal: ['Pyrin Noct']
    },
    'Black Steed': {
        description: 'Converts the player\'s attacks to deal Dark damage instead and increases the Dark damage dealt by the player and Frostallion Noct while mounted. Enables Frostallion Noct to be mounted.',
        pal: ['Frostallion Noct']
    },
    'Blessing of the Flower Spirit': {
        description: 'Petallia heals the player for a set amount per level when activated.',
        pal: ['Petallia']
    },
    'Brandish Blade': {
        description: 'Bushi dashes towards a target Pal and performs a powerful slash.',
        pal: ['Bushi']
    },
    'Brave Sailor': {
        description: 'While Penking is your active Pal, it increases the amount of items Fire Pals drop when defeated.',
        pal: ['Penking']
    },
    'Caffeine Inoculation': {
        description: 'Depresso gains a sudden burst of energy which increases its movement speed. The movement speed bonus increases for each level Caffeine Inoculation.',
        pal: ['Depresso']
    },
    'Candy Pop': {
        description: 'When assigned to the Ranch, Woolipop produces Cotton Candy.',
        pal: ['Woolipop']
    },
    'Cat Helper': {
        description: 'Increases the player\'s max carrying capacity by a small amount while Cattiva is on the team.',
        pal: ['Cattiva']
    },
    'Cheery Rifle': {
        description: 'Tanzee arms itself with an assault rifle and shoots enemies in range, dealing neutral element damage for the skill\'s duration.',
        pal: ['Tanzee']
    },
    'Claws Glistening in the Dark': {
        description: 'Loupmoon leaps and attacks the target enemy.',
        pal: ['Loupmoon']
    },
    'Clear Mind': {
        description: 'Increases base mount speed and enables mounting for Kitsun. Ignores cold and hot environment effects while mounted.',
        pal: ['Kitsun']
    },
    'Cold Bomb': {
        description: 'Equips Jolthog Cryst in the player\'s hand. When thrown, it creates a large cold explosion on impact, dealing damage and freezing enemies hit, making them easier to catch. The damage increases for each level of Cold Bomb.',
        pal: ['Jolthog Cryst']
    },
    'Cool Body': {
        description: 'Increases base mount speed and enables mounting for Reindrix. Keeps the rider cool in hot environments.',
        pal: ['Reindrix']
    },
    'Dark Knight of the Abyss': {
        description: 'Increases base mount speed and enables mounting for Necromus. Allows Necromus to double jump while mounted.',
        pal: ['Necromus']
    },
    'Dark Knowledge': {
        description: 'While Hoocrates is in your party, your active Dark Pal\'s attack is increased. The bonus damage is increased per level of Dark Knowledge.',
        pal: ['Hoocrates']
    },
    'Darkclaw Hunter': {
        description: 'Incineram Noct attacks the target enemy with the Hellfire Claw skill, damaging and burning the enemy.',
        pal: ['Incineram Noct']
    },
    'Darkflame Lion': {
        description: 'While Blazehowl Noct is your active Pal, increases the amount of items Neutral Pals drop when defeated.',
        pal: ['Blazehowl Noct']
    },
    'Dig Here!': {
        description: 'When grazing in the Ranch, Vixy occasionally finds Pals Spheres, Arrows, and Gold. Vixy can also find Mega Pal Spheres with at least 4 levels in Dig Here.',
        pal: ['Vixy']
    },
    'Direhowl Rider': {
        description: 'Increases mount speed and enables mounting for Direhowl.',
        pal: ['Direhowl']
    },
    'Dragon Hunter': {
        description: 'While Cryolinx is your active Pal, increases the amount of items Dragon Pals drop when defeated.',
        pal: ['Cryolinx']
    },
    'Dream Chaser': {
        description: 'Daedream accompanies you and follows up your attacks with dark magic that increase in damage for each level of Dream Chaser while it is in your party and not set as your active Pal.',
        pal: ['Daedream']
    },
    'Drill Crusher': {
        description: 'When activated, Digtoise spins and mines ores with increased efficiency. Shell Spin\'s power is also powered up.',
        pal: ['Digtoise']
    },
    'Egg Layer': {
        description: 'When assigned to the Ranch, Chikipi produces Eggs.',
        pal: ['Chikipi']
    },
    'Eggbomb Launcher': {
        description: 'Requires Tocotoco\'s Gloves. While Tocotoco is the active Pal, activate its Partner Skill and it will hop onto the player\'s arms and will act as a grenade launcher that shoots explosive eggs.',
        pal: ['Tocotoco']
    },
    'Ferocious Thunder Dragon': {
        description: 'While Orserk is your active Pal, it increases the amount of items Water Pals drop when defeated.',
        pal: ['Orserk']
    },
    'Flame Wing': {
        description: 'Increases the player\'s attack significantly and changes the player\'s damage type to Fire while mounting Ragnahawk.',
        pal: ['Ragnahawk']
    },
    'Flameclaw Hunter': {
        description: 'Incineram attacks the target enemy with the Hellfire Claw skill, damaging and burning the enemy.',
        pal: ['Incineram']
    },
    'Fluffy': {
        description: 'While in your party, increases Sweepa\'s attack and defense.',
        pal: ['Swee']
    },
    'Fluffy Shield': {
        description: 'Allows Lamball to be used as a shield. When assigned to the Ranch, Lamball produces Wool.',
        pal: ['Lamball']
    },
    'Fluffy Wool': {
        description: 'Powers up the attack of Neutral Pals in the party while Cremis is in the party. When assigned to the Ranch, Cremis produces Wool.',
        pal: ['Cremis']
    },
    'Flying Trapeze': {
        description: 'Allows Hangyu to be used as a glider. Hangyu gives the player a short upward burst when used. Each level increases the base gliding speed and decreases stamina drain and the rate at which you fall while gliding.',
        pal: ['Hangyu']
    },
    'Fragrant Dragon': {
        description: 'Increases the Grass damage dealt by the player and Dinossom while mounted. Enables Dinossom to be mounted.',
        pal: ['Dinossom']
    },
    'Fried Squid': {
        description: 'Allows Killamari to be used as a glider. Each level increases the base gliding speed, and decreases stamina drain and the rate at which you fall while gliding.',
        pal: ['Killamari']
    },
    'Full-power Gorilla Mode': {
        description: 'When activated, it significantly increases Gorirat\'s attack temporarily.',
        pal: ['Gorirat']
    },
    'Gaia Crusher': {
        description: 'Improves the player\'s mining and logging efficiency while riding Mammorest.',
        pal: ['Mammorest']
    },
    'Galeclaw Rider': {
        description: 'Allows Galeclaw to be used as a glider. Each level increases the base gliding speed and decreases stamina drain and the rate at which you fall while gliding. Guns can be fired while gliding with Galeclaw.',
        pal: ['Galeclaw']
    },
    'Goddess of the Tranquil Light': {
        description: 'Lyleen Noct heals the player for a set amount per level when activated.',
        pal: ['Lyleen Noct']
    },
    'Gold Digger': {
        description: 'When assigned to the Ranch, Mau produces Gold Coins.',
        pal: ['MauMau Cryst']
    },
    'Grassland Speedster': {
        description: 'When fighting together with Verdash, increases player movement speed moderately and changes the player\'s damage type to Grass.',
        pal: ['Verdash']
    },
    'Grenadier Panda': {
        description: 'Allows Mossanda to be mounted and wield a grenade launcher. Mossanda can fire the grenade launcher multiple times to deal Neutral element damage and stun enemies in a large area.',
        pal: ['Mossanda', 'Mossanda Lux']
    },
    'Grimoire Collector': {
        description: 'While Katress is your active Pal, increases the amount of items Neutral Pals drop when defeated.',
        pal: ['Katress']
    },
    'Guardian of the Desert': {
        description: 'When fighting together with Anubis, increases player attack by a small amount and changes the player\'s damage type to Ground.',
        pal: ['Anubis']
    },
    'Guardian of the Forest': {
        description: 'Enables Eikthyrdeer to be mounted. While mounted, Eikthyrdeer can perform a double jump and player gets increased logging efficiency.',
        pal: ['Eikthyrdeer']
    },
    'Guardian of the Golden Forest': {
        description: 'Enables Eikthyrdeer Terra to be mounted. While mounted, Eikthyrdeer Terra can perform a double jump and player gets increased logging efficiency.',
        pal: ['Eikthyrdeer Terra']
    },
    'Guardian of the Grassy Fields': {
        description: 'Increases the player\'s max carrying capacity by a large amount while Wumpo Botan is on the team. Allows Wumpo Botan to be mounted.',
        pal: ['Wumpo Botan']
    },
    'Guardian of the Snowy Mountain': {
        description: 'Increases the player\'s max carrying capacity by a large amount while Wumpo is on the team. Allows Wumpo to be mounted.',
        pal: ['Wumpo']
    },
    'Hard Armor': {
        description: 'While Warsect is your active Pal, your defense and fire resistance is increased.',
        pal: ['Warsect']
    },
    'Hard Head': {
        description: 'Increases player\'s mining efficiency while riding Rushoar.',
        pal: ['Rushoar']
    },
    'Harvest Goddess': {
        description: 'Lyleen heals the player for a set amount per level when activated.',
        pal: ['Lyleen']
    },
    'Hawk Eye': {
        description: 'Increases the player\'s damage dealt to enemy weak points while fighting with Robinquill.',
        pal: ['Robinquill', 'Robinquill Terra']
    },
    'Heart Drain': {
        description: 'Lovander and the player heals for a portion of the damage they deal while fighting together.',
        pal: ['Lovander']
    },
    'Hellflame Lion': {
        description: 'While Blazehowl is your active Pal, increases the amount of items Grass Pals drop when defeated.',
        pal: ['Blazehowl']
    },
    'Helper Bunny': {
        description: 'Flopie accompanies you and picks up item with a certain range and adds them to your inventory.',
        pal: ['Flopie']
    },
    'Holy Knight of the Firmament': {
        description: 'Increases base mount speed and enables mounting for Paladius. Allows Paladius to triple jump while mounted.',
        pal: ['Paladius']
    },
    'Huggy Fire': {
        description: 'Requires Foxparks\'s Harness. While Foxparks is the active Pal, activate its Partner Skill and it will hop onto the player\'s arms and will act as a flamethrower, replacing the player\'s weapon for the duration.',
        pal: ['Foxparks']
    },
    'Hungry Missile': {
        description: 'Allows you to mount Relaxaurus and have it fire a series of homing missiles while mounted.',
        pal: ['Relaxaurus']
    },
    'Hunting Instinct': {
        description: 'Increases the player\'s attack and movement speed moderately while hunting with Wolfotooth.',
        pal: ['Wolfotooth']
    },
    'Ice Breath': {
        description: 'While Freezalisk is in your party, the attack of your active Water Pal is increased.',
        pal: ['Freezalisk']
    },
    'Ice Charger': {
        description: 'Increases the player\'s movement speed moderately and changes the player\'s damage type to Ice while mounting Frosttail.',
        pal: ['Frosttail']
    },
    'Icy Wind': {
        description: 'While Snowsprite is in your party, the attack of your active Water Pal is increased.',
        pal: ['Snowsprite']
    },
    'Imposing Roar': {
        description: 'While Tyrallodon is your active Pal, it increases the amount of items Ground Pals drop when defeated.',
        pal: ['Tyrallodon']
    },
    'Ironhide Shield': {
        description: 'Increases the player\'s defense while mounted on Ironbeast.',
        pal: ['Ironbeast']
    },
    'Jolly Sled': {
        description: 'Increases the player\'s movement speed significantly and enables mounting for Sleipnose. Allows Sleipnose to be mounted.',
        pal: ['Sleipnose']
    },
    'Laser Guardian': {
        description: 'Requires Cyberseer\'s Robes. While Cyberseer is the active Pal, activate its Partner Skill and it will hover over the player, firing lasers at enemies in range. It replaces the player\'s weapon for the duration.',
        pal: ['Cyberseer']
    },
    'Leafy Protector': {
        description: 'While Leafray is in your party, increases the defense of your active Grass Pal.',
        pal: ['Leafray']
    },
    'Life Leech': {
        description: 'Necrospear and the player heal for a portion of the damage they deal while fighting together.',
        pal: ['Necrospear']
    },
    'Lightning Guardian': {
        description: 'Requires Thunderhide\'s Robes. While Thunderhide is the active Pal, activate its Partner Skill and it will hover over the player, striking enemies with lightning bolts in range. It replaces the player\'s weapon for the duration.',
        pal: ['Thunderhide']
    },
    'Loyal Guardian': {
        description: 'While Goldenoath is in your party, the attack of your active Holy Pal is increased.',
        pal: ['Goldenoath']
    },
    'Lucky Charm': {
        description: 'While Harapet is in your party, increases the chance of receiving rare items from enemies.',
        pal: ['Harapet']
    },
    'Luminous Wing': {
        description: 'While Sunflutter is in your party, the attack of your Ice Pals is powered up.',
        pal: ['Sunflutter']
    },
    'Lunar Guardian': {
        description: 'While Lunaris is in your party, the attack of your active Ice Pal is increased.',
        pal: ['Lunaris']
    },
    'Magma Shell': {
        description: 'While Moltenix is in your party, the attack of your active Fire Pal is increased.',
        pal: ['Moltenix']
    },
    'Magnetic Pull': {
        description: 'While Magnos is in your party, increases the amount of items Electric Pals drop when defeated.',
        pal: ['Magnos']
    },
    'Majestic Flight': {
        description: 'While Silverwing is in your party, the attack of your active Electric Pal is increased.',
        pal: ['Silverwing']
    },
    'Majestic Roar': {
        description: 'While Aurorion is in your party, the attack of your active Electric Pal is increased.',
        pal: ['Aurorion']
    },
    'Majestic Wings': {
        description: 'While Stormtail is in your party, the attack of your active Electric Pal is increased.',
        pal: ['Stormtail']
    },
    'Majestic Wolf': {
        description: 'While Wolvenant is in your party, the attack of your active Neutral Pal is increased.',
        pal: ['Wolvenant']
    },
    'Mana Leech': {
        description: 'Abysswraith and the player heal for a portion of the damage they deal while fighting together.',
        pal: ['Abysswraith']
    },
    'Marine Protector': {
        description: 'While Aquashell is in your party, increases the defense of your active Water Pal.',
        pal: ['Aquashell']
    },
    'Meteor Guardian': {
        description: 'Requires Ignition\'s Robes. While Ignition is the active Pal, activate its Partner Skill and it will hover over the player, summoning meteors to rain down on enemies in range. It replaces the player\'s weapon for the duration.',
        pal: ['Ignition']
    },
    'Meteor Shower': {
        description: 'While Solair is in your party, the attack of your active Fire Pal is increased.',
        pal: ['Solair']
    },
    'Mind Sharpen': {
        description: 'While Nincada is in your party, the attack of your active Neutral Pal is increased.',
        pal: ['Nincada']
    },
    'Moon Gaze': {
        description: 'While Lunarion is in your party, the attack of your active Ice Pal is increased.',
        pal: ['Lunarion']
    },
    'Moonlight Blessing': {
        description: 'While Moonglow is in your party, the attack of your active Holy Pal is increased.',
        pal: ['Moonglow']
    },
    'Mystical Guardian': {
        description: 'While Magiwing is in your party, the attack of your active Electric Pal is increased.',
        pal: ['Magiwing']
    },
    'Nebula Guardian': {
        description: 'While Starshower is in your party, the attack of your active Electric Pal is increased.',
        pal: ['Starshower']
    },
    'Nether Slash': {
        description: 'While Shadus is in your party, the attack of your active Dark Pal is increased.',
        pal: ['Shadus']
    },
    'Nourishing Winds': {
        description: 'While Wispwind is in your party, the attack of your active Grass Pal is increased.',
        pal: ['Wispwind']
    },
    'Obsidian Guardian': {
        description: 'While Nightshard is in your party, the attack of your active Dark Pal is increased.',
        pal: ['Nightshard']
    },
    'Oceanic Guardian': {
        description: 'While Ocearion is in your party, the attack of your active Water Pal is increased.',
        pal: ['Ocearion']
    },
    'Overheat': {
        description: 'While Vulcanix is in your party, the attack of your active Fire Pal is increased.',
        pal: ['Vulcanix']
    },
}

const palsData = [
    { name: 'Lamball', paldeck: '001', element: 'Neutral', skill: 'Fluffy Shield', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Farming Lv1'], drops: ['Wool', 'Lamball Mutton'], image: 'assets/images/pals/Lamball-1.webp', Handiwork: 1, Transporting: 1, Farming: 1 },
    { name: 'Cattiva', paldeck: '002', element: 'Neutral', skill: 'Cat Helper', profession: ['Handiwork Lv1', 'Gathering Lv1', 'Mining Lv1', 'Transporting Lv1'], drops: ['Red Berries'], image: 'assets/images/pals/Cattiva-1.webp', Handiwork: 1, Gathering: 1, Mining: 1, Transporting: 1 },
    { name: 'Chikipi', paldeck: '003', element: 'Neutral', skill: 'Egg Layer', profession: ['Gathering Lv1', 'Farming Lv1'], drops: ['Egg', 'Chikipi Poultry'], image: 'assets/images/pals/Chikipi-1.webp', Gathering: 1, Farming: 1 },
    { name: 'Lifmunk', paldeck: '004', element: 'Grass', skill: 'Lifmunk Recoil', profession: ['Planting Lv1', 'Handiwork Lv1', 'Lumbering Lv1', 'Medicine Lv1', 'Gathering Lv1'], drops: ['Berry Seeds', 'Low-grade Medical Supplies'], image: 'assets/images/pals/Lifmunk-1.webp', Planting: 1, Handiwork: 1, Lumbering: 1, Medicine: 1, Gathering: 1 },
    { name: 'Foxparks', paldeck: '005', element: 'Fire', skill: 'Huggy Fire', profession: ['Kindling Lv1'], drops: ['Leather', 'Flame Organ'], image: 'assets/images/Anubis.webp', Kindling: 1 },
    { name: 'Fuack', paldeck: '006', element: 'Water', skill: 'Surfing Slam', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Watering Lv1'], drops: ['Leather', 'Pal Fluids'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Watering: 1 },
    { name: 'Sparkit', paldeck: '007', element: 'Electric', skill: 'Static Electricity', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Generating Electricity Lv1'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Electricity: 1 },
    { name: 'Tanzee', paldeck: '008', element: 'Grass', skill: 'Cheery Rifle', profession: ['Planting Lv1', 'Handiwork Lv1', 'Lumbering Lv1', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Mushroom'], image: 'assets/images/Anubis.webp', Planting: 1, Handiwork: 1, Lumbering: 1, Transporting: 1, Gathering: 1 },
    { name: 'Rooby', paldeck: '009', element: 'Fire', skill: 'Tiny Spark', profession: ['Kindling Lv1'], drops: ['Flame Organ', 'Leather'], image: 'assets/images/Anubis.webp', Kindling: 1 },
    { name: 'Pengullet', paldeck: '010', element: 'Water-Ice', skill: 'Pengullet Cannon', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Watering Lv1', 'Cooling Lv1'], drops: ['Ice Organ', 'Pal Fluids'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Watering: 1, Cooling: 1 },
    { name: 'Penking', paldeck: '011', element: 'Water-Ice', skill: 'Brave Sailor', profession: ['Handiwork Lv2', 'Transporting Lv2', 'Watering Lv2', 'Mining Lv2', 'Cooling Lv2'], drops: ['Ice Organ', 'Penking Plume'], image: 'assets/images/Anubis.webp', Handiwork: 2, Transporting: 2, Watering: 2, Mining: 2, Cooling: 2 },
    { name: 'Jolthog', paldeck: '012', element: 'Electric', skill: 'Jolt Bomb', profession: ['Generating Electricity Lv1'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp', Electricity: 1 },
    { name: 'Jolthog Cryst', paldeck: '012b', element: 'Ice', skill: 'Cold Bomb', profession: ['Cooling Lv1'], drops: ['Ice Organ'], image: 'assets/images/Anubis.webp', Cooling: 1 },
    { name: 'Gumoss', paldeck: '013', element: 'Grass', skill: 'Logging Assistance', profession: ['Planting Lv1'], drops: ['Berry Seeds', 'Gumoss Leaf'], image: 'assets/images/Anubis.webp', Planting: 1 },
    { name: 'Vixy', paldeck: '014', element: 'Neutral', skill: 'Dig Here!', profession: ['Gathering Lv1', 'Farming Lv1'], drops: ['Leather', 'Bone'], image: 'assets/images/Anubis.webp', Gathering: 1, Farming: 1 },
    { name: 'Hoocrates', paldeck: '015', element: 'Dark', skill: 'Dark Knowledge', profession: ['Gathering Lv1'], drops: ['Fiber', 'High-grade Technical Manual'], image: 'assets/images/Anubis.webp', Gathering: 1 },
    { name: 'Teafant', paldeck: '016', element: 'Water', skill: 'Soothing Shower', profession: ['Watering Lv1'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp', Watering: 1 },
    { name: 'Depresso', paldeck: '017', element: 'Dark', skill: 'Caffeine Inoculation', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Mining Lv1'], drops: ['Venom Gland'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Mining: 1 },
    { name: 'Cremis', paldeck: '018', element: 'Neutral', skill: 'Fluffy Wool', profession: ['Gathering Lv1', 'Farming Lv1'], drops: ['Wool'], image: 'assets/images/Anubis.webp', Gathering: 1, Farming: 1 },
    { name: 'Daedream', paldeck: '019', element: 'Dark', skill: 'Dream Chaser', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Venom Gland', 'Small Pal Soul'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Gathering: 1 },
    { name: 'Rushoar', paldeck: '020', element: 'Ground', skill: 'Hard Head', profession: ['Mining Lv1'], drops: ['Rushoar Pork', 'Leather', 'Bone'], image: 'assets/images/Anubis.webp', Mining: 1 },
    { name: 'Nox', paldeck: '021', element: 'Dark', skill: 'Kuudere', profession: ['Gathering Lv1'], drops: ['Leather', 'Small Pal Soul'], image: 'assets/images/Anubis.webp', Gathering: 1 },
    { name: 'Fuddler', paldeck: '022', element: 'Ground', skill: 'Ore Detector', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Mining Lv1'], drops: ['Leather'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Mining: 1 },
    { name: 'Killamari', paldeck: '023', element: 'Dark', skill: 'Fried Squid', profession: ['Transporting Lv2', 'Gathering Lv1'], drops: ['Venom Gland'], image: 'assets/images/Anubis.webp', Transporting: 2, Gathering: 1 },
    { name: 'Mau', paldeck: '024', element: 'Dark', skill: 'Gold Digger', profession: ['Farming Lv1'], drops: ['Gold Coin'], image: 'assets/images/Anubis.webp', Farming: 1 },
    { name: 'Mau Cryst', paldeck: '024b', element: 'Ice', skill: 'Gold Digger', profession: ['Cooling Lv1', 'Farming Lv1'], drops: ['Ice Organ', 'Sapphire'], image: 'assets/images/Anubis.webp', Cooling: 1, Farming: 1 },
    { name: 'Celaray', paldeck: '025', element: 'Water', skill: 'Zephyr Glider', profession: ['Transporting Lv1', 'Watering Lv1'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp', Transporting: 1, Watering: 1 },
    { name: 'Direhowl', paldeck: '026', element: 'Neutral', skill: 'Direhowl Rider', profession: ['Gathering Lv1'], drops: ['Leather', 'Ruby', 'Gold Coin'], image: 'assets/images/Anubis.webp', Gathering: 1 },
    { name: 'Tocotoco', paldeck: '027', element: 'Neutral', skill: 'Eggbomb Launcher', profession: ['Gathering Lv1'], drops: ['Gunpowder', 'Tocotoco Feather'], image: 'assets/images/Anubis.webp', Gathering: 1 },
    { name: 'Flopie', paldeck: '028', element: 'Grass', skill: 'Helper Bunny', profession: ['Planting Lv1', 'Handiwork Lv1', 'Medicine Lv1', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Low-grade Medical Supplies', 'Wheat Seeds'], image: 'assets/images/Anubis.webp', Planting: 1, Handiwork: 1, Medicine: 1, Transporting: 1, Gathering: 1 },
    { name: 'Mozzarina', paldeck: '029', element: 'Neutral', skill: 'Milk Maker', profession: ['Farming Lv1'], drops: ['Mozzarina Meat', 'Milk'], image: 'assets/images/Anubis.webp', Farming: 1 },
    { name: 'Bristla', paldeck: '030', element: 'Grass', skill: 'Princess Gaze', profession: ['Planting Lv1', 'Handiwork Lv1', 'Medicine Lv2', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Wheat Seeds', 'Lettuce Seeds'], image: 'assets/images/Anubis.webp', Planting: 1, Handiwork: 1, Medicine: 2, Transporting: 1, Gathering: 1 },
    { name: 'Gobfin', paldeck: '031', element: 'Water', skill: 'Angry Shark', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Watering Lv2'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Watering: 2 },
    { name: 'Hangyu', paldeck: '032', element: 'Ground', skill: 'Flying Trapeze', profession: ['Handiwork Lv1', 'Transporting Lv2', 'Gathering Lv1'], drops: ['Fiber'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 2, Gathering: 1 },
    { name: 'Mossanda', paldeck: '033', element: 'Grass', skill: 'Grenadier Panda', profession: ['Planting Lv2', 'Handiwork Lv2', 'Lumbering Lv2', 'Transporting Lv3'], drops: ['Mushroom', 'Leather', 'Tomato Seeds'], image: 'assets/images/Anubis.webp', Planting: 2, Handiwork: 2, Lumbering: 2, Transporting: 3 },
    { name: 'Woolipop', paldeck: '034', element: 'Neutral', skill: 'Candy Pop', profession: ['Farming Lv1'], drops: ['Cotton Candy', 'High-quality Pal Oil'], image: 'assets/images/Anubis.webp', Farming: 1 },
    { name: 'Caprity', paldeck: '035', element: 'Grass', skill: 'Berry Picker', profession: ['Planting Lv2', 'Farming Lv1'], drops: ['Caprity Meat', 'Red Berries', 'Horn'], image: 'assets/images/Anubis.webp', Planting: 2, Farming: 1 },
    { name: 'Melpaca', paldeck: '036', element: 'Neutral', skill: 'Pacapaca Wool', profession: ['Farming Lv1'], drops: ['Wool', 'Leather'], image: 'assets/images/Anubis.webp', Farming: 1 },
    { name: 'Eikthyrdeer', paldeck: '037', element: 'Neutral', skill: 'Guardian of the Forest', profession: ['Lumbering Lv2'], drops: ['Eikthyrdeer Venison', 'Leather', 'Horn'], image: 'assets/images/Anubis.webp', Lumbering: 2 },
    { name: 'Nitewing', paldeck: '038', element: 'Neutral', skill: 'Travel Companion', profession: ['Gathering Lv2'], drops: ['Leather'], image: 'assets/images/Anubis.webp', Gathering: 2 },
    { name: 'Ribunny', paldeck: '039', element: 'Neutral', skill: 'Skilled Fingers', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Leather', 'Beautiful Flower'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Gathering: 1 },
    { name: 'Incineram', paldeck: '040', element: 'Fire-Dark', skill: 'Flameclaw Hunter', profession: ['Kindling Lv1', 'Handiwork Lv2', 'Transporting Lv2', 'Mining Lv1'], drops: ['Horn', 'Leather'], image: 'assets/images/Anubis.webp', Kindling: 1, Handiwork: 2, Transporting: 2, Mining: 1 },
    { name: 'Cinnamoth', paldeck: '041', element: 'Grass', skill: 'Mysterious Scales', profession: ['Planting Lv2', 'Medicine Lv1'], drops: ['Honey', 'Lettuce Seeds', 'Wheat Seeds'], image: 'assets/images/Anubis.webp', Planting: 2, Medicine: 1 },
    { name: 'Arsox', paldeck: '042', element: 'Fire', skill: 'Warm Body', profession: ['Kindling Lv2', 'Lumbering Lv1'], drops: ['Horn', 'Flame Organ'], image: 'assets/images/Anubis.webp', Kindling: 2, Lumbering: 1 },
    { name: 'Dumud', paldeck: '043', element: 'Ground', skill: 'Soil Improver', profession: ['Transporting Lv1', 'Watering Lv1', 'Mining Lv2'], drops: ['Raw Dumud', 'High Quality Pal Oil'], image: 'assets/images/Anubis.webp', Transporting: 1, Watering: 1, Mining: 2 },
    { name: 'Cawgnito', paldeck: '044', element: 'Dark', skill: 'Telepeck', profession: ['Lumbering Lv1'], drops: ['Bone', 'Venom Gland', 'Small Pal Soul'], image: 'assets/images/Anubis.webp', Lumbering: 1 },
    { name: 'Leezpunk', paldeck: '045', element: 'Dark', skill: 'Sixth Sense', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Copper Key', 'Silver Key'], image: 'assets/images/Anubis.webp', Handiwork: 1, Transporting: 1, Gathering: 1 },
    { name: 'Loupmoon', paldeck: '046', element: 'Dark', skill: 'Claws Glistening in the Dark', profession: ['Handiwork Lv2'], drops: ['Bone'], image: 'assets/images/Anubis.webp', Handiwork: 2 },
    { name: 'Galeclaw', paldeck: '047', element: 'Neutral', skill: 'Galeclaw Rider', profession: ['Gathering Lv2'], drops: ['Galeclaw Poultry', 'Leather'], image: 'assets/images/Anubis.webp', Gathering: 2 },
    { name: 'Robinquill', paldeck: '048', element: 'Grass', skill: 'Hawk Eye', profession: ['Planting Lv1', 'Handiwork Lv2', 'Lumbering Lv1', 'Medicine Lv1', 'Transporting Lv2', 'Gathering Lv2'], drops: ['Wheat Seeds', 'Arrow'], image: 'assets/images/Anubis.webp', Planting: 1, Handiwork: 2, Lumbering: 1, Medicine: 1, Transporting: 2, Gathering: 2 },
    { name: 'Gorirat', paldeck: '049', element: 'Neutral', skill: 'Full-power Gorilla Mode', profession: ['Handiwork Lv1', 'Lumbering Lv2', 'Transporting Lv3'], drops: ['Leather', 'Bone'], image: 'assets/images/Anubis.webp', Handiwork: 1, Lumbering: 2, Transporting: 3 },
    { name: 'Beegarde', paldeck: '050', element: 'Grass', skill: 'Worker Bee', profession: ['Planting Lv1', 'Handiwork Lv1', 'Lumbering Lv1', 'Medicine Lv1', 'Transporting Lv2', 'Gathering Lv1', 'Farming Lv1'], drops: ['Honey'], image: 'assets/images/Anubis.webp', Planting: 1, Handiwork: 1, Lumbering: 1, Medicine: 1, Transporting: 2, Gathering: 1, Farming: 1 },
    { name: 'Elizabee', paldeck: '051', element: 'Grass', skill: 'Queen Bee Command', profession: ['Planting Lv2', 'Handiwork Lv2', 'Lumbering Lv1', 'Medicine Lv2', 'Gathering Lv2'], drops: ['Honey', 'Elizabee\'s Staff'], image: 'assets/images/Anubis.webp', Planting: 2, Handiwork: 2, Lumbering: 1, Medicine: 2, Gathering: 2 },
    { name: 'Grintale', paldeck: '052', element: 'Neutral', skill: 'Plump Body', profession: ['Gathering Lv2'], drops: ['High-quality Pal Oil'], image: 'assets/images/Anubis.webp', Gathering: 2 },
    { name: 'Swee', paldeck: '053', element: 'Ice', skill: 'Fluffy', profession: ['Gathering Lv1', 'Cooling Lv1'], drops: ['Wool'], image: 'assets/images/Anubis.webp', Gathering: 1, Cooling: 1 },
    { name: 'Sweepa', paldeck: '054', element: 'Ice', skill: 'King of Fluff', profession: ['Gathering Lv2', 'Cooling Lv2'], drops: ['Wool'], image: 'assets/images/Anubis.webp', Gathering: 2, Cooling: 2 },
    { name: 'Chillet', paldeck: '055', element: 'Ice-Dragon', skill: 'Wriggling Weasel', profession: ['Gathering Lv1', 'Cooling Lv1'], drops: ['Leather'], image: 'assets/images/Anubis.webp' },
    { name: 'Univolt', paldeck: '056', element: 'Electric', skill: 'Swift Deity', profession: ['Lumbering Lv1', 'Generating Electricity Lv2'], drops: ['Leather', 'Electric Organ', 'Horn'], image: 'assets/images/Anubis.webp' },
    { name: 'Pyrin', paldeck: '058', element: 'Fire', skill: 'Red Hare', profession: ['Kindling Lv2', 'Lumbering Lv1'], drops: ['Flame Organ', 'Leather'], image: 'assets/images/Anubis.webp' },
    { name: 'Reindrix', paldeck: '059', element: 'Ice', skill: 'Cool Body', profession: ['Lumbering Lv2', 'Cooling Lv2'], drops: ['Reindrix Venison', 'Leather', 'Horn', 'Ice Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Rayhound', paldeck: '060', element: 'Electric', skill: 'Jumping Force', profession: ['Generating Electricity Lv2'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Dazzi', paldeck: '062', element: 'Electric', skill: 'Lady of Lightning', profession: ['Handiwork Lv1', 'Transporting Lv1', 'Generating Electricity Lv1'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Lunaris', paldeck: '063', element: 'Neutral', skill: 'Antigravity', profession: ['Handiwork Lv3', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Paldium Fragment'], image: 'assets/images/Anubis.webp' },
    { name: 'Dinossom', paldeck: '064', element: 'Grass-Dragon', skill: 'Fragrant Dragon', profession: ['Planting Lv2', 'Lumbering Lv2'], drops: ['Wheat Seeds'], image: 'assets/images/Anubis.webp' },
    { name: 'Surfent', paldeck: '065', element: 'Water', skill: 'Swift Swimmer', profession: ['Watering Lv2'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp' },
    { name: 'Maraith', paldeck: '066', element: 'Dark', skill: 'Messenger of Death', profession: ['Gathering Lv2', 'Mining Lv1'], drops: ['Bone', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Digtoise', paldeck: '067', element: 'Ground', skill: 'Drill Crusher', profession: ['Mining Lv3'], drops: ['Ore', 'High-quality Pal Oil'], image: 'assets/images/Anubis.webp' },
    { name: 'Tombat', paldeck: '068', element: 'Dark', skill: 'Ultrasonic Sensor', profession: ['Transporting Lv2', 'Gathering Lv2', 'Mining Lv2'], drops: ['Leather', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Lovander', paldeck: '069', element: 'Neutral', skill: 'Heart Drain', profession: ['Handiwork Lv2', 'Medicine Lv2', 'Transporting Lv2', 'Mining Lv1'], drops: ['Mushroom', 'Cake', 'Suspicious Juice', 'Strange Juice'], image: 'assets/images/Anubis.webp' },
    { name: 'Flambelle', paldeck: '070', element: 'Fire', skill: 'Magma Tears', profession: ['Kindling Lv1', 'Handiwork Lv1', 'Transporting Lv1', 'Farming Lv1'], drops: ['Flame Organ', 'High-quality Pal Oil'], image: 'assets/images/Anubis.webp' },
    { name: 'Vanwyrm', paldeck: '071', element: 'Fire-Dark', skill: 'Aerial Marauder', profession: ['Kindling Lv1', 'Transporting Lv3'], drops: ['Bone', 'Ruby', 'Gold Coin'], image: 'assets/images/Anubis.webp' },
    { name: 'Bushi', paldeck: '072', element: 'Fire', skill: 'Brandish Blade', profession: ['Kindling Lv2', 'Handiwork Lv1', 'Lumbering Lv3', 'Transporting Lv2', 'Gathering Lv1'], drops: ['Bone', 'Ingot'], image: 'assets/images/Anubis.webp' },
    { name: 'Beakon', paldeck: '073', element: 'Electric', skill: 'Thunderous', profession: ['Transporting Lv3', 'Generating Electricity Lv2', 'Gathering Lv1'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Ragnahawk', paldeck: '074', element: 'Fire', skill: 'Flame Wing', profession: ['Kindling Lv3', 'Transporting Lv3'], drops: ['Flame Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Katress', paldeck: '075', element: 'Dark', skill: 'Grimoire Collector', profession: ['Handiwork Lv2', 'Medicine Lv2', 'Transporting Lv1', 'Gathering Lv1'], drops: ['Bone', 'Venom Gland', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Wavetail', paldeck: '076', element: 'Water', skill: 'Raging Torrent', profession: ['Watering Lv3', 'Transporting Lv1'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp' },
    { name: 'Kittythra', paldeck: '077', element: 'Electric', skill: 'Whisker Shock', profession: ['Handiwork Lv2', 'Generating Electricity Lv2', 'Transporting Lv2'], drops: ['Electric Organ', 'Copper Key'], image: 'assets/images/Anubis.webp' },
    { name: 'Crackgunner', paldeck: '078', element: 'Electric', skill: 'Laser Sight', profession: ['Handiwork Lv2', 'Generating Electricity Lv1'], drops: ['Electric Organ', 'Copper Key', 'Silver Key'], image: 'assets/images/Anubis.webp' },
    { name: 'Turbulite', paldeck: '079', element: 'Electric', skill: 'Fluffy Core', profession: ['Generating Electricity Lv1'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Xendrapod', paldeck: '080', element: 'Electric', skill: 'Cable Constrict', profession: ['Generating Electricity Lv2'], drops: ['Electric Organ', 'Copper Key'], image: 'assets/images/Anubis.webp' },
    { name: 'Quarken', paldeck: '081', element: 'Electric', skill: 'Quantum Surge', profession: ['Generating Electricity Lv3'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Glidex', paldeck: '082', element: 'Neutral', skill: 'Wind Whisperer', profession: ['Lumbering Lv2', 'Transporting Lv2'], drops: ['Feather', 'Galeclaw Poultry'], image: 'assets/images/Anubis.webp' },
    { name: 'Gigaleon', paldeck: '083', element: 'Neutral', skill: 'Majestic Roar', profession: ['Handiwork Lv2', 'Transporting Lv2', 'Gathering Lv2'], drops: ['Leather', 'Horn', 'Galeclaw Poultry'], image: 'assets/images/Anubis.webp' },
    { name: 'Eclipsis', paldeck: '084', element: 'Dark', skill: 'Eclipse', profession: ['Handiwork Lv2', 'Transporting Lv2', 'Gathering Lv2'], drops: ['Venom Gland', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Frostleap', paldeck: '085', element: 'Ice', skill: 'Frozen Leap', profession: ['Cooling Lv2', 'Lumbering Lv2'], drops: ['Leather', 'Ice Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Quillara', paldeck: '086', element: 'Grass', skill: 'Quill Barrage', profession: ['Planting Lv2', 'Handiwork Lv2', 'Lumbering Lv2', 'Transporting Lv3', 'Gathering Lv2'], drops: ['Arrow', 'Lettuce Seeds'], image: 'assets/images/Anubis.webp' },
    { name: 'Zappling', paldeck: '087', element: 'Electric', skill: 'Electrolyte Splash', profession: ['Generating Electricity Lv2', 'Gathering Lv2'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Mystique', paldeck: '088', element: 'Dark', skill: 'Eternal Night', profession: ['Gathering Lv3', 'Mining Lv2'], drops: ['Bone', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Zephyreon', paldeck: '089', element: 'Neutral', skill: 'Zephyr Grace', profession: ['Lumbering Lv3', 'Transporting Lv3', 'Gathering Lv3'], drops: ['Feather', 'Galeclaw Poultry'], image: 'assets/images/Anubis.webp' },
    { name: 'Dewdrop', paldeck: '090', element: 'Water', skill: 'Purify', profession: ['Watering Lv2', 'Transporting Lv1'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp' },
    { name: 'Volturex', paldeck: '091', element: 'Electric', skill: 'Plasma Wing', profession: ['Generating Electricity Lv3', 'Gathering Lv2'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Terradon', paldeck: '092', element: 'Ground', skill: 'Stone Slam', profession: ['Mining Lv2', 'Lumbering Lv3', 'Transporting Lv3'], drops: ['Ore', 'High-quality Pal Oil'], image: 'assets/images/Anubis.webp' },
    { name: 'Bouquet', paldeck: '093', element: 'Grass', skill: 'Fragrance Burst', profession: ['Planting Lv2', 'Handiwork Lv2', 'Medicine Lv2', 'Transporting Lv2', 'Gathering Lv2'], drops: ['Flower', 'Beautiful Flower'], image: 'assets/images/Anubis.webp' },
    { name: 'Mintaka', paldeck: '094', element: 'Grass', skill: 'Cosmic Ray', profession: ['Planting Lv3', 'Handiwork Lv3', 'Lumbering Lv3', 'Medicine Lv3', 'Transporting Lv3', 'Gathering Lv3'], drops: ['Star Piece', 'Beautiful Flower'], image: 'assets/images/Anubis.webp' },
    { name: 'Euphony', paldeck: '095', element: 'Neutral', skill: 'Heavenly Harmony', profession: ['Handiwork Lv2', 'Transporting Lv2', 'Gathering Lv2'], drops: ['Pal Fluids', 'High-quality Pal Oil'], image: 'assets/images/Anubis.webp' },
    { name: 'Ignis', paldeck: '096', element: 'Fire', skill: 'Inferno Roar', profession: ['Kindling Lv3', 'Transporting Lv3'], drops: ['Flame Organ', 'Ruby', 'Gold Coin'], image: 'assets/images/Anubis.webp' },
    { name: 'Charmeleo', paldeck: '097', element: 'Fire', skill: 'Blazing Tail', profession: ['Kindling Lv2', 'Lumbering Lv2'], drops: ['Flame Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Aqualyte', paldeck: '098', element: 'Water', skill: 'Oceanic Breeze', profession: ['Watering Lv3', 'Transporting Lv2'], drops: ['Pal Fluids'], image: 'assets/images/Anubis.webp' },
    { name: 'Sapphyre', paldeck: '099', element: 'Water', skill: 'Aqua Tail', profession: ['Watering Lv2', 'Mining Lv2'], drops: ['Pal Fluids', 'Sapphire'], image: 'assets/images/Anubis.webp' },
    { name: 'Aerozel', paldeck: '100', element: 'Electric', skill: 'Storm Surge', profession: ['Generating Electricity Lv3', 'Gathering Lv3'], drops: ['Electric Organ', 'Copper Key'], image: 'assets/images/Anubis.webp' },
    { name: 'Emberix', paldeck: '101', element: 'Fire', skill: 'Ember Eruption', profession: ['Kindling Lv3', 'Transporting Lv3'], drops: ['Flame Organ', 'Ruby', 'Gold Coin'], image: 'assets/images/Anubis.webp' },
    { name: 'Aurora', paldeck: '102', element: 'Ice', skill: 'Aurora Veil', profession: ['Cooling Lv3', 'Transporting Lv3'], drops: ['Leather', 'Ice Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Dracozolt', paldeck: '103', element: 'Electric-Dragon', skill: 'Thunder Strike', profession: ['Generating Electricity Lv3'], drops: ['Electric Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Cryptkin', paldeck: '104', element: 'Dark', skill: 'Cryptic Howl', profession: ['Gathering Lv3', 'Mining Lv2'], drops: ['Bone', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Verdent', paldeck: '105', element: 'Grass', skill: 'Nature\'s Guardian', profession: ['Planting Lv3', 'Handiwork Lv3', 'Lumbering Lv3', 'Medicine Lv3', 'Transporting Lv3', 'Gathering Lv3'], drops: ['Leather', 'Berry Seeds', 'Wheat Seeds', 'Lettuce Seeds'], image: 'assets/images/Anubis.webp' },
    { name: 'Frostsaber', paldeck: '106', element: 'Ice', skill: 'Frost Nova', profession: ['Cooling Lv3', 'Lumbering Lv3'], drops: ['Leather', 'Ice Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Abysswing', paldeck: '107', element: 'Dark', skill: 'Abyssal Flight', profession: ['Handiwork Lv3', 'Transporting Lv3', 'Gathering Lv3'], drops: ['Bone', 'Venom Gland', 'Small Pal Soul'], image: 'assets/images/Anubis.webp' },
    { name: 'Terravolt', paldeck: '108', element: 'Electric', skill: 'Terra Shock', profession: ['Generating Electricity Lv3', 'Gathering Lv3'], drops: ['Electric Organ', 'Copper Key'], image: 'assets/images/Anubis.webp' },
    { name: 'Solareon', paldeck: '109', element: 'Fire', skill: 'Solar Flare', profession: ['Kindling Lv3', 'Transporting Lv3'], drops: ['Flame Organ', 'Ruby', 'Gold Coin'], image: 'assets/images/Anubis.webp' },
    { name: 'Glacieon', paldeck: '110', element: 'Ice', skill: 'Arctic Storm', profession: ['Cooling Lv3', 'Transporting Lv3'], drops: ['Leather', 'Ice Organ'], image: 'assets/images/Anubis.webp' },
    { name: 'Voltias', paldeck: '111', element: 'Electric', skill: 'Lightning Barrage', profession: ['Generating Electricity Lv3', 'Gathering Lv3'], drops: ['Electric Organ', 'Copper Key'], image: 'assets/images/Anubis.webp' }
];

export { strongAgainst, weakAgainst, palsData, partnerSkills, professions };