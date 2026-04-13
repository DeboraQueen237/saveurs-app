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
    image: "https://plus.unsplash.com/premium_photo-1723579413852-d71dbd8641d2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG91bGV0JTIwUiVDMyVCNHRpJTIwTSVDMyVBOWRpdGVycmFuJUMzJUE5ZW58ZW58MHx8MHx8fDA%3D",
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
    image: "https://plus.unsplash.com/premium_photo-1695456064603-aa7568121827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VycnklMjBkZSUyMFBvaXMlMjBDaGljaGVzfGVufDB8fDB8fHww",
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
    image: "https://images.unsplash.com/photo-1587322740944-9bc2776404e8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGlyYW1pc3UlMjBDbGFzc2lxdWV8ZW58MHx8MHx8fDA%3D",
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
    image: "https://images.unsplash.com/photo-1673551494277-92204546b504?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91c3NlJTIwYXUlMjBDaG9jb2xhdHxlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1676300184943-09b2a08319a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3IlQzMlQThtZSUyMEJyJUMzJUJCbCVDMyVBOWV8ZW58MHx8MHx8fDA%3D",
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
    image: "https://plus.unsplash.com/premium_photo-1664478272084-532c1bfebd25?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QyVDMyVCNHRlcyUyMGRlJTIwUG9yYyUyMENhcmFtJUMzJUE5bGlzJUMzJUE5ZXN8ZW58MHx8MHx8fDA%3D",
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
    image: "https://images.unsplash.com/photo-1710508774177-7ac2f3492675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdWxldCUyMERHfGVufDB8fDB8fHww.",
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
    image: "https://media.istockphoto.com/id/2033440993/fr/photo/gros-plan-dun-plat-avec-des-crevettes-fra%C3%AEches.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z3JfiBiySZC8DpC37Kt7NSpiIbbjbN5eKNeaNEEdK8k=",
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
    image: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9sbG9mJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1773620494047-50cb58f59bc5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFmJUMzJUE5JTIwYXUlMjBCb2V1ZnxlbnwwfHwwfHx8MA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhpJUMzJUE5Ym91ZGllbm5lfGVufDB8fDB8fHww.",
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
    image: "https://media.istockphoto.com/id/872576020/fr/photo/escalope-de-veau-pan%C3%A9e.webp?a=1&b=1&s=612x612&w=0&k=20&c=p_jALkNhx5Cr47mwPIb2VggQrWhfSWREV237P_XrUkY=",
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
    image: "https://media.istockphoto.com/id/483402408/fr/photo/une-moussaka-grecque-traditionnelle-plat.webp?a=1&b=1&s=612x612&w=0&k=20&c=pac_NgEqQLFt-Z9e8d0GGoxNJvTLPaVv6UBjAlaxb2M=",
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
      { name: "Parmesan râpé", amount: 60, unit: "g" },
      
    ],
    steps: [
      "Couper les aubergines en tranches. Saler, dégorger 20 min, rincer et griller.",
      "Faire revenir oignons + agneau haché. Ajouter tomates et cannelle. Mijoter 20 min.",
      "Préparer la béchamel : fondre beurre, ajouter farine puis lait chaud en fouettant.",
      "Hors feu, incorporer l'oeuf et la moitié du parmesan.",
      "Monter : aubergines, viande, aubergines, béchamel, parmesan.",
      "Enfourner 45 min à 180°C. Laisser reposer 15 min avant de couper."
    ]
  },
   {
    id: 36,
    title: "Tagine",
    category: "Africain",
    time: "50 min",
    baseServings: 6,
    difficulty: "Difficile",
    rating: 4.7,
    calories: 480,
    tags: ["africain", "viande", "tomates", "oignons"],
    emoji: "🫙",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
    ingredients: [
      { name: "Viande au poulet ", amount: 3, unit: "pièces" },
      { name: "Pommes de terre", amount: 500, unit: "g" },
      { name: "Huile d'olive", amount: 50, unit: "ml" },
      { name: "Oignons", amount: 2, unit: "pièces" },
      { name: "ail", amount: 1, unit: "50" },
      { name: "Tumerique", amount: 15, unit: "g" },
      { name: "Parprika", amount: 50, unit: "g" },
      { name: "sel et poivre", amount: 50, unit: "g" },
      { name: "carrote", amount: 1, unit: "pièce" },
      { name: "Eau", amount: 1000, unit: "ml" }
    ],
    steps: [
      "Mariner le poulet avec ail, sel, Maggi et épices. Faire dorer à l'huile.",
      "Mettre les oignons dans la même huile.",
      "Ajouter l'eau et les légumes coupés. Cuire 30 min.",
      "Ajouter les pommes de terre coupées en morceaux. Cuire 20 min.",
      "Finir en ajoutantle persil pour servir",
    ]
  },
  {
  id: 37,
  title: "Pad Thaï",
  category: "Asiatique",
  time: "30 min",
  baseServings: 4,
  difficulty: "Moyen",
  rating: 4.7,
  calories: 520,
  tags: ["Asiatique", "nouilles", "sauté", "sucré-salé"],
  color: "#F59E0B",
  image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  ingredients: [
    { name: "Nouilles de riz", amount: 250, unit: "g" },
    { name: "Crevettes", amount: 200, unit: "g" },
    { name: "Oeufs", amount: 2, unit: "pièces" },
    { name: "Sauce poisson", amount: 3, unit: "càs" },
    { name: "Sucre", amount: 1, unit: "càs" },
    { name: "Pousses de soja", amount: 100, unit: "g" },
    { name: "Cacahuètes", amount: 50, unit: "g" }
  ],
  steps: [
    "Faire tremper les nouilles dans l’eau chaude.",
    "Faire sauter les crevettes dans une poêle.",
    "Ajouter les oeufs et brouiller.",
    "Ajouter les nouilles et la sauce.",
    "Incorporer soja et cacahuètes.",
    "Servir chaud."
  ]
},
{
  id: 38,
  title: "Riz Cantonais",
  category: "Asiatique",
  time: "25 min",
  baseServings: 4,
  difficulty: "Facile",
  rating: 4.5,
  calories: 450,
  tags: ["chinois", "riz", "rapide", "sauté"],
  color: "#10B981",
  image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  ingredients: [
    { name: "Riz cuit", amount: 400, unit: "g" },
    { name: "Oeufs", amount: 3, unit: "pièces" },
    { name: "Jambon", amount: 150, unit: "g" },
    { name: "Petits pois", amount: 100, unit: "g" },
    { name: "Sauce soja", amount: 2, unit: "càs" }
  ],
  steps: [
    "Cuire les oeufs brouillés.",
    "Ajouter le jambon et les pois.",
    "Ajouter le riz froid.",
    "Verser la sauce soja.",
    "Faire sauter 5 minutes.",
    "Servir chaud."
  ]
},
{
  id: 39,
  title: "Poulet Tikka Masala",
  category: "Asiatique",
  time: "50 min",
  baseServings: 4,
  difficulty: "Moyen",
  rating: 4.8,
  calories: 600,
  tags: ["indien", "poulet", "épicé", "crémeux"],
  color: "#EF4444",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
  ingredients: [
    { name: "Poulet", amount: 500, unit: "g" },
    { name: "Yaourt", amount: 150, unit: "g" },
    { name: "Tomates", amount: 300, unit: "g" },
    { name: "Crème", amount: 100, unit: "ml" },
    { name: "Épices tikka", amount: 2, unit: "càs" }
  ],
  steps: [
    "Mariner le poulet avec yaourt et épices.",
    "Cuire le poulet.",
    "Préparer sauce tomate.",
    "Ajouter crème.",
    "Mélanger avec poulet.",
    "Servir chaud."
  ]
},
{
  id: 40,
  title: "Sushi Maki",
  category: "Asiatique",
  time: "45 min",
  baseServings: 4,
  difficulty: "Difficile",
  rating: 4.6,
  calories: 300,
  tags: ["japonais", "riz", "poisson", "frais"],
  color: "#3B82F6",
  image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
  ingredients: [
    { name: "Riz sushi", amount: 300, unit: "g" },
    { name: "Saumon", amount: 200, unit: "g" },
    { name: "Feuilles nori", amount: 6, unit: "pièces" },
    { name: "Vinaigre de riz", amount: 3, unit: "càs" }
  ],
  steps: [
    "Cuire et assaisonner le riz.",
    "Étaler sur feuille nori.",
    "Ajouter saumon.",
    "Rouler avec natte.",
    "Couper en morceaux.",
    "Servir."
  ]
},
{
  id: 41,
  title: "Nouilles sautées au poulet",
  category: "Asiatique",
  time: "30 min",
  baseServings: 4,
  difficulty: "Facile",
  rating: 4.4,
  calories: 480,
  tags: ["chinois", "nouilles", "poulet", "rapide"],
  color: "#8B5CF6",
  image: "https://images.unsplash.com/photo-1617622141675-d3005b9067c5",
  ingredients: [
    { name: "Nouilles", amount: 300, unit: "g" },
    { name: "Poulet", amount: 300, unit: "g" },
    { name: "Légumes", amount: 200, unit: "g" },
    { name: "Sauce soja", amount: 3, unit: "càs" }
  ],
  steps: [
    "Cuire les nouilles.",
    "Faire sauter le poulet.",
    "Ajouter légumes.",
    "Ajouter nouilles.",
    "Verser sauce soja.",
    "Mélanger et servir."
  ]
},
{
  id: 42,
  title: "Tacos Mexicains",
  category: "Amerique Latine",
  time: "30 min",
  baseServings: 4,
  difficulty: "Facile",
  rating: 4.8,
  calories: 520,
  tags: ["mexique", "street-food", "boeuf", "rapide"],
  emoji: "🌮",
  color: "#F59E0B",
  image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80",
  ingredients: [
    { name: "Tortillas", amount: 8, unit: "pièces" },
    { name: "Boeuf haché", amount: 400, unit: "g" },
    { name: "Oignon", amount: 1, unit: "pièce" },
    { name: "Tomates", amount: 2, unit: "pièces" },
    { name: "Épices tacos", amount: 1, unit: "c.s" },
    { name: "Fromage râpé", amount: 100, unit: "g" }
  ],
  steps: [
    "Faire revenir l’oignon puis ajouter le boeuf.",
    "Ajouter les épices et cuire 10 min.",
    "Chauffer les tortillas.",
    "Garnir avec viande, tomates et fromage.",
    "Plier et servir."
  ]
},
{
  id: 43,
  title: "Empanadas",
  category: "Amerique Latine",
  time: "45 min",
  baseServings: 4,
  difficulty: "Moyen",
  rating: 4.6,
  calories: 480,
  tags: ["argentine", "chausson", "four", "viande"],
  emoji: "🥟",
  color: "#DC2626",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  ingredients: [
    { name: "Pâte", amount: 500, unit: "g" },
    { name: "Boeuf haché", amount: 300, unit: "g" },
    { name: "Oignon", amount: 1, unit: "pièce" },
    { name: "Oeufs durs", amount: 2, unit: "pièces" },
    { name: "Épices", amount: 1, unit: "portion" }
  ],
  steps: [
    "Préparer la farce avec viande et oignon.",
    "Ajouter oeufs et épices.",
    "Garnir la pâte et plier.",
    "Sceller les bords.",
    "Cuire au four 25 min."
  ]
},

{
  id: 44,
  title: "Feijoada",
  category: "Amerique Latine",
  time: "2 h",
  baseServings: 6,
  difficulty: "Moyen",
  rating: 4.7,
  calories: 650,
  tags: ["brésil", "haricots", "viande", "traditionnel"],
  emoji: "🍲",
  color: "#111827",
  image: "data:image/jpeg;base64,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",
  ingredients: [
    { name: "Haricots noirs", amount: 400, unit: "g" },
    { name: "Viande (porc/boeuf)", amount: 500, unit: "g" },
    { name: "Oignon", amount: 1, unit: "pièce" },
    { name: "Ail", amount: 2, unit: "gousses" }
  ],
  steps: [
    "Faire tremper les haricots.",
    "Cuire la viande avec l’ail et oignon.",
    "Ajouter les haricots.",
    "Laisser mijoter 1h30.",
    "Servir chaud."
  ]
},
{
  id: 45,
  title: "Arepas",
  category: "Amerique Latine",
  time: "25 min",
  baseServings: 4,
  difficulty: "Facile",
  rating: 4.5,
  calories: 300,
  tags: ["venezuela", "maïs", "grillé", "pain"],
  emoji: "🫓",
  color: "#FACC15",
  image: "data:image/jpeg;base64,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",
  ingredients: [
    { name: "Farine de maïs", amount: 250, unit: "g" },
    { name: "Eau", amount: 300, unit: "ml" },
    { name: "Sel", amount: 1, unit: "c.c" }
  ],
  steps: [
    "Mélanger farine, eau et sel.",
    "Former des galettes.",
    "Cuire à la poêle 10 min.",
    "Couper et garnir.",
    "Servir."
  ]
},
{
  id: 46,
  title: "Ceviche",
  category: "Amerique Latine",
  time: "20 min",
  baseServings: 4,
  difficulty: "Facile",
  rating: 4.8,
  calories: 220,
  tags: ["pérou", "poisson", "frais", "citron"],
  emoji: "🐟",
  color: "#06B6D4",
  image: "data:image/jpeg;base64,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",
  ingredients: [
    { name: "Poisson frais", amount: 400, unit: "g" },
    { name: "Citron vert", amount: 4, unit: "pièces" },
    { name: "Oignon rouge", amount: 1, unit: "pièce" },
    { name: "Piment", amount: 1, unit: "pièce" }
  ],
  steps: [
    "Couper le poisson en dés.",
    "Ajouter jus de citron.",
    "Ajouter oignon et piment.",
    "Laisser mariner 10 min.",
    "Servir frais."
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
  "Européen",
  "Asiatique",
  "Amerique Latine"
];