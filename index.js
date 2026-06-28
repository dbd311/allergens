const LOCALIZED_SYNONYM_GROUPS = [
  {
    key: "cheese",
    triggers: {
      en: ["cheese"],
      fr: ["fromage"],
      es: ["queso"],
      it: ["formaggio"],
      de: ["käse", "kaese"],
      pt: ["queijo"],
      hi: ["पनीर", "चीज़", "चीज"],
      ja: ["チーズ"],
      kr: ["치즈"],
      vn: ["phô mai", "pho mai"],
      zh: ["奶酪", "芝士"],
      default: ["cheese"]
    },
    synonyms: {
      default: [
        "cheese", "fromage", "queso", "formaggio", "käse", "kaese", "queijo",
        "mozzarella", "gorgonzola", "parmesan", "parmesano", "parmesão",
        "fontina", "ricotta", "mascarpone", "camembert",
        "पनीर", "चीज़", "चीज", "チーズ", "치즈",
        "phô mai", "pho mai", "奶酪", "芝士"
      ]
    }
  },
  {
    key: "peanut",
    triggers: {
      en: ["peanut", "peanuts"],
      fr: ["cacahuète", "cacahuete", "arachide"],
      es: ["cacahuete", "cacahuète", "maní", "mani"],
      it: ["arachide", "arachidi"],
      de: ["erdnuss", "erdnüsse", "erdnusse"],
      pt: ["amendoim", "amendoins"],
      hi: ["मूंगफली"],
      ja: ["ピーナッツ", "落花生"],
      kr: ["땅콩"],
      vn: ["đậu phộng", "dau phong", "lạc", "lac"],
      zh: ["花生"],
      default: ["peanut"]
    },
    synonyms: {
      default: [
        "peanut", "peanuts", "arachide", "cacahuète", "cacahuete", "cacahuètes",
        "maní", "mani", "arachidi", "erdnuss", "erdnüsse", "erdnusse",
        "amendoim", "amendoins", "मूंगफली", "ピーナッツ", "落花生", "땅콩",
        "đậu phộng", "dau phong", "lạc", "lac", "花生"
      ]
    }
  },
  {
    key: "gluten",
    triggers: {
      en: ["gluten", "wheat", "flour", "biscuit", "bread", "pasta"],
      fr: ["gluten", "blé", "ble", "farine", "biscuit", "pain", "pâte", "pate", "nouilles"],
      es: ["gluten", "trigo", "harina", "galleta", "pan", "pasta"],
      it: ["glutine", "grano", "farina", "biscotto", "pane", "pasta"],
      de: ["gluten", "weizen", "mehl", "keks", "brot", "nudeln"],
      pt: ["glúten", "gluten", "trigo", "farinha", "biscoito", "pão", "pao", "massa"],
      hi: ["ग्लूटेन", "गेहूं", "आटा", "ब्रेड", "बिस्कुट"],
      ja: ["グルテン", "小麦", "小麦粉", "パン", "パスタ", "ビスケット"],
      kr: ["글루텐", "밀", "밀가루", "빵", "파스타", "비스킷"],
      vn: ["gluten", "lúa mì", "lua mi", "bột mì", "bot mi", "bánh mì", "banh mi", "mì", "mi"],
      zh: ["麸质", "小麦", "面粉", "面包", "饼干", "面条"],
      default: ["gluten"]
    },
    synonyms: {
      default: [
        "gluten", "wheat", "flour", "bread", "biscuit", "pasta", "cake", "crackers",
        "blé", "ble", "farine", "pain", "génoise", "genoise", "boudoir", "pâte", "pate", "nouilles", "pizza",
        "trigo", "harina", "galleta", "glutine", "grano", "farina", "pane",
        "weizen", "mehl", "brot", "nudeln", "glúten", "farinha", "pão", "pao", "massa",
        "ग्लूटेन", "गेहूं", "आटा", "ब्रेड", "बिस्कुट",
        "グルテン", "小麦", "小麦粉", "パン", "パスタ", "ビスケット",
        "글루텐", "밀", "밀가루", "빵", "파스타", "비스킷",
        "lúa mì", "lua mi", "bột mì", "bot mi", "bánh mì", "banh mi",
        "麸质", "小麦", "面粉", "面包", "饼干", "面条"
      ]
    }
  },
  {
    key: "milk",
    triggers: {
      en: ["milk", "cream", "butter", "cheese", "yogurt"],
      fr: ["lait", "crème", "creme", "beurre", "fromage", "yaourt"],
      es: ["leche", "crema", "mantequilla", "queso", "yogur"],
      it: ["latte", "panna", "burro", "formaggio", "yogurt"],
      de: ["milch", "sahne", "creme", "butter", "käse", "kaese", "joghurt"],
      pt: ["leite", "creme", "manteiga", "queijo", "iogurte"],
      hi: ["दूध", "क्रीम", "मक्खन", "पनीर", "दही"],
      ja: ["牛乳", "ミルク", "クリーム", "バター", "チーズ", "ヨーグルト"],
      kr: ["우유", "크림", "버터", "치즈", "요거트"],
      vn: ["sữa", "sua", "kem", "bơ", "bo", "phô mai", "pho mai", "sữa chua", "sua chua"],
      zh: ["牛奶", "奶油", "黄油", "奶酪", "芝士", "酸奶"],
      default: ["milk"]
    },
    synonyms: {
      default: [
        "milk", "cream", "butter", "cheese", "yogurt",
        "lait", "crème", "creme", "beurre", "fromage", "yaourt",
        "leche", "mantequilla", "queso", "latte", "panna", "burro", "formaggio",
        "milch", "sahne", "käse", "kaese", "joghurt", "leite", "manteiga", "queijo", "iogurte",
        "parmesan", "mascarpone", "mozzarella",
        "दूध", "क्रीम", "मक्खन", "पनीर", "दही",
        "牛乳", "ミルク", "クリーム", "バター", "チーズ", "ヨーグルト",
        "우유", "크림", "버터", "치즈", "요거트",
        "sữa", "sua", "kem", "bơ", "bo", "phô mai", "pho mai", "sữa chua", "sua chua",
        "牛奶", "奶油", "黄油", "奶酪", "芝士", "酸奶"
      ]
    }
  },
  {
    key: "pork",
    triggers: {
      en: ["pork", "ham", "bacon", "pancetta", "lardons"],
      fr: ["porc", "jambon", "bacon", "pancetta", "lardons", "charcuterie"],
      es: ["cerdo", "jamón", "jamon", "tocino", "panceta"],
      it: ["maiale", "prosciutto", "pancetta", "lardo"],
      de: ["schwein", "schweinefleisch", "schinken", "speck", "bacon"],
      pt: ["porco", "presunto", "bacon", "pancetta"],
      hi: ["सूअर", "सुअर", "पोर्क", "हैम", "बेकन"],
      ja: ["豚肉", "ポーク", "ハム", "ベーコン"],
      kr: ["돼지고기", "돼지", "햄", "베이컨"],
      vn: ["thịt heo", "thit heo", "thịt lợn", "thit lon", "heo", "lợn", "lon", "giăm bông", "giam bong", "ba chỉ", "ba chi"],
      zh: ["猪肉", "火腿", "培根"],
      default: ["pork"]
    },
    synonyms: {
      default: [
        "pork", "ham", "bacon", "pancetta", "lardons", "porc", "jambon", "charcuterie",
        "cerdo", "jamón", "jamon", "tocino", "panceta", "maiale", "prosciutto", "lardo",
        "schwein", "schweinefleisch", "schinken", "speck", "porco", "presunto",
        "सूअर", "सुअर", "पोर्क", "हैम", "बेकन",
        "豚肉", "ポーク", "ハム", "ベーコン",
        "돼지고기", "돼지", "햄", "베이컨",
        "thịt heo", "thit heo", "thịt lợn", "thit lon", "heo", "lợn", "lon", "giăm bông", "giam bong", "ba chỉ", "ba chi",
        "猪肉", "火腿", "培根"
      ]
    }
  }
];

const ALLERGEN_ALIASES = {
  nuts: [
    'nuts', 'nut', 'tree nuts', 'fruits à coque', 'fruit à coque', 'noix', 'nüsse', 'nusse',
    'frutos secos', 'frutta a guscio', 'frutos de casca rija', 'các loại hạt', '坚果', 'ナッツ', '견과류', 'मेवे',
    'almond', 'amande', 'almendra', 'mandel', 'mandorla', 'amêndoa', 'hạnh nhân', '杏仁', 'アーモンド', '아몬드',
    'hazelnut', 'noisette', 'avellana', 'haselnuss', 'nocciola', 'avelã', 'hạt phỉ', '榛子', 'ヘーゼルナッツ', '헤이즐넛',
    'walnut', 'noix', 'nuez', 'walnuss', 'noce', 'noz', 'quả óc chó', '核桃', 'くるみ', '호두',
    'cashew', 'noix de cajou', 'anacardo', 'cashewnuss', 'anacardio', 'caju', 'hạt điều', '腰果', 'カシューナッツ', '캐슈넛',
    'pecan', 'noix de pécan', 'pacana', 'pekannuss', 'noce pecan', 'noz pecã', 'hạt hồ đào', '美洲山核桃', 'ピーカンナッツ', '피칸',
    'pistachio', 'pistache', 'pistacho', 'pistazie', 'pistacchio', 'pistáchio', 'hạt dẻ cười', '开心果', 'ピスタチオ', '피스타치오',
  ],
  gluten: ['gluten'],
  milk: ['milk', 'lait', 'milch', 'leche', 'latte', 'leite', 'sữa', '牛奶', '牛乳', '우유', 'दूध'],
  eggs: ['egg', 'eggs', 'œuf', 'œufs', 'oeuf', 'oeufs', 'ei', 'eier', 'huevo', 'huevos', 'uovo', 'uova', 'ovo', 'ovos', 'trứng', '鸡蛋', '卵', '달걀', '계란', 'अंडा', 'अंडे'],
  shellfish: ['shellfish', 'crustacean', 'crustaceans', 'crustacé', 'crustacés', 'crustace', 'crustaces', 'krustentier', 'krustentiere', 'marisco', 'mariscos', 'crostaceo', 'crostacei', 'hải sản có vỏ', '甲壳类', '甲殻類', '갑각류', 'शेलफिश', 'shrimp', 'crevette', 'crevettes', 'gamba', 'gambas', 'garnele', 'gambero', 'tôm', '虾', 'エビ', '새우', 'झींगा', 'crab', 'crabe', 'lobster', 'homard', 'langouste', 'prawn', 'prawns'],
  fish: ['fish', 'poisson', 'fisch', 'pescado', 'pesce', 'peixe', 'cá', '鱼', '魚', '생선', 'मछली'],
  soy: ['soy', 'soja', 'soia', 'đậu nành', '大豆', '대두', 'सोया'],
  mustard: ['mustard', 'moutarde', 'senf', 'mostaza', 'senape', 'mostarda', 'mù tạt', '芥末', 'マスタード', '겨자', 'सरसों'],
  celery: ['celery', 'céleri', 'sellerie', 'apio', 'sedano', 'aipo', 'cần tây', '芹菜', 'セロリ', '샐러리', 'अजवाइन'],
  sesame: ['sesame', 'sésame', 'sesam', 'sesamo', 'gergelim', 'mè', '芝麻', 'ごま', '참깨', 'तिल'],
  peanut: ['peanut', 'peanuts', 'arachide', 'arachides', 'cacahuète', 'cacahuètes', 'cacahuate', 'maní', 'đậu phộng', '花生', 'ピーナッツ', '땅콩', 'मूंगफली'],
  sulfite: ['sulfite', 'sulfites', 'sulfitos', 'solfiti', '亜硫酸塩', '아황산염', '亚硫酸盐', 'sulfit', 'сульфиты'],
  lupin: ['lupin', 'lupins', 'altramuz', 'lupine', 'lupino', '羽扇豆', '루핀'],
  mollusc: ['mollusc', 'molluscs', 'mollusque', 'mollusques', 'molusco', 'weichtier', 'mollusco', '軟体動物', '연체동물', '软体动物', 'động vật thân mềm'],
  rice: ['rice', 'riz', 'arroz', 'reis', 'riso', 'cơm', 'cơm trắng', 'gạo', 'bún', 'phở', '米', '米飯', 'ごはん', '밥', 'चावल'],
  chicken: ['chicken', 'poulet', 'pollo', 'hähnchen', 'hahn', 'gà', 'gà 1 miếng', '鸡', '鶏肉', '치킨', '닭고기', 'मुर्गा'],
  pork: ['pork', 'porc', 'cerdo', 'schwein', 'maiale', 'thịt lợn', 'thịt heo', 'thịt nướng', 'thit nuong', 'bún thịt nướng', 'bun thit nuong', '猪肉', '豚肉', '돼지고기', 'सुअर का मांस'],
  beef: ['beef', 'bœuf', 'vaca', 'rind', 'manzo', 'thịt bò', '牛肉', '소고기', 'गोमांस'],
  seafood: ['seafood', 'sea food', 'seaFood', 'fruits de mer', 'fruit de mer', 'marisco', 'mariscos', 'frutti di mare', 'meeresfrüchte', 'hải sản', '海鲜', 'シーフード', '해산물', 'समुद्री भोजन'],
  red_meat: ['red meat', 'red_meat', 'redmeat', 'RedMeat', 'viande rouge', 'viandes rouges', 'carne roja', 'carnes rojas', 'rotes fleisch', 'carne rossa', 'carne vermelha', 'thịt đỏ', 'thit do', 'beef', 'bœuf', 'boeuf', 'thịt bò', 'thit bo', '牛肉', '소고기', 'pork', 'porc', 'thịt lợn', 'thịt heo', 'thịt nướng', 'thit nuong', 'bún thịt nướng', 'bun thit nuong', 'thit lon', '猪肉', '돼지고기', 'lamb', 'agneau', 'cordero', 'lamm', 'agnello', 'borrego', 'thịt cừu', '羊肉', '양고기', 'veal', 'veau', 'ternera', 'kalb', 'vitello', 'vitela', 'thịt bê', '小牛肉', '송아지고기'],
  cucumber: ['cucumber', 'concombre', 'pepino', 'gurke', 'cetriolo', 'dưa leo', 'dưa chuột', '黄瓜', 'きゅうり', '오이', 'खीरा'],
  tomato: ['tomato', 'tomate', 'pomodoro', 'cà chua', '番茄', 'トマト', '토마토', 'टमाटर'],
  cabbage: ['cabbage', 'chou', 'repollo', 'kohl', 'cavolo', 'cải', 'cải bắp', '卷心菜', 'キャベツ', '양배추', 'गोभी'],
  sauce: ['sauce', 'salsa', 'tương', 'nước sốt', '酱', 'ソース', '소스', 'चटनी'],
  coriander: ['coriander', 'cilantro', 'ngò', 'ngo', 'rau mùi', 'rau muoi', 'rau thơm', 'rau thom', 'persil vietnamien', 'vietnamese coriander', 'culantro', 'chinese parsley', 'coriandre', 'koriander', 'coriandolo', 'coentro', '香菜', 'パクチー', '고수', 'धनिया'],
};

module.exports = {
  LOCALIZED_SYNONYM_GROUPS,
  ALLERGEN_ALIASES
};
