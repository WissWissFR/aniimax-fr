// Couche de traduction française. Les clés anglaises (noms de bâtiments, d'items, de métiers…)
// restent celles que le solveur WASM attend ; seul l'AFFICHAGE passe par ces fonctions.

// Mettre à true pour franciser aussi les noms de bâtiments. Le wiki FR (aniimowiki.fr) les garde en
// anglais, comme le client : false évite de dérouter quelqu'un qui cherche le bâtiment en jeu.
export const TRANSLATE_FACILITY_NAMES = false;

const FACILITY_FR = {
    'Farmland': 'Terres cultivées',
    'Woodland': 'Boisement',
    'Mine': 'Mine',
    'Well': 'Puits',
    'Tidewhisper Sandcastle': 'Château de sable du Murmure des marées',
    'Dewy House': 'Maison de rosée',
    'Nimbus Bed': 'Lit de nimbus',
    'Starfall Hammock': 'Hamac des étoiles filantes',
    'Floral Windmill': 'Moulin à vent fleuri',
    'Heat Furnace': 'Fournaise',
    'Cooling Unit': 'Unité de refroidissement',
    'Sunlamp': 'Lampe solaire',
    'Carousel Mill': 'Moulin-carrousel',
    'Crafting Table': "Établi d'artisanat",
    'Claw Game Cooker': 'Cuiseur à pince',
    'Jukebox Dryer': 'Séchoir juke-box',
    'Simmering Pot': 'Marmite mijotante',
    'Phonolfactory Table': 'Table phonolfactive',
    'Bouncy Brew Keg': 'Tonneau rebondissant',
    'Blazing Stove': 'Poêle flamboyant',
    'Pickling Jar': 'Bocal de saumure',
    'Joy Wheel Loom': 'Métier à tisser roue de joie',
    'Dance Pad Polisher': 'Polisseuse à tapis de danse',
    'Aniipod Maker': "Fabrique d'Aniipods",
    'Woodworking Bench': 'Établi de menuiserie',
    'Chimney Kiln': 'Four-cheminée',
    'Storage Unit': 'Unité de stockage',
};

export function facilityLabel(name) {
    return TRANSLATE_FACILITY_NAMES ? (FACILITY_FR[name] || name) : name;
}

const CATEGORY_FR = {
    'Materials': 'Matériaux',
    'Environment': 'Environnement',
    'Aniimo Materials': 'Matériaux Aniimo',
    'Materials Processing': 'Transformation des matériaux',
};
export const categoryLabel = c => CATEGORY_FR[c] || c;

// Métiers (wiki FR : Portage, Artisanat, Loisir, Parfumerie) et éléments.
const ABILITY_FR = {
    Hauling: 'Portage', Artisanship: 'Artisanat', Leisure: 'Loisir', Perfumery: 'Parfumerie',
    Fire: 'Feu', Water: 'Eau', Grass: 'Herbe', Lightning: 'Foudre', Ice: 'Glace',
    Earth: 'Terre', Wind: 'Vent', Dark: 'Ombre', Light: 'Lumière',
};
export const abilityLabel = a => ABILITY_FR[a] || a;

const PERSONALITY_FR = {
    Instinctive: 'Instinctif', Energetic: 'Énergique', Nimble: 'Agile', Practical: 'Pragmatique',
    Faithful: 'Fidèle', Tenacious: 'Tenace', Playful: 'Joueur', Judicious: 'Judicieux',
};
export const personalityLabel = p => PERSONALITY_FR[p] || p;

// Modes d'environnement de culture.
const ENV_FR = {
    Freeze: 'Glacial', Cool: 'Frais', Warm: 'Chaud', Scorching: 'Brûlant', Adequate: 'Adéquat',
    'Room temp': 'Tempéré',
};
export const envLabel = m => ENV_FR[m] || m;

// Clé snake_case de la donnée -> nom français affiché.
const ITEM_FR = {
    coins: 'Pièces de Foyer',
    wood_block: 'Bloc de bois',
    'Wood Blocks': 'Blocs de bois',
    'Mineral Sand': 'Sable minéral',
    aniimo_exp: "EXP d'Aniimo",
    aniipods: 'Aniipods',
    season_points: 'Points de la Lune des moissons',
    advanced_gemstone_dust: 'Poussière de gemme avancée',
    advanced_lemon_incense: 'Encens au citron avancé',
    advanced_wind_chime: 'Carillon à vent avancé',
    agave: 'Agave',
    agave_drink: "Boisson à l'agave",
    agave_syrup: "Sirop d'agave",
    aniipod: 'Aniipod',
    aniipod_mega: 'Aniipod méga',
    aniipod_pro: 'Aniipod pro',
    apple: 'Pomme',
    apple_candy: 'Bonbon à la pomme',
    apple_juice: 'Jus de pomme',
    apple_tart: 'Tarte aux pommes',
    aromathyst: 'Aromathyste',
    bamboo: 'Bambou',
    bamboo_joss_stick: "Bâton d'encens au bambou",
    bamboo_ware: 'Vaisselle en bambou',
    berry_chocolate_coconut_pudding: 'Pudding chococo à la fraise',
    bouquet: 'Bouquet de fleurs',
    bread: 'Pain',
    candied_orange_flower: "Fleurs d'oranger confites",
    candied_strawberries: 'Fraises confites',
    caramel_nut_chips: 'Chips de noix au caramel',
    cherry_blossom: 'Fleur de cerisier',
    cherry_blossom_rice_ball: 'Boule de riz à la fleur de cerisier',
    cherry_incense: 'Encens à la cerise',
    chestnut: 'Châtaigne',
    chestnut_puree: 'Purée de châtaigne',
    cider_vinegar: 'Vinaigre de cidre',
    clay: 'Argile',
    coarse_sifted_ore: 'Minerai tamisé grossier',
    cocoa: 'Cacao',
    cocoa_powder: 'Poudre de cacao',
    cocoa_spread: 'Pâte à tartiner au cacao',
    coconut: 'Noix de coco',
    coconut_cocoa: 'Lait de coco au cacao',
    coconut_cookie: 'Cookies à la noix de coco',
    coconut_cooler: 'Boisson fraîche à la noix de coco',
    coconut_milk: 'Lait de coco',
    coconut_oil: 'Huile de coco',
    copper_ore: 'Minerai de cuivre',
    cotton: 'Coton',
    cotton_fabric: 'Tissu de coton',
    cotton_thread: 'Fil de coton',
    cranberry: 'Canneberge',
    cranberry_chocolate: 'Chocolat à la canneberge',
    cranberry_jam: 'Confiture de canneberge',
    cranberry_juice: 'Jus de canneberge',
    creamy_potato_soup: 'Soupe onctueuse de pomme de terre',
    deep_rock_spring_water: 'Eau de source des roches profondes',
    densified_timber_component: 'Élément en bois densifié',
    doll: 'Poupée',
    dream_catcher: 'Attrape-rêve',
    dried_apple_slices: 'Tranches de pomme séchée',
    dried_bean_curd: 'Tofu séché',
    dried_cherry_blossom: 'Fleur de cerisier séchée',
    dried_cranberries: 'Canneberges séchées',
    dried_flowers: 'Fleurs séchées',
    dried_ginseng: 'Ginseng séché',
    dried_grapes: 'Raisins secs',
    dried_lemon_slices: 'Tranches de citron séché',
    dried_strawberries: 'Fraises séchées',
    dye: 'Teinture',
    dyed_cotton_fabric: 'Tissu en coton teint',
    flower_bread: 'Pain aux fleurs',
    flowers_in_a_bottle: 'Fleurs en bouteille',
    fresh_water: 'Eau fraîche',
    gem: 'Gemme',
    gemstone_dust: 'Poussière de gemme',
    ginseng: 'Ginseng',
    ginseng_chestnut_cake: 'Gâteau au ginseng et à la châtaigne',
    ginseng_porridge: 'Bouillie de ginseng',
    ginseng_powder: 'Poudre de ginseng',
    ginseng_water: 'Eau de ginseng',
    grape: 'Raisin',
    grape_candy: 'Bonbon au raisin',
    grape_jam: 'Confiture de raisin',
    grape_juice: 'Jus de raisin',
    grape_lemon_drink: 'Boisson au raisin citronnée',
    growth_bud: 'Bourgeon de croissance',
    growth_flower: 'Fleur de croissance',
    growth_fruit: 'Fruit de croissance',
    harvest_platter: 'Plateau des moissons',
    herbal_ginseng_aroma: 'Arôme herbacé de ginseng',
    hot_cocoa: 'Chocolat chaud',
    jello: 'Gelée',
    laminated_beams: 'Poutres lamellées',
    lavender: 'Lavande',
    lavender_cookies: 'Biscuits à la lavande',
    lavender_incense: 'Encens à la lavande',
    lavender_powder: 'Poudre de lavande',
    lavender_sachet: 'Sachet de lavande',
    lemon: 'Citron',
    lemon_incense: 'Encens au citron',
    lotion: 'Lotion',
    malt_sugar: 'Sucre de malt',
    maple_candy_apple_jam: "Confiture de pomme au bonbon à l'érable",
    maple_candy_roasted_potatoes: "Pommes de terre rôties au bonbon à l'érable",
    maple_candy_star: "Bonbon en étoile à l'érable",
    maple_sugar_chunk: "Morceau de sucre d'érable",
    maple_syrup: "Sirop d'érable",
    microcrystalline_ore_plate: 'Plaque de minerai microcristallin',
    milled_rice: 'Riz décortiqué',
    mineral_sand: 'Sable minéral',
    mixed_perfume: 'Parfum composite',
    moondew_radish: 'Radis de rosée lunaire',
    moondew_radish_slices: 'Tranches de radis de rosée lunaire',
    natural_mineral_spring_water: 'Eau de source minérale naturelle',
    natural_rubber: 'Caoutchouc naturel',
    nuts: 'Fruits à coque',
    orange_flower: "Fleur d'oranger",
    orange_flower_dew: "Rosée de fleur d'oranger",
    orange_flower_incense: "Encens à la fleur d'oranger",
    palm_bark: 'Écorce de palmier',
    palm_rope: 'Corde de palmier',
    pearl: 'Perle',
    pearl_necklace: 'Collier de perles',
    petals: 'Pétales',
    plain_rice_porridge: 'Bouillie de riz nature',
    porcelain: 'Porcelaine',
    potato: 'Pomme de terre',
    potato_chips: 'Chips de pomme de terre',
    potato_kvass: 'Kvas de pomme de terre',
    pottery: 'Poterie',
    premium_berry_chocolate_coconut_pudding: 'Pudding chococo à la fraise premium',
    premium_bread: 'Pain premium',
    premium_jello: 'Gelée premium',
    premium_mixed_perfume: 'Parfum composite premium',
    premium_potato_soup: 'Soupe de pommes de terre premium',
    premium_river_washed_stones: 'Pierres polies de rivière premium',
    premium_rose_freshener: 'Désodorisant à la rose premium',
    premium_salted_lemon: 'Citron salé premium',
    premium_soap: 'Savon premium',
    premium_sweet_rice_wine: 'Vin de riz sucré premium',
    premium_wheat: 'Blé premium',
    quartz_ore: 'Minerai de quartz',
    quick_aromathyst: 'Aromathyste rapide',
    quick_bamboo: 'Bambou rapide',
    quick_coconut: 'Noix de coco rapide',
    quick_deep_rock_spring_water: 'Eau de source des roches profondes rapide',
    quick_fresh_water: 'Eau fraîche rapide',
    quick_lemon: 'Citron rapide',
    quick_maple_syrup: "Sirop d'érable rapide",
    quick_natural_mineral_spring_water: 'Eau de source minérale naturelle rapide',
    quick_potato: 'Pomme de terre rapide',
    quick_rice: 'Riz rapide',
    quick_scales: 'Écailles rapides',
    quick_sea_salt: 'Sel de mer rapide',
    quick_strawberry: 'Fraise rapide',
    quick_well_water: 'Eau de puits rapide',
    quick_wheat: 'Blé rapide',
    quick_wool: 'Laine rapide',
    refined_flour: 'Farine raffinée',
    refined_ore: 'Minerai raffiné',
    rice: 'Riz',
    rice_drink: 'Boisson au riz',
    rice_vinegar: 'Vinaigre de riz',
    rich_grape_compote: 'Compote de raisin gourmande',
    river_washed_stones: 'Pierres polies de rivière',
    roasted_soybeans: 'Graines de soja grillées',
    roasted_waxing_moon_pepper: 'Piment de lune croissante rôti',
    rock: 'Roche',
    rock_candy: 'Sucre candi',
    rose: 'Rose',
    rose_concentrate: 'Concentré de rose',
    rose_freshener: 'Désodorisant à la rose',
    rose_incense: 'Encens à la rose',
    rose_shortbread: 'Sablé à la rose',
    rough_lumber: 'Bois brut',
    rubber_duck: 'Canard en caoutchouc',
    salted_cherry_blossom: 'Fleur de cerisier salée',
    salted_lemon: 'Citron salé',
    scales: 'Écailles',
    sea_salt: 'Sel de mer',
    shell: 'Coquillage',
    shell_ornament: 'Coquillage décoratif',
    shredded_coconut: 'Noix de coco râpée',
    sintered_ore_brick: 'Brique de minerai frittée',
    soap: 'Savon',
    soy_sauce: 'Sauce soja',
    soy_sauce_fried_rice: 'Riz frit à la sauce soja',
    soy_sauce_tofu: 'Tofu à la sauce soja',
    soybean: 'Soja',
    standard_planks: 'Planches standard',
    star: 'Étoile',
    star_wish_lantern: 'Lanterne à vœu stellaire',
    steamed_vermicelli_roll: 'Rouleau de vermicelles à la vapeur',
    strawberry: 'Fraise',
    strawberry_candy: 'Bonbon à la fraise',
    strawberry_cream_puff: 'Chou à la crème à la fraise',
    strawberry_jam: 'Confiture de fraise',
    strawberry_juice: 'Jus de fraise',
    sugar_roasted_chestnuts: 'Châtaignes grillées au sucre',
    sugarcane: 'Canne à sucre',
    sugarcane_juice: 'Jus de canne à sucre',
    sweet_rice_drink: 'Boisson de riz sucrée',
    tanghulu: 'Tanghulu',
    toasted_rice_green_tea: 'Thé vert au riz grillé',
    tofu: 'Tofu',
    umbral_hot_pot: 'Ragoût ombral',
    umbral_pickle: 'Pickles ombral',
    umbral_sweet_and_spicy_sauce: 'Sauce sucrée-épicée ombrale',
    walnut: 'Noix',
    walnut_cake: 'Gâteau aux noix',
    walnut_milk: 'Lait de noix',
    waxing_moon_pepper: 'Piment de lune croissante',
    well_water: 'Eau de puits',
    wheat: 'Blé',
    wheat_tea: 'Thé au blé',
    wheatmeal: 'Farine complète',
    willow_wood: 'Bois de saule',
    wind_chime: 'Carillon à vent',
    wood_sculpture: 'Sculpture en bois',
    wool: 'Laine',
    wool_fabric: 'Tissu en laine',
    woolen_yarn: 'Pelote de laine',
    woven_toy: 'Jouet tressé',
};

// "quick_aromathyst" -> "Aromathyste rapide". Repli sur la clé mise en forme si le nom manque.
export function itemLabel(name) {
    if (!name) return name;
    if (ITEM_FR[name]) return ITEM_FR[name];
    const base = name.replace(/ \((for energy|for profit)\)$/, '');
    if (base !== name && ITEM_FR[base]) {
        return `${ITEM_FR[base]} (${name.endsWith('energy)') ? 'pour l\'énergie' : 'pour le profit'})`;
    }
    return name.split('_').map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');
}

// Messages que le solveur WASM renvoie en anglais (champs `reason` et `error`). Le WASM n'est pas
// recompilé : on traduit ici, motif par motif. `names` met en forme une liste "a, b" de clés d'items.
const REASONS = [
    [/^Sells directly$/, () => 'Vendu directement'],
    [/^For the level-up$/, () => 'Pour la montée de niveau'],
    [/^Nothing it can make helps this plan$/, () => "Rien de ce qu'il peut produire n'aide ce plan"],
    [/^No further profitable use found$/, () => 'Aucun autre usage rentable trouvé'],
    [/^Could not find a profitable production path\. Try increasing facility counts\.$/,
        () => "Aucune chaîne de production rentable trouvée. Essayez d'augmenter le nombre de bâtiments."],
    [/^No valid production plan to compute a goal from\.$/, () => 'Aucun plan de production valide pour calculer un objectif.'],
    [/^This goal would take an unreasonably long time to reach\.$/, () => 'Cet objectif prendrait un temps déraisonnable à atteindre.'],
    [/^Invalid input: (.*)$/s, (m) => `Entrée invalide : ${m[1]}`],
    [/^Exact plan failed its check: (.*)$/s, (m) => `Le plan exact a échoué à sa vérification : ${m[1]}`],
    [/^No items found that produce (.*) with current facility levels\.$/, (m, n) => `Aucun item trouvé qui produise ${n(m[1])} avec les niveaux de bâtiments actuels.`],
];

// Suffixes ajoutés par le solveur, dans l'ordre où il les accole à `reason`.
const REASON_PARTS = [
    [/^Sells directly(?=;|$)/, () => 'Vendu directement'],
    [/^For the level-up(?=;|$)/, () => 'Pour la montée de niveau'],
    [/^Used for ([^;]+?)(?=;|$)/, (m, n) => `Sert à ${n(m[1])}`],
    [/; the rest goes to the level-up/, () => ' ; le reste va à la montée de niveau'],
    [/; the rest sells directly/, () => ' ; le reste est vendu directement'],
    [/; takes turns with ([^;]+)(?=;|$)/, (m, n) => ` ; alterne avec ${n(m[1])}`],
    [/; grown without (\w+) at (\d+)% speed/, (m) => ` ; cultivé sans environnement ${envLabel(m[1])} à ${m[2]} % de vitesse`],
];

export function wasmText(text) {
    if (!text) return text;
    // Au milieu d'une phrase, les noms d'items prennent la minuscule ("Sert à fraises séchées").
    const lc = label => /^Aniipod/.test(label) ? label : label.charAt(0).toLowerCase() + label.slice(1);
    const names = list => list.split(', ').map(k => lc(itemLabel(k))).join(', ');
    for (const [re, fn] of REASONS) {
        const m = text.match(re);
        if (m) return fn(m, names);
    }
    let out = text;
    for (const [re, fn] of REASON_PARTS) {
        out = out.replace(re, (...args) => {
            const groups = args.slice(0, -2);
            groups.index = 0;
            return fn(groups, names);
        });
    }
    return out;
}

// "1 plot" / "3 plots" : le français met 0 et 1 au singulier.
export const plural = (n, one, many) => (Math.abs(n) < 2 ? one : many);
