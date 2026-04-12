// =============================================
// SAVEURS APP — Données des recettes
// Fichier partagé par toute l'équipe
// ⚠️ NE PAS MODIFIER la structure des objets
// =============================================

const recipes = [

  // ══════════════════════════════
  // PLATS CHAUDS
  // ══════════════════════════════
  {
    id: 1,
    title: "Poulet Rôti Méditerranéen",
    category: "Plats Chauds",
    time: "45 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.8,
    calories: 380,
    tags: ["poulet", "four", "méditerranéen"],
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    ingredients: [
      { name: "Poulet entier", amount: 1, unit: "entier" },
      { name: "Gousses d'ail", amount: 4, unit: "gousses" },
      { name: "Citron", amount: 1, unit: "pièce" },
      { name: "Huile d'olive", amount: 3, unit: "c.s" },
      { name: "Thym frais", amount: 2, unit: "branches" },
      { name: "Sel", amount: 1, unit: "c.c" },
      { name: "Poivre noir", amount: 0.5, unit: "c.c" }
    ],
    steps: [
      "Préchauffer le four à 200°C.",
      "Masser le poulet avec l'huile d'olive, l'ail écrasé et le thym.",
      "Glisser le citron coupé en deux à l'intérieur du poulet.",
      "Saler et poivrer généreusement sur toute la surface.",
      "Enfourner 45 min jusqu'à belle dorure. Arroser à mi-cuisson."
    ]
  },
  {
    id: 2,
    title: "Pasta Carbonara",
    category: "Plats Chauds",
    time: "25 min",
    baseServings: 2,
    difficulty: "Moyen",
    rating: 4.7,
    calories: 520,
    tags: ["pasta", "italien", "rapide"],
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    ingredients: [
      { name: "Spaghetti", amount: 200, unit: "g" },
      { name: "Lardons fumés", amount: 150, unit: "g" },
      { name: "Jaunes d'oeufs", amount: 3, unit: "pièces" },
      { name: "Pecorino râpé", amount: 60, unit: "g" },
      { name: "Poivre noir du moulin", amount: 1, unit: "c.c" },
      { name: "Sel", amount: 1, unit: "c.c" }
    ],
    steps: [
      "Cuire les spaghetti al dente dans une eau très salée.",
      "Faire dorer les lardons à sec dans une poêle chaude.",
      "Mélanger les jaunes d'oeufs avec le pecorino et beaucoup de poivre.",
      "Égoutter les pâtes en réservant une louche d'eau de cuisson.",
      "Hors du feu, mélanger pâtes + lardons + sauce oeufs avec un peu d'eau de cuisson."
    ]
  },
  {
    id: 3,
    title: "Curry de Pois Chiches",
    category: "Plats Chauds",
    time: "35 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.6,
    calories: 320,
    tags: ["indien", "végétarien", "épicé"],
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
    ingredients: [
      { name: "Pois chiches en boîte", amount: 400, unit: "g" },
      { name: "Tomates concassées", amount: 400, unit: "g" },
      { name: "Lait de coco", amount: 200, unit: "ml" },
      { name: "Oignon", amount: 1, unit: "pièce" },
      { name: "Pâte de curry rouge", amount: 2, unit: "c.s" },
      { name: "Ail", amount: 3, unit: "gousses" },
      { name: "Gingembre frais", amount: 1, unit: "c.c" },
      { name: "Huile de coco", amount: 2, unit: "c.s" }
    ],
    steps: [
      "Faire revenir l'oignon émincé dans l'huile de coco 5 min.",
      "Ajouter l'ail, le gingembre et la pâte de curry. Cuire 2 min.",
      "Incorporer les tomates et laisser mijoter 10 min.",
      "Ajouter les pois chiches égouttés et le lait de coco.",
      "Cuire encore 15 min à feu doux. Servir avec du riz basmati."
    ]
  },
  {
    id: 4,
    title: "Ratatouille Provençale",
    category: "Plats Chauds",
    time: "50 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.5,
    calories: 180,
    tags: ["français", "légumes", "provençal"],
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=600&q=80",
    ingredients: [
      { name: "Aubergines", amount: 2, unit: "pièces" },
      { name: "Courgettes", amount: 2, unit: "pièces" },
      { name: "Poivrons rouges", amount: 2, unit: "pièces" },
      { name: "Tomates", amount: 4, unit: "pièces" },
      { name: "Oignon", amount: 1, unit: "pièce" },
      { name: "Ail", amount: 3, unit: "gousses" },
      { name: "Herbes de Provence", amount: 2, unit: "c.c" },
      { name: "Huile d'olive", amount: 4, unit: "c.s" }
    ],
    steps: [
      "Couper tous les légumes en dés réguliers de 2 cm.",
      "Faire revenir l'oignon et l'ail dans l'huile d'olive 5 min.",
      "Ajouter les aubergines et poivrons. Cuire 10 min à feu moyen.",
      "Incorporer courgettes et tomates. Assaisonner généreusement.",
      "Mijoter 25 min à feu doux en remuant régulièrement."
    ]
  },
  {
    id: 5,
    title: "Quiche Lorraine",
    category: "Plats Chauds",
    time: "55 min",
    baseServings: 6,
    difficulty: "Moyen",
    rating: 4.6,
    calories: 410,
    tags: ["français", "oeuf", "four", "lardons"],
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80",
    ingredients: [
      { name: "Pâte brisée", amount: 1, unit: "rouleau" },
      { name: "Lardons fumés", amount: 200, unit: "g" },
      { name: "Oeufs", amount: 3, unit: "pièces" },
      { name: "Crème fraîche épaisse", amount: 200, unit: "ml" },
      { name: "Lait entier", amount: 100, unit: "ml" },
      { name: "Noix de muscade", amount: 0.5, unit: "c.c" },
      { name: "Sel et poivre", amount: 1, unit: "portion" }
    ],
    steps: [
      "Préchauffer le four à 180°C. Foncer le moule avec la pâte brisée.",
      "Faire revenir les lardons à la poêle sans matière grasse.",
      "Battre les oeufs avec la crème, le lait, la muscade, sel et poivre.",
      "Verser l'appareil sur les lardons dans le moule.",
      "Enfourner 35-40 min jusqu'à ce que la quiche soit dorée et gonflée."
    ]
  },

  // ══════════════════════════════
  // PLATS FROIDS
  // ══════════════════════════════
  {
    id: 6,
    title: "Buddha Bowl Frais",
    category: "Plats Froids",
    time: "20 min",
    baseServings: 2,
    difficulty: "Facile",
    rating: 4.6,
    calories: 450,
    tags: ["healthy", "bowl", "quinoa", "coloré"],
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    ingredients: [
      { name: "Quinoa cuit refroidi", amount: 200, unit: "g" },
      { name: "Avocat mûr", amount: 1, unit: "pièce" },
      { name: "Pois chiches rôtis", amount: 150, unit: "g" },
      { name: "Carottes râpées", amount: 2, unit: "pièces" },
      { name: "Épinards frais", amount: 80, unit: "g" },
      { name: "Sauce tahini", amount: 3, unit: "c.s" },
      { name: "Jus de citron", amount: 1, unit: "c.s" },
      { name: "Graines de sésame", amount: 1, unit: "c.s" }
    ],
    steps: [
      "Cuire le quinoa 15 min dans l'eau salée. Laisser refroidir complètement.",
      "Râper les carottes et couper l'avocat en tranches.",
      "Préparer la sauce en mélangeant tahini, jus de citron et un peu d'eau.",
      "Assembler le bowl en sections colorées sur le quinoa froid.",
      "Napper de sauce tahini et parsemer de graines de sésame."
    ]
  },
  {
    id: 7,
    title: "Salade Niçoise",
    category: "Plats Froids",
    time: "20 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.5,
    calories: 280,
    tags: ["salade", "français", "thon", "méditerranéen"],
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    ingredients: [
      { name: "Thon en boîte", amount: 200, unit: "g" },
      { name: "Oeufs durs", amount: 4, unit: "pièces" },
      { name: "Haricots verts cuits", amount: 200, unit: "g" },
      { name: "Tomates cerises", amount: 200, unit: "g" },
      { name: "Olives noires", amount: 80, unit: "g" },
      { name: "Anchois", amount: 8, unit: "filets" },
      { name: "Vinaigrette maison", amount: 4, unit: "c.s" }
    ],
    steps: [
      "Faire cuire les oeufs durs 10 min. Refroidir et écaler.",
      "Blanchir les haricots verts 5 min. Refroidir à l'eau glacée.",
      "Couper les tomates cerises en deux, les oeufs en quartiers.",
      "Disposer tous les ingrédients harmonieusement dans le plat.",
      "Arroser de vinaigrette et garnir d'anchois et d'olives noires."
    ]
  },
  {
    id: 8,
    title: "Gaspacho Andalou",
    category: "Plats Froids",
    time: "15 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.4,
    calories: 95,
    tags: ["espagnol", "soupe froide", "tomate", "été"],
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80",
    ingredients: [
      { name: "Tomates mûres", amount: 800, unit: "g" },
      { name: "Concombre", amount: 1, unit: "pièce" },
      { name: "Poivron rouge", amount: 1, unit: "pièce" },
      { name: "Ail", amount: 2, unit: "gousses" },
      { name: "Huile d'olive", amount: 4, unit: "c.s" },
      { name: "Vinaigre de xérès", amount: 2, unit: "c.s" },
      { name: "Sel", amount: 1, unit: "c.c" }
    ],
    steps: [
      "Éplucher et couper grossièrement tous les légumes.",
      "Mixer tomates + concombre + poivron + ail jusqu'à texture lisse.",
      "Ajouter l'huile d'olive et le vinaigre. Mixer encore 1 min.",
      "Saler et ajuster l'assaisonnement selon le goût.",
      "Réfrigérer au moins 2h avant de servir bien frais avec des croûtons."
    ]
  },
  {
    id: 9,
    title: "Wrap Poulet César",
    category: "Plats Froids",
    time: "15 min",
    baseServings: 2,
    difficulty: "Facile",
    rating: 4.5,
    calories: 390,
    tags: ["wrap", "poulet", "rapide", "lunch"],
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
    ingredients: [
      { name: "Tortillas", amount: 2, unit: "pièces" },
      { name: "Blanc de poulet cuit", amount: 200, unit: "g" },
      { name: "Salade romaine", amount: 100, unit: "g" },
      { name: "Sauce César", amount: 3, unit: "c.s" },
      { name: "Parmesan râpé", amount: 30, unit: "g" },
      { name: "Croûtons", amount: 30, unit: "g" },
      { name: "Tomates cerises", amount: 6, unit: "pièces" }
    ],
    steps: [
      "Découper le poulet cuit en lanières.",
      "Couper les tomates cerises en deux et émincer la romaine.",
      "Réchauffer légèrement les tortillas 30 sec au micro-ondes.",
      "Étaler la sauce César sur chaque tortilla.",
      "Garnir de poulet, romaine, tomates, croûtons et parmesan.",
      "Rouler le wrap fermement et couper en deux en diagonale."
    ]
  },
  {
    id: 10,
    title: "Taboulé Oriental",
    category: "Plats Froids",
    time: "20 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.4,
    calories: 180,
    tags: ["libanais", "semoule", "végétarien", "frais"],
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80",
    ingredients: [
      { name: "Semoule fine", amount: 200, unit: "g" },
      { name: "Tomates", amount: 3, unit: "pièces" },
      { name: "Concombre", amount: 1, unit: "pièce" },
      { name: "Persil plat", amount: 1, unit: "bouquet" },
      { name: "Menthe fraîche", amount: 0.5, unit: "bouquet" },
      { name: "Jus de citron", amount: 3, unit: "c.s" },
      { name: "Huile d'olive", amount: 3, unit: "c.s" },
      { name: "Sel", amount: 1, unit: "c.c" }
    ],
    steps: [
      "Verser l'eau bouillante sur la semoule, couvrir 5 min puis égrener.",
      "Couper tomates et concombre en très petits dés.",
      "Hacher finement le persil et la menthe.",
      "Mélanger semoule refroidie + légumes + herbes.",
      "Assaisonner avec citron, huile et sel. Réfrigérer 30 min."
    ]
  },

  // ══════════════════════════════
  // DESSERTS
  // ══════════════════════════════
  {
    id: 11,
    title: "Tiramisu Classique",
    category: "Desserts",
    time: "30 min",
    baseServings: 6,
    difficulty: "Moyen",
    rating: 4.9,
    calories: 290,
    tags: ["café", "mascarpone", "italien", "sans cuisson"],
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    ingredients: [
      { name: "Mascarpone", amount: 250, unit: "g" },
      { name: "Oeufs", amount: 3, unit: "pièces" },
      { name: "Sucre", amount: 100, unit: "g" },
      { name: "Café fort refroidi", amount: 200, unit: "ml" },
      { name: "Biscuits à la cuillère", amount: 200, unit: "g" },
      { name: "Cacao en poudre", amount: 2, unit: "c.s" },
      { name: "Amaretto (optionnel)", amount: 2, unit: "c.s" }
    ],
    steps: [
      "Séparer les blancs des jaunes d'oeufs.",
      "Fouetter le mascarpone avec les jaunes et le sucre jusqu'à blanchiment.",
      "Monter les blancs en neige ferme et les incorporer délicatement.",
      "Tremper les biscuits rapidement dans le café froid.",
      "Alterner couches de crème et de biscuits dans un plat.",
      "Saupoudrer de cacao. Réfrigérer minimum 4h avant de servir."
    ]
  },
  {
    id: 12,
    title: "Tarte Tatin aux Pommes",
    category: "Desserts",
    time: "55 min",
    baseServings: 6,
    difficulty: "Difficile",
    rating: 4.8,
    calories: 340,
    tags: ["pomme", "caramel", "four", "français"],
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80",
    ingredients: [
      { name: "Pommes Golden", amount: 6, unit: "pièces" },
      { name: "Sucre", amount: 150, unit: "g" },
      { name: "Beurre demi-sel", amount: 80, unit: "g" },
      { name: "Pâte feuilletée", amount: 1, unit: "rouleau" },
      { name: "Cannelle", amount: 0.5, unit: "c.c" }
    ],
    steps: [
      "Éplucher et couper les pommes en gros quartiers.",
      "Faire fondre beurre + sucre dans un moule à tatin pour obtenir un caramel doré.",
      "Disposer les pommes bien serrées en rosace. Saupoudrer de cannelle.",
      "Couvrir avec la pâte feuilletée en rentrant les bords sous les pommes.",
      "Cuire 30 min à 200°C puis retourner immédiatement sur un plat de service."
    ]
  },
  {
    id: 13,
    title: "Mousse au Chocolat",
    category: "Desserts",
    time: "20 min",
    baseServings: 4,
    difficulty: "Moyen",
    rating: 4.7,
    calories: 310,
    tags: ["chocolat", "mousseux", "sans farine"],
    color: "#92400E",
    image: "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?w=600&q=80",
    ingredients: [
      { name: "Chocolat noir 70%", amount: 200, unit: "g" },
      { name: "Oeufs", amount: 4, unit: "pièces" },
      { name: "Sucre", amount: 40, unit: "g" },
      { name: "Beurre", amount: 30, unit: "g" },
      { name: "Sel", amount: 1, unit: "pincée" }
    ],
    steps: [
      "Faire fondre le chocolat avec le beurre au bain-marie. Laisser tiédir.",
      "Séparer les blancs des jaunes. Ajouter les jaunes au chocolat fondu.",
      "Ajouter le sucre et bien mélanger.",
      "Monter les blancs en neige ferme avec une pincée de sel.",
      "Incorporer délicatement les blancs au chocolat en 3 fois.",
      "Répartir dans des verrines. Réfrigérer minimum 3h avant de servir."
    ]
  },
  {
    id: 14,
    title: "Crème Brûlée",
    category: "Desserts",
    time: "60 min",
    baseServings: 4,
    difficulty: "Moyen",
    rating: 4.8,
    calories: 380,
    tags: ["français", "vanille", "crème", "chalumeau"],
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80",
    ingredients: [
      { name: "Crème liquide entière", amount: 500, unit: "ml" },
      { name: "Jaunes d'oeufs", amount: 5, unit: "pièces" },
      { name: "Sucre en poudre", amount: 100, unit: "g" },
      { name: "Gousse de vanille", amount: 1, unit: "pièce" },
      { name: "Sucre roux", amount: 4, unit: "c.s" }
    ],
    steps: [
      "Préchauffer le four à 150°C. Fendre la vanille et gratter les graines.",
      "Chauffer la crème avec la vanille sans faire bouillir.",
      "Fouetter jaunes d'oeufs et sucre jusqu'à blanchiment.",
      "Verser la crème chaude sur les jaunes en fouettant doucement.",
      "Répartir dans des ramequins. Cuire au bain-marie 45 min.",
      "Réfrigérer 4h. Saupoudrer de sucre roux et brûler au chalumeau."
    ]
  },
  {
    id: 15,
    title: "Fondant au Chocolat",
    category: "Desserts",
    time: "25 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.9,
    calories: 420,
    tags: ["chocolat", "coulant", "four", "rapide"],
    color: "#7C2D12",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    ingredients: [
      { name: "Chocolat noir", amount: 150, unit: "g" },
      { name: "Beurre", amount: 100, unit: "g" },
      { name: "Oeufs entiers", amount: 3, unit: "pièces" },
      { name: "Sucre", amount: 80, unit: "g" },
      { name: "Farine", amount: 40, unit: "g" }
    ],
    steps: [
      "Préchauffer le four à 200°C. Beurrer 4 ramequins.",
      "Faire fondre chocolat + beurre au bain-marie.",
      "Fouetter oeufs et sucre jusqu'à blanchiment.",
      "Ajouter le chocolat fondu puis la farine tamisée.",
      "Verser dans les ramequins. Cuire exactement 11 min.",
      "Démouler immédiatement et servir avec une boule de glace vanille."
    ]
  },

  // ══════════════════════════════
  // VEGAN
  // ══════════════════════════════
  {
    id: 16,
    title: "Burger Vegan Maison",
    category: "Vegan",
    time: "40 min",
    baseServings: 4,
    difficulty: "Moyen",
    rating: 4.5,
    calories: 420,
    tags: ["burger", "pois chiches", "complet"],
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80",
    ingredients: [
      { name: "Pois chiches cuits", amount: 400, unit: "g" },
      { name: "Flocons d'avoine", amount: 80, unit: "g" },
      { name: "Oignon", amount: 1, unit: "pièce" },
      { name: "Ail", amount: 2, unit: "gousses" },
      { name: "Cumin", amount: 1, unit: "c.c" },
      { name: "Paprika fumé", amount: 1, unit: "c.c" },
      { name: "Pains burger", amount: 4, unit: "pièces" },
      { name: "Avocat, salade, tomate", amount: 1, unit: "portion" }
    ],
    steps: [
      "Mixer les pois chiches grossièrement avec l'oignon et l'ail.",
      "Ajouter les flocons d'avoine et les épices. Bien mélanger.",
      "Former 4 steaks et réfrigérer 30 min pour qu'ils se tiennent.",
      "Cuire à la poêle avec un filet d'huile 4 min de chaque côté.",
      "Toaster les pains. Assembler avec avocat, salade, tomate et sauce."
    ]
  },
  {
    id: 17,
    title: "Dahl de Lentilles Corail",
    category: "Vegan",
    time: "30 min",
    baseServings: 3,
    difficulty: "Facile",
    rating: 4.6,
    calories: 290,
    tags: ["lentilles", "indien", "protéines", "épicé"],
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&q=80",
    ingredients: [
      { name: "Lentilles corail", amount: 250, unit: "g" },
      { name: "Lait de coco", amount: 400, unit: "ml" },
      { name: "Tomates concassées", amount: 200, unit: "g" },
      { name: "Curcuma", amount: 1, unit: "c.c" },
      { name: "Cumin", amount: 1, unit: "c.c" },
      { name: "Gingembre en poudre", amount: 1, unit: "c.c" },
      { name: "Oignon", amount: 1, unit: "pièce" },
      { name: "Coriandre fraîche", amount: 0.5, unit: "bouquet" }
    ],
    steps: [
      "Faire revenir l'oignon émincé dans l'huile jusqu'à dorure.",
      "Ajouter curcuma, cumin et gingembre. Mélanger 1 min.",
      "Incorporer les lentilles rincées, les tomates et le lait de coco.",
      "Couvrir et cuire 20 min à feu doux en remuant régulièrement.",
      "Servir parsemé de coriandre fraîche avec du riz basmati."
    ]
  },
  {
    id: 18,
    title: "Rouleaux de Printemps Vegan",
    category: "Vegan",
    time: "30 min",
    baseServings: 4,
    difficulty: "Moyen",
    rating: 4.4,
    calories: 180,
    tags: ["vietnamien", "frais", "légumes", "sans cuisson"],
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
    ingredients: [
      { name: "Galettes de riz", amount: 8, unit: "pièces" },
      { name: "Vermicelles de riz cuits", amount: 100, unit: "g" },
      { name: "Carottes", amount: 2, unit: "pièces" },
      { name: "Concombre", amount: 1, unit: "pièce" },
      { name: "Avocat", amount: 1, unit: "pièce" },
      { name: "Feuilles de menthe", amount: 16, unit: "feuilles" },
      { name: "Sauce hoisin", amount: 4, unit: "c.s" },
      { name: "Cacahuètes concassées", amount: 30, unit: "g" }
    ],
    steps: [
      "Couper carottes, concombre et avocat en julienne fine.",
      "Tremper une galette de riz 10 sec dans l'eau tiède.",
      "Déposer légumes, vermicelles et feuilles de menthe au centre.",
      "Replier les côtés puis rouler serré comme un cigare.",
      "Répéter pour les 8 rouleaux. Servir avec sauce hoisin et cacahuètes."
    ]
  },
  {
    id: 19,
    title: "Poke Bowl Tofu",
    category: "Vegan",
    time: "25 min",
    baseServings: 2,
    difficulty: "Facile",
    rating: 4.5,
    calories: 390,
    tags: ["hawaïen", "riz", "tofu", "healthy"],
    color: "#6366F1",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    ingredients: [
      { name: "Riz à sushi cuit", amount: 300, unit: "g" },
      { name: "Tofu ferme", amount: 200, unit: "g" },
      { name: "Avocat", amount: 1, unit: "pièce" },
      { name: "Concombre", amount: 0.5, unit: "pièce" },
      { name: "Edamames cuits", amount: 100, unit: "g" },
      { name: "Sauce soja", amount: 2, unit: "c.s" },
      { name: "Huile de sésame", amount: 1, unit: "c.s" },
      { name: "Graines de sésame", amount: 1, unit: "c.s" }
    ],
    steps: [
      "Cuire le riz à sushi et assaisonner avec vinaigre de riz.",
      "Couper le tofu en dés et le faire mariner 15 min dans sauce soja + sésame.",
      "Faire revenir le tofu mariné à la poêle jusqu'à belle dorure.",
      "Couper avocat et concombre en tranches fines.",
      "Assembler : riz + tofu + légumes + edamames. Arroser de sauce."
    ]
  },
  {
    id: 20,
    title: "Soupe de Courge Rôtie",
    category: "Vegan",
    time: "50 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.3,
    calories: 160,
    tags: ["soupe", "courge", "automne", "réconfortant"],
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    ingredients: [
      { name: "Courge butternut", amount: 1, unit: "pièce" },
      { name: "Carottes", amount: 3, unit: "pièces" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Ail", amount: 4, unit: "gousses" },
      { name: "Bouillon de légumes", amount: 800, unit: "ml" },
      { name: "Crème de coco", amount: 100, unit: "ml" },
      { name: "Huile d'olive", amount: 3, unit: "c.s" },
      { name: "Cumin", amount: 1, unit: "c.c" }
    ],
    steps: [
      "Préchauffer le four à 200°C.",
      "Couper courge, carottes et oignons en morceaux. Huiler, saler.",
      "Rôtir 30 min au four jusqu'à légère caramélisation.",
      "Mixer les légumes rôtis avec le bouillon chaud.",
      "Ajouter la crème de coco et le cumin. Réchauffer et servir."
    ]
  },

  // ══════════════════════════════
  // GRILLADES
  // ══════════════════════════════
  {
    id: 21,
    title: "Brochettes d'Agneau",
    category: "Grillades",
    time: "50 min",
    baseServings: 4,
    difficulty: "Moyen",
    rating: 4.7,
    calories: 460,
    tags: ["agneau", "barbecue", "marinade"],
    color: "#DC2626",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    ingredients: [
      { name: "Épaule d'agneau", amount: 800, unit: "g" },
      { name: "Huile d'olive", amount: 4, unit: "c.s" },
      { name: "Citron", amount: 2, unit: "pièces" },
      { name: "Ail", amount: 4, unit: "gousses" },
      { name: "Cumin", amount: 2, unit: "c.c" },
      { name: "Paprika", amount: 2, unit: "c.c" },
      { name: "Coriandre fraîche", amount: 1, unit: "bouquet" }
    ],
    steps: [
      "Couper l'agneau en cubes de 3 cm.",
      "Mélanger huile, jus de citron, ail écrasé, cumin et paprika.",
      "Mariner l'agneau au moins 2h au réfrigérateur.",
      "Enfiler sur des brochettes en alternant avec des légumes.",
      "Griller 15-20 min sur barbecue chaud en retournant régulièrement.",
      "Parsemer de coriandre fraîche avant de servir."
    ]
  },
  {
    id: 22,
    title: "Côtes de Porc Caramélisées",
    category: "Grillades",
    time: "45 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.6,
    calories: 510,
    tags: ["porc", "barbecue", "miel", "caramélisé"],
    color: "#B45309",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    ingredients: [
      { name: "Côtes de porc", amount: 4, unit: "pièces" },
      { name: "Sauce soja", amount: 3, unit: "c.s" },
      { name: "Miel", amount: 2, unit: "c.s" },
      { name: "Ail", amount: 3, unit: "gousses" },
      { name: "Vinaigre balsamique", amount: 1, unit: "c.s" },
      { name: "Gingembre en poudre", amount: 1, unit: "c.c" },
      { name: "Poivre", amount: 0.5, unit: "c.c" }
    ],
    steps: [
      "Mélanger sauce soja, miel, ail écrasé, vinaigre et gingembre.",
      "Badigeonner généreusement les côtes de cette marinade.",
      "Laisser mariner 1h minimum au réfrigérateur.",
      "Griller sur barbecue chaud 8 min de chaque côté.",
      "Badigeonner à nouveau de marinade en fin pour caraméliser."
    ]
  },
  {
    id: 23,
    title: "Entrecôte Maître d'Hôtel",
    category: "Grillades",
    time: "20 min",
    baseServings: 2,
    difficulty: "Facile",
    rating: 4.8,
    calories: 550,
    tags: ["boeuf", "grillade", "beurre", "rapide"],
    color: "#991B1B",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    ingredients: [
      { name: "Entrecôtes", amount: 2, unit: "pièces" },
      { name: "Beurre doux", amount: 60, unit: "g" },
      { name: "Persil plat frais", amount: 0.5, unit: "bouquet" },
      { name: "Ail", amount: 1, unit: "gousse" },
      { name: "Jus de citron", amount: 1, unit: "c.s" },
      { name: "Sel de mer", amount: 1, unit: "c.c" },
      { name: "Poivre concassé", amount: 0.5, unit: "c.c" }
    ],
    steps: [
      "Préparer le beurre maître d'hôtel : beurre mou + persil + ail + citron.",
      "Former un boudin dans du film alimentaire. Réfrigérer 30 min.",
      "Sortir les entrecôtes 30 min avant. Saler et poivrer.",
      "Griller 3 min de chaque côté sur grill très chaud.",
      "Déposer une rondelle de beurre maître d'hôtel sur chaque entrecôte."
    ]
  },
  {
    id: 24,
    title: "Poulet Grillé Épicé",
    category: "Grillades",
    time: "60 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.6,
    calories: 340,
    tags: ["poulet", "épicé", "marinade", "barbecue"],
    color: "#F97316",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80",
    ingredients: [
      { name: "Pilons de poulet", amount: 8, unit: "pièces" },
      { name: "Paprika fumé", amount: 2, unit: "c.c" },
      { name: "Ail en poudre", amount: 1, unit: "c.c" },
      { name: "Piment de Cayenne", amount: 0.5, unit: "c.c" },
      { name: "Huile d'olive", amount: 3, unit: "c.s" },
      { name: "Jus de citron", amount: 2, unit: "c.s" },
      { name: "Sel", amount: 1, unit: "c.c" }
    ],
    steps: [
      "Inciser les pilons en profondeur pour que la marinade pénètre bien.",
      "Mélanger toutes les épices avec huile et jus de citron.",
      "Enduire généreusement les pilons. Repos 2h minimum.",
      "Griller sur barbecue 15 min de chaque côté à feu moyen.",
      "Vérifier la cuisson : le jus doit être clair."
    ]
  },
  {
    id: 25,
    title: "Légumes Grillés aux Herbes",
    category: "Grillades",
    time: "30 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.3,
    calories: 150,
    tags: ["légumes", "végétarien", "barbecue", "herbes"],
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    ingredients: [
      { name: "Courgettes", amount: 2, unit: "pièces" },
      { name: "Poivrons variés", amount: 3, unit: "pièces" },
      { name: "Aubergine", amount: 1, unit: "pièce" },
      { name: "Champignons portobello", amount: 4, unit: "pièces" },
      { name: "Huile d'olive", amount: 4, unit: "c.s" },
      { name: "Herbes de Provence", amount: 2, unit: "c.c" },
      { name: "Ail", amount: 2, unit: "gousses" },
      { name: "Sel et poivre", amount: 1, unit: "portion" }
    ],
    steps: [
      "Couper tous les légumes en tranches de 1 cm.",
      "Mélanger huile + ail écrasé + herbes de Provence.",
      "Badigeonner généreusement chaque légume.",
      "Griller chaque légume 3-4 min de chaque côté.",
      "Saler, poivrer et arroser d'un filet d'huile avant de servir."
    ]
  },

  // ══════════════════════════════
  // AFRICAIN
  // ══════════════════════════════
  {
    id: 26,
    title: "Poulet DG",
    category: "Africain",
    time: "60 min",
    baseServings: 6,
    difficulty: "Moyen",
    rating: 4.9,
    calories: 520,
    tags: ["cameroun", "poulet", "plantain", "festif"],
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    ingredients: [
      { name: "Poulet découpé", amount: 1.5, unit: "kg" },
      { name: "Bananes plantains mûres", amount: 3, unit: "pièces" },
      { name: "Carottes", amount: 3, unit: "pièces" },
      { name: "Haricots verts", amount: 200, unit: "g" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Ail", amount: 5, unit: "gousses" },
      { name: "Poivron rouge", amount: 2, unit: "pièces" },
      { name: "Cube Maggi", amount: 2, unit: "pièces" },
      { name: "Piment", amount: 1, unit: "pièce" }
    ],
    steps: [
      "Assaisonner le poulet avec ail, sel, Maggi et épices. Faire dorer à l'huile.",
      "Retirer le poulet. Faire revenir oignons et poivrons dans la même huile.",
      "Ajouter carottes et haricots verts coupés. Cuire 5 min.",
      "Remettre le poulet. Frire les plantains séparément jusqu'à dorure.",
      "Ajouter les plantains frits dans la sauce.",
      "Mijoter 15 min à feu doux jusqu'à cuisson complète."
    ]
  },
  {
    id: 27,
    title: "Ndolé aux Crevettes",
    category: "Africain",
    time: "90 min",
    baseServings: 6,
    difficulty: "Difficile",
    rating: 4.8,
    calories: 380,
    tags: ["cameroun", "ndolé", "crevettes", "arachides"],
    color: "#065F46",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    ingredients: [
      { name: "Feuilles de ndolé", amount: 500, unit: "g" },
      { name: "Crevettes fraîches", amount: 400, unit: "g" },
      { name: "Pâte d'arachide", amount: 200, unit: "g" },
      { name: "Viande de boeuf", amount: 300, unit: "g" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Ail", amount: 6, unit: "gousses" },
      { name: "Crevettes séchées", amount: 50, unit: "g" },
      { name: "Huile de palme", amount: 4, unit: "c.s" },
      { name: "Cube Maggi", amount: 2, unit: "pièces" }
    ],
    steps: [
      "Bouillir les feuilles de ndolé 3 fois en changeant l'eau pour enlever l'amertume.",
      "Faire revenir oignons et ail dans l'huile de palme.",
      "Ajouter la viande en dés. Faire bien dorer.",
      "Incorporer la pâte d'arachide diluée dans de l'eau chaude.",
      "Ajouter les feuilles de ndolé essorées et les crevettes.",
      "Mijoter 30 min à feu doux. Servir avec du miondo."
    ]
  },
  {
    id: 28,
    title: "Jollof Rice Nigerian",
    category: "Africain",
    time: "55 min",
    baseServings: 6,
    difficulty: "Moyen",
    rating: 4.7,
    calories: 340,
    tags: ["nigeria", "riz", "tomate", "festif"],
    color: "#DC2626",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
    ingredients: [
      { name: "Riz long grain", amount: 400, unit: "g" },
      { name: "Tomates fraîches mixées", amount: 400, unit: "ml" },
      { name: "Poivrons rouges", amount: 2, unit: "pièces" },
      { name: "Piment habanero", amount: 1, unit: "pièce" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Huile végétale", amount: 4, unit: "c.s" },
      { name: "Cube Maggi", amount: 2, unit: "pièces" },
      { name: "Laurier", amount: 2, unit: "feuilles" }
    ],
    steps: [
      "Mixer tomates, poivrons et piment pour la sauce de base.",
      "Faire revenir les oignons dans l'huile jusqu'à légère dorure.",
      "Ajouter la sauce tomate-poivron. Cuire 20 min à feu moyen.",
      "Ajouter le riz rincé et bien mélanger dans la sauce.",
      "Couvrir de bouillon (2 cm au-dessus), ajouter Maggi et laurier.",
      "Cuire à feu doux 25-30 min à couvert jusqu'à absorption complète."
    ]
  },
  {
    id: 29,
    title: "Mafé au Boeuf",
    category: "Africain",
    time: "75 min",
    baseServings: 6,
    difficulty: "Moyen",
    rating: 4.7,
    calories: 450,
    tags: ["sénégal", "arachide", "boeuf", "sauce"],
    color: "#92400E",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80",
    ingredients: [
      { name: "Boeuf à braiser", amount: 800, unit: "g" },
      { name: "Pâte d'arachide", amount: 200, unit: "g" },
      { name: "Tomates fraîches", amount: 400, unit: "g" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Ail", amount: 4, unit: "gousses" },
      { name: "Carottes", amount: 2, unit: "pièces" },
      { name: "Patate douce", amount: 2, unit: "pièces" },
      { name: "Cube Maggi", amount: 2, unit: "pièces" },
      { name: "Piment", amount: 1, unit: "pièce" }
    ],
    steps: [
      "Couper le boeuf en gros morceaux. Faire dorer dans l'huile chaude.",
      "Ajouter oignons et ail émincés. Faire revenir 5 min.",
      "Incorporer les tomates mixées. Laisser réduire 10 min.",
      "Diluer la pâte d'arachide dans 500ml d'eau chaude. Verser dans la casserole.",
      "Ajouter carottes et patates douces. Assaisonner avec Maggi et piment.",
      "Mijoter 45 min à feu doux jusqu'à ce que la viande soit fondante."
    ]
  },
  {
    id: 30,
    title: "Thiéboudienne",
    category: "Africain",
    time: "120 min",
    baseServings: 8,
    difficulty: "Difficile",
    rating: 4.8,
    calories: 490,
    tags: ["sénégal", "poisson", "riz", "légumes"],
    color: "#0EA5E9",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
    ingredients: [
      { name: "Poisson entier (mulet)", amount: 1.5, unit: "kg" },
      { name: "Riz brisé", amount: 600, unit: "g" },
      { name: "Tomates fraîches", amount: 400, unit: "g" },
      { name: "Concentré de tomate", amount: 3, unit: "c.s" },
      { name: "Manioc", amount: 300, unit: "g" },
      { name: "Carottes", amount: 3, unit: "pièces" },
      { name: "Aubergine", amount: 1, unit: "pièce" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Huile d'arachide", amount: 5, unit: "c.s" }
    ],
    steps: [
      "Préparer la farce avec ail, piment et persil. Farcir le poisson.",
      "Faire dorer le poisson dans l'huile chaude. Réserver.",
      "Faire revenir oignons et concentré de tomate 15 min.",
      "Ajouter les légumes et l'eau. Cuire 30 min. Remettre le poisson.",
      "Retirer poisson et légumes. Cuire le riz dans le bouillon parfumé.",
      "Dresser le riz dans un grand plat, garnir de légumes et du poisson."
    ]
  },

  // ══════════════════════════════
  // EUROPÉEN
  // ══════════════════════════════
  {
    id: 31,
    title: "Boeuf Bourguignon",
    category: "Européen",
    time: "180 min",
    baseServings: 6,
    difficulty: "Difficile",
    rating: 4.9,
    calories: 580,
    tags: ["français", "boeuf", "vin rouge", "mijoté"],
    color: "#7C2D12",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80",
    ingredients: [
      { name: "Boeuf à braiser", amount: 1.2, unit: "kg" },
      { name: "Vin rouge Bourgogne", amount: 750, unit: "ml" },
      { name: "Lardons", amount: 200, unit: "g" },
      { name: "Champignons", amount: 300, unit: "g" },
      { name: "Carottes", amount: 3, unit: "pièces" },
      { name: "Oignons perlés", amount: 200, unit: "g" },
      { name: "Ail", amount: 4, unit: "gousses" },
      { name: "Bouquet garni", amount: 1, unit: "pièce" },
      { name: "Farine", amount: 2, unit: "c.s" }
    ],
    steps: [
      "Couper le boeuf en gros cubes. Fariner légèrement.",
      "Faire dorer les lardons puis les cubes de viande en plusieurs fois.",
      "Ajouter oignons, carottes, ail et mouiller avec le vin rouge.",
      "Ajouter le bouquet garni. Couvrir et cuire 2h30 à feu très doux.",
      "Ajouter les champignons 30 min avant la fin.",
      "Rectifier l'assaisonnement. Servir avec des pommes de terre vapeur."
    ]
  },
  {
    id: 32,
    title: "Paella Valenciana",
    category: "Européen",
    time: "60 min",
    baseServings: 6,
    difficulty: "Difficile",
    rating: 4.8,
    calories: 460,
    tags: ["espagnol", "riz", "fruits de mer", "safran"],
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&q=80",
    ingredients: [
      { name: "Riz paella", amount: 400, unit: "g" },
      { name: "Crevettes", amount: 300, unit: "g" },
      { name: "Moules", amount: 500, unit: "g" },
      { name: "Poulet", amount: 400, unit: "g" },
      { name: "Poivron rouge", amount: 2, unit: "pièces" },
      { name: "Tomates", amount: 3, unit: "pièces" },
      { name: "Safran", amount: 1, unit: "pincée" },
      { name: "Bouillon de poisson", amount: 1, unit: "litre" },
      { name: "Huile d'olive", amount: 4, unit: "c.s" }
    ],
    steps: [
      "Faire revenir le poulet dans l'huile d'olive. Réserver.",
      "Faire sauter poivrons et tomates dans la même huile.",
      "Ajouter le riz. Mélanger et nacrer 2 min.",
      "Verser le bouillon chaud infusé au safran.",
      "Disposer crevettes, moules et poulet sur le riz sans remuer.",
      "Cuire 20 min sans couvercle. Laisser reposer 5 min avant de servir."
    ]
  },
  {
    id: 33,
    title: "Schnitzel Viennois",
    category: "Européen",
    time: "30 min",
    baseServings: 4,
    difficulty: "Facile",
    rating: 4.6,
    calories: 490,
    tags: ["autrichien", "veau", "pané", "croustillant"],
    color: "#D97706",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
    ingredients: [
      { name: "Escalopes de veau", amount: 4, unit: "pièces" },
      { name: "Farine", amount: 80, unit: "g" },
      { name: "Oeufs battus", amount: 2, unit: "pièces" },
      { name: "Chapelure fine", amount: 150, unit: "g" },
      { name: "Beurre clarifié", amount: 100, unit: "g" },
      { name: "Citron", amount: 2, unit: "pièces" },
      { name: "Sel et poivre", amount: 1, unit: "portion" }
    ],
    steps: [
      "Aplatir les escalopes à 4 mm avec un rouleau à pâtisserie.",
      "Saler et poivrer. Passer dans farine, oeuf battu puis chapelure.",
      "Ne pas appuyer sur la chapelure pour qu'elle reste aérée.",
      "Faire chauffer le beurre clarifié dans une grande poêle.",
      "Cuire 3 min de chaque côté en arrosant de beurre.",
      "Servir immédiatement avec quartiers de citron et salade."
    ]
  },
  {
    id: 34,
    title: "Risotto aux Champignons",
    category: "Européen",
    time: "40 min",
    baseServings: 4,
    difficulty: "Moyen",
    rating: 4.7,
    calories: 420,
    tags: ["italien", "riz", "champignons", "crémeux"],
    color: "#6B7280",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    ingredients: [
      { name: "Riz arborio", amount: 320, unit: "g" },
      { name: "Champignons variés", amount: 400, unit: "g" },
      { name: "Bouillon de légumes chaud", amount: 1.2, unit: "litre" },
      { name: "Vin blanc sec", amount: 100, unit: "ml" },
      { name: "Oignon", amount: 1, unit: "pièce" },
      { name: "Parmesan râpé", amount: 80, unit: "g" },
      { name: "Beurre", amount: 40, unit: "g" },
      { name: "Huile d'olive", amount: 2, unit: "c.s" }
    ],
    steps: [
      "Faire sauter les champignons dans le beurre. Saler. Réserver.",
      "Faire revenir l'oignon émincé dans l'huile d'olive.",
      "Ajouter le riz arborio et nacrer 2 min en remuant.",
      "Déglacer avec le vin blanc. Laisser absorber.",
      "Ajouter le bouillon chaud louche par louche en remuant constamment.",
      "Après 18 min, ajouter champignons et parmesan. Mantecare avec le beurre."
    ]
  },
  {
    id: 35,
    title: "Moussaka Grecque",
    category: "Européen",
    time: "90 min",
    baseServings: 6,
    difficulty: "Difficile",
    rating: 4.7,
    calories: 480,
    tags: ["grec", "aubergine", "agneau", "gratiné"],
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
    ingredients: [
      { name: "Aubergines", amount: 3, unit: "pièces" },
      { name: "Viande d'agneau hachée", amount: 500, unit: "g" },
      { name: "Tomates concassées", amount: 400, unit: "g" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "Cannelle", amount: 1, unit: "c.c" },
      { name: "Lait entier", amount: 500, unit: "ml" },
      { name: "Farine", amount: 50, unit: "g" },
      { name: "Beurre", amount: 50, unit: "g" },
      { name: "Oeuf", amount: 1, unit: "pièce" },
      { name: "Parmesan râpé", amount: 60, unit: "g" }
    ],
    steps: [
      "Couper les aubergines en tranches. Saler, dégorger 20 min, rincer et griller.",
      "Faire revenir oignons + agneau haché. Ajouter tomates et cannelle. Mijoter 20 min.",
      "Préparer la béchamel : fondre beurre, ajouter farine puis lait chaud en fouettant.",
      "Hors feu, incorporer l'oeuf et la moitié du parmesan.",
      "Monter : aubergines, viande, aubergines, béchamel, parmesan.",
      "Enfourner 45 min à 180°C. Laisser reposer 15 min avant de couper."
    ]
  }

];

// ──────────────────────────────────────────
// Catégories disponibles pour les filtres
// ──────────────────────────────────────────
const categories = [
  "Tout",
  "Plats Chauds",
  "Plats Froids",
  "Desserts",
  "Vegan",
  "Grillades",
  "Africain",
  "Européen"
];