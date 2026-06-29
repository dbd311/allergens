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
        "peanut", "peanuts", "arachide", "cacahuète", "cacahuete", "cacahuètes", "cacahuetes",
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
        "gluten", "wheat", "flour", "bread", "biscuit", "biscuits", "biscuité", "biscuitée", "biscuite", "biscuitee", "pasta", "cake", "crackers",
        "blé", "ble", "farine", "pain", "génoise", "genoise", "boudoir",
        "trigo", "harina", "galleta", "glutine", "grano", "farina",
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

const LOCALIZED_GENERIC_RISKS = {
  peanut: [
    "vegetable oil", "house sauce", "asian sauce", "peanut sauce", "satay",
    "huile vegetale", "huile végétale", "sauce maison", "sauce asiatique", "sauce cacahuète",
    "aceite vegetal", "salsa de la casa", "salsa asiatica", "salsa de mani",
    "olio vegetale", "salsa della casa", "salsa asiatica", "salsa di arachidi",
    "pflanzenöl", "pflanzenol", "hausgemachte soße", "asiatische soße", "erdnusssoße",
    "óleo vegetal", "oleo vegetal", "molho da casa", "molho asiatico", "molho de amendoim",
    "dầu thực vật", "dau thuc vat", "nước sốt nhà làm", "sốt châu á", "sốt đậu phộng",
    "植物油", "自家製ソース", "アジア風ソース", "ピーナッツソース", "サテ",
    "식물성 기름", "수제 소스", "아시아 소스", "땅콩 소스", "사테",
    "植物油", "秘制酱", "亚洲风味酱", "花生酱", "沙爹",
    "वनस्पति तेल", "घर की चटनी", "एशियाई चटनी", "मूंगफली की चटनी"
  ],
  gluten: [
    "tiramisu", "biscuit", "boudoir", "genoise", "génoise", "pate a tarte", "pâte a tarte", "tarte du jour", "tarte", "pate", "pâte", "pizza", "nouilles", "pane", "pané", "crepe", "crêpe", "crepes", "crêpes", "galette", "cheesecake", "sauce soja", "soja", "nems", "samoussas", "beignets", "chapelure", "panure", "pates", "pasta", "riz saute", "beer", "biere",
    "sponge cake", "pie crust", "pie of the day", "pie", "dough", "noodles", "breaded", "pancake", "pancakes", "crepe", "crepes", "soy sauce", "spring rolls", "samosas", "fritters", "breadcrumbs", "fried rice",
    "galleta", "bizcocho", "masa de tarta", "tarta del dia", "tarta", "masa", "fideos", "empanizado", "salsa de soja", "rollitos de primavera", "samosas", "buñuelos", "pan rallado", "arroz frito", "cerveza",
    "biscotto", "pan di spagna", "crosta di torta", "torta del giorno", "torta", "impasto", "tagliatelle", "impanato", "salsa di soia", "involtini primavera", "samosa", "frittelle", "pangrattato", "riso fritto", "birra",
    "keks", "biskuit", "kuchenteig", "tageskuchen", "kuchen", "teig", "nudeln", "paniert", "sojasauce", "frühlingsrollen", "samosas", "krapfen", "paniermehl", "gebratener reis", "bier",
    "biscoito", "massa de torta", "torta do dia", "torta", "massa", "macarrão", "empanado", "molho de soja", "rolinhos primavera", "chamuças", "sonhos", "farinha de rosca", "arroz frito", "cerveja",
    "bánh quy", "banh quy", "đế bánh", "de banh", "bánh nướng", "banh nuong", "bột", "bot", "mì", "mi", "chiên xù", "chien xu", "nước tương", "nuoc tuong", "chả giò", "cha gio", "cơm chiên", "com chien", "bia",
    "ビスケット", "スポンジケーキ", "パイ生地", "本日のタルト", "タルト", "生地", "麺", "パン粉焼き", "醤油", "春巻き", "サモサ", "フリッター", "パン粉", "チャーハン", "ビール",
    "비스킷", "스펀지 케이크", "파이 껍질", "오늘의 타르트", "타르트", "반죽", "국수", "빵가루 입힌", "간장", "춘권", "사모사", "튀김", "빵가루", "볶음밥", "맥주",
    "饼干", "海绵蛋糕", "派皮", "今日蛋挞", "蛋挞", "面团", "面条", "裹面包屑", "酱油", "春卷", "咖喱角", "油炸饼", "面包屑", "炒饭", "啤酒",
    "बिस्कुट", "स्पंज केक", "पाई क्रस्ट", "आज की पाई", "पाई", "आटा", "नूडल्स", "ब्रेड किया हुआ", "सोया सॉस", "स्प्रिंग रोल", "समोसा", "पकौड़े", "ब्रेडक्रंब", "तला हुआ चावल", "बियर"
  ],
  milk: [
    "puree maison", "purée maison", "risotto", "veloute", "velouté", "soupe cremeuse", "soupe crémeuse", "creme", "crème", "fromage", "butter", "beurre",
    "house puree", "creamy soup", "cream", "cheese",
    "pure de la casa", "sopa cremosa", "crema", "queso", "mantequilla",
    "purea della casa", "zuppa cremosa", "crema", "formaggio", "burro",
    "hausgemachtes püree", "cremige suppe", "creme", "sahne", "käse", "butter",
    "purê da casa", "sopa cremosa", "creme", "queijo", "manteiga",
    "khoai tây nghiền", "khoai tay nghien", "súp kem", "sup kem", "kem", "phô mai", "pho mai", "bơ", "bo",
    "自家製ピューレ", "リゾット", "クリーミーなスープ", "クリーム", "チーズ", "バター",
    "수제 퓌레", "리조또", "크림 수프", "크림", "치즈", "버터",
    "自制土豆泥", "意大利烩饭", "奶油汤", "奶油", "奶酪", "黄油",
    "घर की प्यूरी", "रिसोट्टो", "मलाईदार सूप", "क्रीम", "पनीर", "मक्खन"
  ],
  pork: [
    "carbonara", "lardons", "pancetta", "bacon", "porc", "charcuterie", "ramen", "bouillon", "viande",
    "pork", "cold cuts", "broth", "meat",
    "cerdo", "embutidos", "caldo", "carne",
    "maiale", "salumi", "brodo", "carne",
    "schwein", "aufschnitt", "brühe", "fleisch",
    "porco", "frios", "caldo", "carne",
    "thịt heo", "thit heo", "thịt nguội", "thit nguoi", "nước dùng", "nuoc dung", "thịt", "thit",
    "カルボナーラ", "ベーコン", "パンチェッタ", "豚肉", "シャルキュトリー", "ラーメン", "スープ", "肉",
    "까르보나라", "베이컨", "판체타", "돼지고기", "샤퀴테리", "라멘", "국물", "고기",
    "培根意面", "培根", "猪肉", "熟食", "拉面", "肉汤", "肉",
    "कार्बोनारा", "बेकन", "पैनसेटा", "सूअर का मांस", "रामেন", "शोरबा", "मांस"
  ],
  vegetarian: [
    "salade cesar", "caesar salad", "anchois", "chicken", "poulet", "steak",
    "anchovies",
    "ensalada cesar", "anchoas", "pollo",
    "insalata cesare", "acciughe", "pollo", "bistecca",
    "caesar-salat", "sardellen", "hähnchen", "hahnchen",
    "salada caesar", "anchovas", "frango", "bife",
    "salad caesar", "cá cơm", "ca com", "gà", "ga", "bít tết", "bit tet",
    "シーザーサラダ", "アンチョビ", "鶏肉", "ステーキ",
    "시저 샐러드", "멸치", "닭고기", "스테이크",
    "凯撒沙拉", "凤尾鱼", "鸡肉", "牛排",
    "सीज़र सलाद", "एंकोवीज़", "चिकन", "स्टेक"
  ],
  vegan: [
    "pizza vegetarienne", "pizza végétarienne", "fromage", "creme", "crème", "oeufs", "oeuf",
    "vegetarian pizza", "cheese", "cream", "eggs", "egg",
    "pizza vegetariana", "queso", "crema", "huevos", "huevo",
    "pizza vegetariana", "formaggio", "crema", "uova", "uovo",
    "vegetarische pizza", "käse", "kase", "creme", "sahne", "eier", "ei",
    "pizza vegetariana", "queijo", "creme", "ovos", "ovo",
    "pizza chay", "phô mai", "pho mai", "kem", "trứng", "trung",
    "ベジタリアンピザ", "チーズ", "クリーム", "卵",
    "채식 피자", "치즈", "크림", "달걀", "계란",
    "素食比萨", "奶酪", "奶油", "鸡蛋", "蛋",
    "शाकाहारी पिज्जा", "पनीर", "क्रीम", "अंडे", "अंडा"
  ],
  halal: [
    "ramen", "bouillon", "poulet", "viande", "meat", "porc", "bacon", "pancetta", "carbonara", "lardons", "charcuterie",
    "broth", "chicken", "pork", "cold cuts",
    "caldo", "pollo", "carne", "cerdo", "embutidos",
    "brodo", "pollo", "carne", "maiale", "salumi",
    "brühe", "hähnchen", "fleisch", "schwein", "aufschnitt",
    "caldo", "frango", "carne", "porco", "frios",
    "nước dùng", "nuoc dung", "gà", "ga", "thịt", "thit", "thịt heo", "thit heo", "thịt nguội", "thit nguoi",
    "ラーメン", "スープ", "鶏肉", "肉", "豚肉", "ベーコン", "シャルキュトリー",
    "라멘", "국물", "닭고기", "고기", "돼지고기", "베이컨", "샤퀴테리",
    "拉面", "肉汤", "鸡肉", "肉", "猪肉", "培根", "熟食",
    "रामেন", "शोरबा", "चिकन", "मांस", "सूअर का मांस", "बेकन"
  ],
  kosher: [
    "ramen", "bouillon", "poulet", "viande", "meat", "porc", "bacon", "pancetta", "carbonara", "lardons", "charcuterie",
    "broth", "chicken", "pork", "cold cuts",
    "caldo", "pollo", "carne", "cerdo", "embutidos",
    "brodo", "pollo", "carne", "maiale", "salumi",
    "brühe", "hähnchen", "fleisch", "schwein", "aufschnitt",
    "caldo", "frango", "carne", "porco", "frios",
    "nước dùng", "nuoc dung", "gà", "ga", "thịt", "thit", "thịt heo", "thit heo", "thịt nguội", "thit nguoi",
    "ラーメン", "スープ", "鶏肉", "肉", "豚肉", "ベーコン", "シャルキュトリー",
    "라멘", "국물", "닭고기", "고기", "돼지고기", "베이컨", "샤퀴테리",
    "拉面", "肉汤", "鸡肉", "肉", "猪肉", "培根", "熟食",
    "रामেন", "शोरबा", "चिकन", "मांस", "सूअर का मांस", "बेकन"
  ],
  low_carb: [
    "poisson pane", "poisson pané", "fish and chips", "fish", "smoothie", "granola", "dessert", "fruit", "fruits", "riz", "nouilles", "pomme de terre", "patates", "pates", "pasta",
    "breaded fish", "rice", "noodles", "potato", "potatoes",
    "pescado empanizado", "pescado", "arroz", "fideos", "papa", "papas", "pasta",
    "pesce impanato", "pesce", "riso", "tagliatelle", "patata", "patate", "pasta",
    "panierter fisch", "fisch", "reis", "nudeln", "kartoffel", "kartoffeln", "pasta",
    "peixe empanado", "peixe", "arroz", "macarrão", "batata", "batatas", "massa",
    "cá tẩm bột", "ca tam bot", "cá", "ca", "cơm", "com", "mì", "mi", "khoai tây", "khoai tay",
    "白身魚のフライ", "魚", "スムージー", "グラノーラ", "デザート", "フルーツ", "果物", "ご飯", "麺", "じゃがいも", "パスタ",
    "생선 튀김", "생선", "스무디", "그래놀라", "디저트", "과일", "밥", "국수", "감자", "파스타",
    "炸鱼", "鱼", "冰沙", "麦片", "甜点", "水果", "米饭", "面条", "土豆", "意大利面",
    "ब्रेड वाली मछली", "मछली", "स्मूदी", "ग्रैनोला", "मिठाई", "फल", "चावल", "नूडल्स", "आलू", "पास्ता"
  ],
  low_sugar: [
    "smoothie", "granola", "dessert", "fruit", "fruits",
    "postre", "fruta", "frutas",
    "dolce", "frutta",
    "nachtisch", "obst",
    "sobremesa", "fruta", "frutas",
    "tráng miệng", "trang mieng", "trái cây", "trai cay",
    "スムージー", "グラノーラ", "デザート", "フルーツ", "果物",
    "스무디", "그래놀라", "디저트", "과일",
    "冰沙", "麦片", "甜点", "水果",
    "स्मूदी", "ग्रैनोला", "मिठाई", "फल"
  ],
  high_protein: [
    "salade proteinee", "salade protéinée", "protein salad",
    "ensalada de proteinas", "ensalada proteica",
    "insalata proteica",
    "proteinsalat",
    "salada de proteinas",
    "salad protein",
    "プロテインサラダ",
    "단백질 샐러드",
    "高蛋白沙拉",
    "प्रोटीन सलाद"
  ]
};

module.exports = {
  LOCALIZED_SYNONYM_GROUPS,
  ALLERGEN_ALIASES,
  LOCALIZED_GENERIC_RISKS
};
