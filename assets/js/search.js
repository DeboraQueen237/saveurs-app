 /* =============================================
   SAVEURS APP — Recherche, Filtres & Cards
   Fichier : assets/js/search.js
   Codé par : Personne 2
   ============================================= */

let currentCategory = "Tout";
let currentSearch   = "";
let showFavorisOnly = false;

/* ─────────────────────────────────────────────
   INITIALISATION
───────────────────────────────────────────── */
function initSearch() {
  renderStats();
  renderFilters();
  renderCards();
  setupSearchListeners();
  setupFavorisBtn();
}

/* ─────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────── */
function renderStats() {
  const statsGrid = document.getElementById("statsGrid");
  if (!statsGrid) return;

  const stats = [
    { icon: "🍽️", value: recipes.length,                                          label: "Recettes"  },
    { icon: "❤️", value: getFavorites().length,                                   label: "Favoris"   },
    { icon: "⚡", value: recipes.filter(r => r.difficulty === "Facile").length,   label: "Faciles"   },
    { icon: "🌱", value: recipes.filter(r => r.category  === "Vegan").length,     label: "Vegan"     }
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
   FILTRES CATÉGORIES — sans emojis
───────────────────────────────────────────── */
function renderFilters() {
  const filtersList = document.getElementById("filtersList");
  if (!filtersList) return;

  filtersList.innerHTML = categories.map(cat => `
    <button
      class="filter-btn ${cat === currentCategory ? "active" : ""}"
      onclick="setCategory('${cat}')"
    >
      ${cat}
    </button>
  `).join("");
}

function setCategory(cat) {
  currentCategory = cat;
  renderFilters();
  renderCards();
}

/* ─────────────────────────────────────────────
   RECHERCHE
───────────────────────────────────────────── */
function setupSearchListeners() {
  const searchInput = document.getElementById("searchInput");
  const btnClear    = document.getElementById("btnClear");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    currentSearch = this.value.trim().toLowerCase();
    if (currentSearch.length > 0) {
      btnClear.classList.add("visible");
    } else {
      btnClear.classList.remove("visible");
    }
    updateSectionTitle();
    renderCards();
  });

  if (btnClear) {
    btnClear.addEventListener("click", function () {
      searchInput.value = "";
      currentSearch     = "";
      this.classList.remove("visible");
      updateSectionTitle();
      renderCards();
      searchInput.focus();
    });
  }
}

/* ─────────────────────────────────────────────
   BOUTON FAVORIS
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
   FILTRAGE
───────────────────────────────────────────── */
function getFilteredRecipes() {
  return recipes.filter(recipe => {
    const matchCategory = currentCategory === "Tout" || recipe.category === currentCategory;
    const matchSearch   = currentSearch === "" ||
      recipe.title.toLowerCase().includes(currentSearch) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(currentSearch)) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(currentSearch));
    const matchFavoris  = !showFavorisOnly || getFavorites().includes(recipe.id);
    return matchCategory && matchSearch && matchFavoris;
  });
}

/* ─────────────────────────────────────────────
   RENDU DES CARDS
───────────────────────────────────────────── */
function renderCards() {
  const grid       = document.getElementById("recipesGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl    = document.getElementById("recipeCount");
  if (!grid) return;

  const filtered = getFilteredRecipes();
  const favs     = getFavorites();

  if (countEl) {
    countEl.textContent = filtered.length + " recette" + (filtered.length > 1 ? "s" : "");
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.add("visible");
    return;
  }

  emptyState.classList.remove("visible");
  grid.innerHTML = filtered.map((recipe, index) =>
    createCardHTML(recipe, favs.includes(recipe.id), index)
  ).join("");

  renderStats();
}

/* ─────────────────────────────────────────────
   HTML D'UNE CARD — sans emojis, avec vraie image
───────────────────────────────────────────── */
function createCardHTML(recipe, isFavorite, index) {
  const stars      = getStarsHTML(recipe.rating);
  const diffBadge  = getDifficultyBadge(recipe.difficulty);

  return `
    <div class="recipe-card" style="animation-delay: ${index * 0.05}s">

      <!-- Image -->
      <div class="card-image">
        <img
          src="${recipe.image}"
          alt="${recipe.title}"
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/images/placeholder.jpg';"
        />
        <div class="card-image-overlay"></div>

        <!-- Badge catégorie -->
        <span class="card-category-badge"
          style="background:${recipe.color}CC; color:#FFF;">
          ${recipe.category}
        </span>

        <!-- Bouton favori -->
        <button
          class="card-fav-btn ${isFavorite ? "active" : ""}"
          onclick="toggleFavoriteCard(event, ${recipe.id})"
          title="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}"
        >${isFavorite ? "❤️" : "🤍"}</button>
      </div>

      <!-- Corps -->
      <div class="card-body" onclick="openRecipeDetail(${recipe.id})">
        <h3 class="card-title">${recipe.title}</h3>

        <div class="card-rating">
          <span class="card-stars">${stars}</span>
          <span class="card-rating-value">${recipe.rating}</span>
        </div>

        <div class="card-infos">
          <div class="card-info-item"><span>⏱</span><span>${recipe.time}</span></div>
          <div class="card-info-item"><span>👥</span><span>${recipe.baseServings} pers.</span></div>
          <div class="card-info-item"><span>🔥</span><span>${recipe.calories} kcal</span></div>
        </div>

        <div class="card-difficulty">${diffBadge}</div>

        <button class="card-btn" style="background:${recipe.color};"
          onclick="openRecipeDetail(${recipe.id})">
          Voir la recette <span class="card-btn-arrow">→</span>
        </button>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function getStarsHTML(rating) {
  return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
}

function getDifficultyBadge(difficulty) {
  const classes = { "Facile": "badge-facile", "Moyen": "badge-moyen", "Difficile": "badge-difficile" };
  const icons   = { "Facile": "✅", "Moyen": "⚡", "Difficile": "🔴" };
  return `<span class="badge ${classes[difficulty] || "badge-moyen"}">${icons[difficulty] || ""} ${difficulty}</span>`;
}

function updateSectionTitle() {
  const titleEl = document.getElementById("sectionTitle");
  if (!titleEl) return;
  if (showFavorisOnly)           titleEl.textContent = "Mes Favoris";
  else if (currentSearch)        titleEl.textContent = `Résultats pour "${currentSearch}"`;
  else if (currentCategory !== "Tout") titleEl.textContent = currentCategory;
  else                           titleEl.textContent = "Toutes les recettes";
}

function toggleFavoriteCard(event, recipeId) {
  event.stopPropagation();
  toggleFavorite(recipeId);
  renderCards();
  renderStats();
  updateFavCount();
}

/* ─────────────────────────────────────────────
   LANCEMENT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  initSearch();
});
