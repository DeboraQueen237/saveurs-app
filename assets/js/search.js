 /* =============================================
   SAVEURS APP — Recherche, Filtres & Cards
   Fichier : assets/js/search.js
   Codé par : Personne 2
   ============================================= */


/* ─────────────────────────────────────────────
   1. VARIABLES D'ÉTAT
───────────────────────────────────────────── */
let currentCategory = "Tout";   // Catégorie active
let currentSearch   = "";        // Texte de recherche
let showFavorisOnly = false;     // Filtre favoris actif


/* ─────────────────────────────────────────────
   2. INITIALISATION
   Appelée au chargement de la page
───────────────────────────────────────────── */
function initSearch() {
  renderStats();
  renderFilters();
  renderCards();
  setupSearchListeners();
  setupFavorisBtn();
}


/* ─────────────────────────────────────────────
   3. STATS BAR
───────────────────────────────────────────── */
function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  if (!statsGrid) return;

  const stats = [
    {
      icon: "🍽️",
      value: recipes.length,
      label: "Recettes"
    },
    {
      icon: "❤️",
      value: getFavorites().length,
      label: "Favoris"
    },
    {
      icon: "⚡",
      value: recipes.filter(r => r.difficulty === "Facile").length,
      label: "Faciles"
    },
    {
      icon: "🌱",
      value: recipes.filter(r => r.category === "Vegan").length,
      label: "Vegan"
    }
  ];

  statsGrid.innerHTML = stats.map(s => `
    <div class="stat-card">
      <span class="stat-icon">${s.icon}</span>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}


/* ─────────────────────────────────────────────
   4. FILTRES CATÉGORIES
───────────────────────────────────────────── */
function renderFilters() {
  const filtersList = document.getElementById("filtersList");
  if (!filtersList) return;

  filtersList.innerHTML = categories.map(cat => `
    <button
      class="filter-btn ${cat === currentCategory ? "active" : ""}"
      onclick="setCategory('${cat}')"
    >
      ${getCategoryEmoji(cat)} ${cat}
    </button>
  `).join("");
}

/* Emoji pour chaque catégorie */
function getCategoryEmoji(cat) {
  const emojis = {
    "Tout":        "🍴",
    "Plats Chauds":"🔥",
    "Plats Froids":"❄️",
    "Desserts":    "🍰",
    "Vegan":       "🌱",
    "Grillades":   "🔥",
    "Africain":    "🌍",
    "Européen":    "🏰"
  };
  return emojis[cat] || "🍽️";
}

/* Changer la catégorie active */
function setCategory(cat) {
  currentCategory = cat;
  renderFilters();
  renderCards();
}


/* ─────────────────────────────────────────────
   5. RECHERCHE
───────────────────────────────────────────── */
function setupSearchListeners() {
  const searchInput = document.getElementById("searchInput");
  const btnClear    = document.getElementById("btnClear");

  if (!searchInput) return;

  // Écouter la frappe
  searchInput.addEventListener("input", function () {
    currentSearch = this.value.trim().toLowerCase();

    // Afficher/masquer le bouton ✕
    if (currentSearch.length > 0) {
      btnClear.classList.add("visible");
    } else {
      btnClear.classList.remove("visible");
    }

    updateSectionTitle();
    renderCards();
  });

  // Bouton effacer
  if (btnClear) {
    btnClear.addEventListener("click", function () {
      searchInput.value  = "";
      currentSearch      = "";
      this.classList.remove("visible");
      updateSectionTitle();
      renderCards();
      searchInput.focus();
    });
  }
}


/* ─────────────────────────────────────────────
   6. BOUTON FAVORIS (navbar)
───────────────────────────────────────────── */
function setupFavorisBtn() {
  const btn = document.getElementById("btnFavoris");
  if (!btn) return;

  btn.addEventListener("click", function () {
    showFavorisOnly = !showFavorisOnly;
    this.classList.toggle("active", showFavorisOnly);
    updateSectionTitle();
    renderCards();
  });
}


/* ─────────────────────────────────────────────
   7. FILTRAGE DES RECETTES
───────────────────────────────────────────── */
function getFilteredRecipes() {
  return recipes.filter(recipe => {

    // Filtre catégorie
    const matchCategory =
      currentCategory === "Tout" ||
      recipe.category === currentCategory;

    // Filtre recherche (titre + tags + ingrédients)
    const matchSearch =
      currentSearch === "" ||
      recipe.title.toLowerCase().includes(currentSearch) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(currentSearch)) ||
      recipe.ingredients.some(ing =>
        ing.name.toLowerCase().includes(currentSearch)
      );

    // Filtre favoris
    const favs = getFavorites();
    const matchFavoris =
      !showFavorisOnly ||
      favs.includes(recipe.id);

    return matchCategory && matchSearch && matchFavoris;
  });
}


/* ─────────────────────────────────────────────
   8. RENDU DES CARDS
───────────────────────────────────────────── */
function renderCards() {
  const grid       = document.getElementById("recipesGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl    = document.getElementById("recipeCount");

  if (!grid) return;

  const filtered = getFilteredRecipes();
  const favs     = getFavorites();

  // Mettre à jour le compteur
  if (countEl) {
    countEl.textContent =
      filtered.length + " recette" + (filtered.length > 1 ? "s" : "");
  }

  // État vide
  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.add("visible");
    return;
  }

  emptyState.classList.remove("visible");

  // Générer les cards
  grid.innerHTML = filtered.map((recipe, index) =>
    createCardHTML(recipe, favs.includes(recipe.id), index)
  ).join("");

  // Mettre à jour les stats
  renderStats();
}


/* ─────────────────────────────────────────────
   9. CRÉER LE HTML D'UNE CARD
───────────────────────────────────────────── */
function createCardHTML(recipe, isFavorite, index) {
  const stars   = getStarsHTML(recipe.rating);
  const diffBadge = getDifficultyBadge(recipe.difficulty);

  return `
    <div class="recipe-card" style="animation-delay: ${index * 0.05}s">

      <!-- Image -->
      <div class="card-image">
        <img
          src="${recipe.image}"
          alt="${recipe.title}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="card-image-fallback" style="display:none; background: ${recipe.color}22;">
          ${recipe.emoji}
        </div>
        <div class="card-image-overlay"></div>

        <!-- Badge catégorie -->
        <span
          class="card-category-badge"
          style="background: ${recipe.color}CC; color: #FFF;"
        >
          ${recipe.category}
        </span>

        <!-- Bouton favori -->
        <button
          class="card-fav-btn ${isFavorite ? "active" : ""}"
          onclick="toggleFavoriteCard(event, ${recipe.id})"
          title="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}"
        >
          ${isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <!-- Corps de la card -->
      <div class="card-body" onclick="openRecipeDetail(${recipe.id})">

        <h3 class="card-title">${recipe.title}</h3>

        <!-- Étoiles -->
        <div class="card-rating">
          <span class="card-stars">${stars}</span>
          <span class="card-rating-value">${recipe.rating}</span>
        </div>

        <!-- Infos rapides -->
        <div class="card-infos">
          <div class="card-info-item">
            <span>⏱</span>
            <span>${recipe.time}</span>
          </div>
          <div class="card-info-item">
            <span>👥</span>
            <span>${recipe.baseServings} pers.</span>
          </div>
          <div class="card-info-item">
            <span>🔥</span>
            <span>${recipe.calories} kcal</span>
          </div>
        </div>

        <!-- Badge difficulté -->
        <div class="card-difficulty">
          ${diffBadge}
        </div>

        <!-- Bouton -->
        <button
          class="card-btn"
          style="background: ${recipe.color};"
          onclick="openRecipeDetail(${recipe.id})"
        >
          Voir la recette
          <span class="card-btn-arrow">→</span>
        </button>

      </div>
    </div>
  `;
}


/* ─────────────────────────────────────────────
   10. HELPERS
───────────────────────────────────────────── */

/* Générer les étoiles */
function getStarsHTML(rating) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return "★".repeat(full) + "☆".repeat(empty);
}

/* Badge de difficulté */
function getDifficultyBadge(difficulty) {
  const classes = {
    "Facile":    "badge-facile",
    "Moyen":     "badge-moyen",
    "Difficile": "badge-difficile"
  };
  const icons = {
    "Facile":    "✅",
    "Moyen":     "⚡",
    "Difficile": "🔴"
  };
  const cls  = classes[difficulty] || "badge-moyen";
  const icon = icons[difficulty]   || "⚡";
  return `<span class="badge ${cls}">${icon} ${difficulty}</span>`;
}

/* Mettre à jour le titre de la section */
function updateSectionTitle() {
  const titleEl = document.getElementById("sectionTitle");
  if (!titleEl) return;

  if (showFavorisOnly) {
    titleEl.textContent = "❤️ Mes Favoris";
  } else if (currentSearch) {
    titleEl.textContent = `Résultats pour "${currentSearch}"`;
  } else if (currentCategory !== "Tout") {
    titleEl.textContent =
      getCategoryEmoji(currentCategory) + " " + currentCategory;
  } else {
    titleEl.textContent = "Toutes les recettes";
  }
}


/* ─────────────────────────────────────────────
   11. TOGGLE FAVORI DEPUIS UNE CARD
───────────────────────────────────────────── */
function toggleFavoriteCard(event, recipeId) {
  // Empêcher l'ouverture de la page détail
  event.stopPropagation();

  // Basculer le favori
  toggleFavorite(recipeId);

  // Mettre à jour l'affichage
  renderCards();
  renderStats();
  updateFavCount();
}


/* ─────────────────────────────────────────────
   12. LANCEMENT AU CHARGEMENT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  initSearch();
});
