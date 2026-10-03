// Shared facility configuration, used by app.js for both the facility input cards and the
// facility recipe reference modal, so the two stay in sync automatically.

// Facility configuration. `name` must exactly match the facility string used throughout the
// Rust data model (ProductionItem.facility / FacilityCounts keys) since it's sent verbatim as
// the JSON key for each facility's count/level. Add new facilities here only; cards and input
// handling are generated dynamically, no other file needs to change. `category` groups the cards
// in the UI (see `FACILITY_CATEGORIES` below for display order). `hasLevels: false` hides the
// Level input entirely for facilities that don't level up in-game; omit the field (defaults to
// leveled) for any facility that does. `hasWorker: true` marks facilities an Aniimo works;
// `ability` is the Aniimo ability the facility uses and `personality` the personality that gets
// its +20% speed bonus (omitted if not known), shown in the plan's Aniimo recommendations.
// `unlocks` maps each facility level to the RV (Homeland) level that unlocks it. `counts[i]` is how
// many of the facility you can place at RV level i + 1; an RV level past the end of the list keeps
// the last count. Simple mode uses both (see `simpleSetup`). Counts are confirmed in game up to RV
// level 13 for the Cooling Unit, Sunlamp and Phonolfactory Table, RV level 12 for the Heat
// Furnace and Simmering Pot and RV level 11 for the rest; past that, Farmland, Woodland and Mine
// follow the game's pattern and the others keep their last count.
//
// Facilities marked "Not yet verified in game" in their tooltip haven't had their numbers
// confirmed in game yet.
export const FACILITIES = [
    {
        name: 'Farmland', slug: 'farmland', defaultCount: 1, category: 'Materials',
        unlocks: { 1: 1, 2: 2, 3: 5, 4: 7, 5: 9, 6: 12, 7: 16 },
        counts: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42],
        tooltip: "Niv.1 : Blé&#10;Niv.2 : Pomme de terre, Blé rapide&#10;Niv.3 : Riz, Soja&#10;Niv.4 : Rose, Coton, Pomme de terre rapide&#10;Niv.5 : Fraise, Lavande, Canne à sucre&#10;Niv.6 : Ginseng, Raisin, Blé premium, Riz rapide&#10;Niv.7 : Canneberge, Agave, Fraise rapide"
    },
    {
        name: 'Woodland', slug: 'woodland', defaultCount: 1, category: 'Materials',
        unlocks: { 1: 2, 2: 4, 3: 7, 4: 11, 5: 14, 6: 18 },
        counts: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        tooltip: "Niv.1 : Bois de saule&#10;Niv.2 : Bambou, Citron&#10;Niv.3 : Fleur de cerisier, Pomme, Sirop d'érable, Bambou rapide&#10;Niv.4 : Écorce de palmier, Châtaigne, Noix, Citron rapide&#10;Niv.5 : Caoutchouc naturel, Noix de coco, Sirop d'érable rapide&#10;Niv.6 : Cacao, Fleur d'oranger, Noix de coco rapide&#10;Donne aussi des blocs de bois."
    },
    {
        name: 'Mine', slug: 'mine', defaultCount: 1, category: 'Materials', hasWorker: true, ability: 'Earth', personality: 'Playful',
        unlocks: { 1: 3, 2: 6, 3: 9, 4: 12, 5: 15, 6: 18 },
        counts: [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
        tooltip: "Niv.1 : Roche&#10;Niv.2 : Argile&#10;Niv.3 : Coquillage&#10;Niv.4 : Minerai de cuivre&#10;Niv.5 : Minerai de quartz&#10;Niv.6 : Gemme&#10;Donne aussi du sable minéral."
    },
    {
        name: 'Well', slug: 'well', defaultCount: 0, category: 'Materials', hasWorker: true, ability: 'Water', personality: 'Faithful',
        unlocks: { 1: 4, 2: 8, 3: 11, 4: 13, 5: 17 },
        counts: [0, 0, 0, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Eau de puits, Eau de puits rapide&#10;Niv.2 : Eau fraîche&#10;Niv.3 : Eau fraîche rapide&#10;Niv.4 : Eau de source des roches profondes, Eau de source des roches profondes rapide&#10;Niv.5 : Eau de source minérale naturelle, Eau de source minérale naturelle rapide"
    },
    {
        name: 'Tidewhisper Sandcastle', slug: 'tidewhisper-sandcastle', defaultCount: 0, category: 'Aniimo Materials', hasWorker: true, ability: 'Leisure', personality: 'Judicious',
        unlocks: { 1: 5, 2: 8, 3: 13 },
        counts: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Niv.1 : Sel de mer&#10;Niv.2 : Sel de mer rapide&#10;Niv.3 : Perle (nécessite Chaud)"
    },
    {
        name: 'Dewy House', slug: 'dewy-house', defaultCount: 0, category: 'Aniimo Materials', hasWorker: true, ability: 'Leisure', personality: 'Instinctive',
        unlocks: { 1: 6, 2: 11 },
        counts: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Niv.1 : Aromathyste&#10;Niv.2 : Aromathyste rapide"
    },
    {
        name: 'Nimbus Bed', slug: 'nimbus-bed', defaultCount: 0, category: 'Aniimo Materials', hasWorker: true, ability: 'Leisure', personality: 'Judicious',
        unlocks: { 1: 10, 2: 13, 3: 16 },
        counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Niv.1 : Laine&#10;Niv.2 : Laine rapide&#10;Niv.3 : Pétales"
    },
    {
        name: 'Starfall Hammock', slug: 'starfall-hammock', defaultCount: 0, category: 'Aniimo Materials', hasLevels: false, hasWorker: true, ability: 'Leisure', personality: 'Faithful',
        unlocks: { 1: 12 },
        counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Étoile (nécessite Frais)&#10;Pas encore vérifié en jeu."
    },
    {
        name: 'Floral Windmill', slug: 'floral-windmill', defaultCount: 0, category: 'Aniimo Materials', hasLevels: false, hasWorker: true, ability: 'Leisure', personality: 'Nimble',
        unlocks: { 1: 18 },
        counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        tooltip: "Écailles, Écailles rapides (nécessitent Adéquat)&#10;Pas encore vérifié en jeu."
    },
    {
        name: 'Heat Furnace', slug: 'heat-furnace', defaultCount: 0, category: 'Environment', hasLevels: false,
        unlocks: { 1: 7 },
        counts: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2],
        tooltip: "Fournit des conditions de culture Chaud ou Brûlant aux cultures qui en ont besoin&#10;Le calculateur choisit le mode le plus rentable.&#10;Couvre une zone de 9x9 autour de lui ; le nombre de parcelles qui y tiennent dépend de ce qui la partage."
    },
    {
        name: 'Cooling Unit', slug: 'cooling-unit', defaultCount: 0, category: 'Environment', hasLevels: false,
        unlocks: { 1: 7 },
        counts: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Fournit des conditions de culture Frais ou Glacial aux cultures qui en ont besoin&#10;Le calculateur choisit le mode le plus rentable.&#10;Couvre une zone de 9x9 autour de lui ; le nombre de parcelles qui y tiennent dépend de ce qui la partage."
    },
    {
        name: 'Sunlamp', slug: 'sunlamp', defaultCount: 0, category: 'Environment', hasLevels: false,
        unlocks: { 1: 9 },
        counts: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
        tooltip: "Fournit des conditions de culture Adéquat aux cultures qui en ont besoin&#10;Couvre une zone de 9x9 autour de lui ; le nombre de parcelles qui y tiennent dépend de ce qui la partage."
    },
    {
        name: 'Carousel Mill', slug: 'carousel-mill', defaultCount: 1, category: 'Materials Processing', hasWorker: true, ability: 'Wind', personality: 'Tenacious',
        unlocks: { 1: 2, 2: 5, 3: 9, 4: 13, 5: 16, 6: 18 },
        counts: [0, 1, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Farine complète&#10;Niv.2 : Tofu, Riz décortiqué&#10;Niv.3 : Poudre de lavande&#10;Niv.4 : Boisson au riz, Poudre de ginseng&#10;Niv.5 : Farine raffinée, Huile de coco&#10;Niv.6 : Poudre de cacao, Lait de coco"
    },
    {
        name: 'Crafting Table', slug: 'crafting-table', defaultCount: 1, category: 'Materials Processing', hasWorker: true, ability: 'Artisanship', personality: 'Judicious',
        unlocks: { 1: 3, 2: 5, 3: 7, 4: 9, 5: 12, 6: 15, 7: 18, 8: 20 },
        counts: [0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Sculpture en bois&#10;Niv.2 : Vaisselle en bambou, Pierres polies de rivière, Pierres polies de rivière premium&#10;Niv.3 : Désodorisant à la rose, Poterie, Désodorisant à la rose premium&#10;Niv.4 : Bouquet de fleurs, Coquillage décoratif, Sachet de lavande&#10;Niv.5 : Carillon à vent, Lanterne à vœu stellaire, Attrape-rêve, Carillon à vent avancé&#10;Niv.6 : Canard en caoutchouc, Collier de perles, Jouet tressé, Porcelaine&#10;Niv.7 : Teinture, Poussière de gemme, Fleurs en bouteille, Poussière de gemme avancée&#10;Niv.8 : Poupée"
    },
    {
        name: 'Claw Game Cooker', slug: 'claw-game-cooker', defaultCount: 1, category: 'Materials Processing', hasWorker: true, ability: 'Fire', personality: 'Practical',
        unlocks: { 1: 4, 2: 5, 3: 7, 4: 9, 5: 12, 6: 16, 7: 19 },
        counts: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Pain, Pain premium&#10;Niv.2 : Graines de soja grillées&#10;Niv.3 : Pommes de terre rôties au bonbon à l'érable, Tarte aux pommes, Sablé à la rose&#10;Niv.4 : Biscuits à la lavande, Bonbon à la pomme&#10;Niv.5 : Bonbon au raisin, Chips de noix au caramel&#10;Niv.6 : Bonbon en étoile à l'érable, Cookies à la noix de coco&#10;Niv.7 : Pain aux fleurs, Pudding chococo à la fraise, Pudding chococo à la fraise premium"
    },
    {
        name: 'Jukebox Dryer', slug: 'jukebox-dryer', defaultCount: 1, category: 'Materials Processing', hasWorker: true, ability: 'Dark', personality: 'Nimble',
        unlocks: { 1: 4, 2: 5, 3: 7, 4: 10, 5: 12, 6: 14, 7: 18 },
        counts: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Chips de pomme de terre&#10;Niv.2 : Tranches de citron séché&#10;Niv.3 : Fleur de cerisier séchée, Tofu séché&#10;Niv.4 : Tranches de pomme séchée, Fraises séchées&#10;Niv.5 : Fruits à coque, Ginseng séché&#10;Niv.6 : Raisins secs, Noix de coco râpée&#10;Niv.7 : Canneberges séchées, Fleurs séchées"
    },
    {
        name: 'Simmering Pot', slug: 'simmering-pot', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Fire', personality: 'Tenacious',
        unlocks: { 1: 5, 2: 7, 3: 9, 4: 12, 5: 15, 6: 18 },
        counts: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Bouillie de riz nature&#10;Niv.2 : Concentré de rose&#10;Niv.3 : Sucre candi, Confiture de fraise, Confiture de pomme au bonbon à l'érable&#10;Niv.4 : Purée de châtaigne, Confiture de raisin, Bouillie de ginseng&#10;Niv.5 : Morceau de sucre d'érable, Sucre de malt&#10;Niv.6 : Pâte à tartiner au cacao, Confiture de canneberge, Sirop d'agave"
    },
    {
        name: 'Phonolfactory Table', slug: 'phonolfactory-table', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Perfumery', personality: 'Instinctive',
        unlocks: { 1: 6, 2: 7, 3: 10, 4: 14, 5: 17, 6: 19 },
        counts: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Bâton d'encens au bambou&#10;Niv.2 : Encens à la rose, Encens à la cerise&#10;Niv.3 : Encens à la lavande, Encens au citron, Encens au citron avancé&#10;Niv.4 : Arôme herbacé de ginseng&#10;Niv.5 : Savon, Savon premium&#10;Niv.6 : Encens à la fleur d'oranger, Parfum composite, Lotion, Parfum composite premium"
    },
    {
        name: 'Bouncy Brew Keg', slug: 'bouncy-brew-keg', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Water', personality: 'Energetic',
        unlocks: { 1: 6, 2: 9, 3: 13, 4: 17, 5: 19 },
        counts: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
        tooltip: "Niv.1 : Thé au blé, Thé vert au riz grillé&#10;Niv.2 : Kvas de pomme de terre, Jus de fraise, Jus de pomme, Jus de canne à sucre&#10;Niv.3 : Jus de raisin, Eau de ginseng, Boisson au raisin citronnée, Lait de noix&#10;Niv.4 : Jus de canneberge, Boisson fraîche à la noix de coco&#10;Niv.5 : Boisson à l'agave, Chocolat chaud, Lait de coco au cacao, Rosée de fleur d'oranger"
    },
    {
        name: 'Blazing Stove', slug: 'blazing-stove', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Fire', personality: 'Nimble',
        unlocks: { 1: 8, 2: 10, 3: 13, 4: 16, 5: 18 },
        counts: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Niv.1 : Riz frit à la sauce soja, Soupe onctueuse de pomme de terre, Boule de riz à la fleur de cerisier, Soupe de pommes de terre premium&#10;Niv.2 : Tanghulu, Tofu à la sauce soja, Châtaignes grillées au sucre&#10;Niv.3 : Rouleau de vermicelles à la vapeur, Gâteau au ginseng et à la châtaigne, Gâteau aux noix&#10;Niv.4 : Gelée, Bonbon à la fraise, Compote de raisin gourmande, Gelée premium&#10;Niv.5 : Chou à la crème à la fraise, Chocolat à la canneberge"
    },
    {
        name: 'Pickling Jar', slug: 'pickling-jar', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Dark', personality: 'Playful',
        unlocks: { 1: 8, 2: 10, 3: 13, 4: 16, 5: 19 },
        counts: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Niv.1 : Sauce soja, Fleur de cerisier salée&#10;Niv.2 : Boisson de riz sucrée, Vinaigre de cidre, Vin de riz sucré premium&#10;Niv.3 : Vinaigre de riz, Citron salé, Citron salé premium&#10;Niv.4 : Fraises confites&#10;Niv.5 : Fleurs d'oranger confites"
    },
    {
        name: 'Joy Wheel Loom', slug: 'joy-wheel-loom', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Wind', personality: 'Faithful',
        unlocks: { 1: 7, 2: 10, 3: 15, 4: 19 },
        counts: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        tooltip: "Niv.1 : Fil de coton&#10;Niv.2 : Pelote de laine, Tissu de coton&#10;Niv.3 : Corde de palmier, Tissu en laine&#10;Niv.4 : Tissu en coton teint"
    },
    {
        name: 'Dance Pad Polisher', slug: 'dance-pad-polisher', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Lightning',
        unlocks: { 1: 2, 2: 5, 3: 7 },
        counts: [0, 1],
        tooltip: "Niv.1 : Bourgeon de croissance&#10;Niv.2 : Fleur de croissance&#10;Niv.3 : Fruit de croissance&#10;Produit de l'EXP d'Aniimo, pas des Pièces de Foyer.&#10;Niveaux de déblocage pas encore confirmés en jeu."
    },
    {
        name: 'Aniipod Maker', slug: 'aniipod-maker', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Lightning',
        unlocks: { 1: 3, 2: 6, 3: 9 },
        counts: [0, 0, 1],
        tooltip: "Niv.1 : Aniipod&#10;Niv.2 : Aniipod pro&#10;Niv.3 : Aniipod méga&#10;Les Aniipods servent à capturer des Aniimo, pas à être vendus.&#10;Niveaux de déblocage pas encore confirmés en jeu."
    },
    {
        name: 'Woodworking Bench', slug: 'woodworking-bench', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Artisanship', personality: 'Energetic',
        unlocks: { 1: 6, 2: 10, 3: 14, 4: 18 },
        counts: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Bois brut&#10;Niv.2 : Planches standard&#10;Niv.3 : Poutres lamellées&#10;Niv.4 : Élément en bois densifié&#10;Transforme les blocs de bois en matériaux de montée de niveau du RV."
    },
    {
        name: 'Chimney Kiln', slug: 'chimney-kiln', defaultCount: 0, category: 'Materials Processing', hasWorker: true, ability: 'Fire', personality: 'Practical',
        unlocks: { 1: 6, 2: 10, 3: 14, 4: 18 },
        counts: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
        tooltip: "Niv.1 : Minerai tamisé grossier&#10;Niv.2 : Brique de minerai frittée&#10;Niv.3 : Minerai raffiné&#10;Niv.4 : Plaque de minerai microcristallin&#10;Transforme le sable minéral en matériaux de montée de niveau du RV."
    },
];

// Aniipod tiers in Aniipod Maker level order: each level adds a better one for catching Aniimo.
// The "Most Aniipods" strategy makes only the best tier the player's Maker can reach.
export const ANIIPOD_TIERS = ['aniipod', 'aniipod_pro', 'aniipod_mega'];

// Recipes unlocked with a rare currency (a few come from RV level-ups or from collecting one of
// every product). Plans leave them out until the player says they have them.
export const SPECIAL_RECIPES = [
    { name: 'rose_shortbread', facility: 'Claw Game Cooker' },
    { name: 'potato_kvass', facility: 'Bouncy Brew Keg' },
    { name: 'ginseng_porridge', facility: 'Simmering Pot' },
    { name: 'strawberry_candy', facility: 'Blazing Stove' },
    { name: 'flowers_in_a_bottle', facility: 'Crafting Table' },
    { name: 'lotion', facility: 'Phonolfactory Table' },
];

// The Harvest Moon Festival, from RV 10: season crops' seeds cost Moonray Wheat, which season
// orders pay out, and every season item sold counts points on top of its coins. Wheat is taken as
// unlimited; plans show how much their seeds use. The recipes and seed costs are in
// data/harvest_moon_festival.csv.
export const SEASON = {
    name: 'Festival de la Lune des moissons',
    currency: 'Blé Rayon de lune',
    points: 'Points de la Lune des moissons',
    minHomeLevel: 10,
    // Recipes unlocked with Recipe Notes; plans only use the ones the player ticks. The season's
    // other recipes come unlocked.
    recipeNotes: [
        { name: 'harvest_platter' },
        { name: 'umbral_pickle' },
        { name: 'umbral_hot_pot' },
        { name: 'umbral_sweet_and_spicy_sauce' },
    ],
};

// What reaching each RV level costs: coins, plus raw Wood Blocks and Mineral Sand up to RV 6 and
// one Woodworking Bench item and one Chimney Kiln item from RV 7.
export const LEVEL_UP_COSTS = {
    2: { coins: 140, items: [['wood_block', 3]] },
    3: { coins: 800, items: [['wood_block', 25]] },
    4: { coins: 2900, items: [['wood_block', 100], ['mineral_sand', 120]] },
    5: { coins: 7300, items: [['wood_block', 550], ['mineral_sand', 250]] },
    6: { coins: 32000, items: [['wood_block', 1300], ['mineral_sand', 700]] },
    7: { coins: 69000, items: [['rough_lumber', 290], ['coarse_sifted_ore', 360]] },
    8: { coins: 180000, items: [['rough_lumber', 1100], ['coarse_sifted_ore', 640]] },
    9: { coins: 260000, items: [['rough_lumber', 1520], ['coarse_sifted_ore', 800]] },
    10: { coins: 510000, items: [['rough_lumber', 2000], ['coarse_sifted_ore', 2400]] },
    11: { coins: 680000, items: [['standard_planks', 320], ['sintered_ore_brick', 350]] },
    12: { coins: 1060000, items: [['standard_planks', 910], ['sintered_ore_brick', 480]] },
    13: { coins: 1930000, items: [['standard_planks', 1230], ['sintered_ore_brick', 760]] },
    14: { coins: 2620000, items: [['standard_planks', 1590], ['sintered_ore_brick', 1060]] },
    15: { coins: 3760000, items: [['laminated_beams', 390], ['refined_ore', 150]] },
    16: { coins: 4900000, items: [['laminated_beams', 480], ['refined_ore', 310]] },
    17: { coins: 8630000, items: [['laminated_beams', 630], ['refined_ore', 380]] },
    18: { coins: 11600000, items: [['laminated_beams', 800], ['refined_ore', 520]] },
    19: { coins: 17100000, items: [['densified_timber_component', 400], ['microcrystalline_ore_plate', 220]] },
    20: { coins: 20800000, items: [['densified_timber_component', 490], ['microcrystalline_ore_plate', 270]] },
};

// The Woodworking Bench and Chimney Kiln chains, lowest tier first: what a player might have in
// stock toward a level-up.
export const LEVEL_UP_CHAINS = [
    ['wood_block', 'rough_lumber', 'standard_planks', 'laminated_beams', 'densified_timber_component'],
    ['mineral_sand', 'coarse_sifted_ore', 'sintered_ore_brick', 'refined_ore', 'microcrystalline_ore_plate'],
];

// How much ground each facility takes, in tiles, measured in game. Not all are square, and
// several sit on half tiles: the Blazing Stove snaps to a gridline of its own. The Storage Unit
// is here too, since a layout has to place it even though it produces nothing.
export const FACILITY_FOOTPRINTS = {
    'Farmland': [2, 2],
    'Woodland': [4, 4],
    'Mine': [5, 5],
    'Well': [2, 2],
    'Tidewhisper Sandcastle': [5, 5],
    'Dewy House': [2, 2],
    'Nimbus Bed': [5, 5],
    'Starfall Hammock': [5, 5],
    'Floral Windmill': [5, 5],
    'Heat Furnace': [1, 1],
    'Cooling Unit': [2, 2],
    'Sunlamp': [1, 1],
    'Carousel Mill': [5.5, 5.5],
    'Crafting Table': [4, 4],
    'Claw Game Cooker': [3.5, 3.5],
    'Simmering Pot': [1.5, 1.5],
    'Phonolfactory Table': [3.5, 3.5],
    'Bouncy Brew Keg': [3, 3],
    'Blazing Stove': [2.5, 1.75],
    'Pickling Jar': [2.5, 2],
    'Jukebox Dryer': [2.5, 2.5],
    'Joy Wheel Loom': [4, 4],
    'Woodworking Bench': [2, 1.5],
    'Chimney Kiln': [5.5, 5.5],
    'Dance Pad Polisher': [2.5, 2.5],
    'Aniipod Maker': [4.5, 4.5],
    'Storage Unit': [2, 2],
};

// The homeland: a 4x4 grid of plots, each 20 tiles wide and 15 tall, plot n opening at RV n (and
// all of them from RV 16). Rows from the top, by plot number; the first opens bottom middle.
export const HOMELAND_PLOT_SIZE = { w: 20, h: 15 };
export const HOMELAND_PLOTS = [
    [13, 14, 15, 16],
    [12, 7, 8, 9],
    [11, 4, 3, 6],
    [10, 2, 1, 5],
];

// An Aniimo carries four personalities at once, one from each of these opposed pairs, which the
// game shows as four letters over its portrait: INFP, ISFJ, ESTJ and so on. So one Aniimo can
// hold the bonus for up to four facilities, and can never hold it for two that want opposite
// personalities. Seven of the names are their own letter; S is Practical, confirmed in game.
export const PERSONALITY_PAIRS = [
    { letters: ['I', 'E'], names: ['Instinctive', 'Energetic'] },
    { letters: ['N', 'S'], names: ['Nimble', 'Practical'] },
    { letters: ['F', 'T'], names: ['Faithful', 'Tenacious'] },
    { letters: ['P', 'J'], names: ['Playful', 'Judicious'] },
];

/// The letter the game shows for a personality, and the personality it rules out.
export function personalityLetter(name) {
    const pair = PERSONALITY_PAIRS.find(p => p.names.includes(name));
    return pair ? pair.letters[pair.names.indexOf(name)] : null;
}

export function opposedPersonality(name) {
    const pair = PERSONALITY_PAIRS.find(p => p.names.includes(name));
    return pair ? pair.names[1 - pair.names.indexOf(name)] : null;
}

// Display order for facility categories. Auxiliary facilities (Storage Unit, power/climate
// buildings) are deliberately excluded here: they don't produce items.
export const FACILITY_CATEGORIES = ['Materials', 'Environment', 'Aniimo Materials', 'Materials Processing'];

// Facility name -> category, so other pages can group by the same categories as the facility
// input cards (Materials/Aniimo Materials are grower facilities, Materials Processing is processor
// facilities).
export const FACILITY_CATEGORY_BY_NAME = new Map(FACILITIES.map(f => [f.name, f.category]));

// Highest RV (Homeland) level in the game.
export const MAX_HOME_LEVEL = 20;

// Highest level of each upgrade module at each RV level (index = RV level - 1).
export const MODULE_MAX_LEVELS = {
    ecological_module: [0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 7, 8, 8, 8],
    kitchen_module: [0, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7],
    resource_detector: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    crafting_module: [0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 7, 7],
};

// The value for RV level `homeLevel` in a per-RV list, keeping the last value past its end.
function atHomeLevel(list, homeLevel) {
    return list[Math.min(homeLevel, list.length) - 1];
}

// How many Aniimo can live on the homeland at each RV level (index = RV level - 1; `null` where
// unknown).
export const ANIIMO_MAX = [null, 8, 11, 14, 17, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 43, 44, 45];

// Everything a player at `homeLevel` could have: each facility at its highest unlocked level, as
// many as that RV level allows (see `counts`), and every module at its cap for that RV level. Returns the same shapes simple
// mode sends to the solver: `{ facilities: { name: [{count, level}] }, modules }`.
export function simpleSetup(homeLevel) {
    const facilities = {};
    FACILITIES.forEach(f => {
        const unlocked = Object.entries(f.unlocks || {})
            .filter(([, need]) => need <= homeLevel)
            .map(([level]) => Number(level));
        if (unlocked.length === 0) {
            facilities[f.name] = [{ count: 0, level: 1 }];
            return;
        }
        facilities[f.name] = [{ count: atHomeLevel(f.counts, homeLevel), level: Math.max(...unlocked) }];
    });
    const modules = Object.fromEntries(
        Object.entries(MODULE_MAX_LEVELS).map(([module, caps]) => [module, atHomeLevel(caps, homeLevel)])
    );
    return { facilities, modules };
}

