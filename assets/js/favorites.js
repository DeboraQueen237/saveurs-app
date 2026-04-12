
/* =============================================
   SAVEURS APP — Système de Favoris
   Fichier : assets/js/favorites.js
   Codé par : Personne 3
   ============================================= */

const FAVORITES_KEY = "saveurs-favorites";


/* ─────────────────────────────────────────────
   1. LIRE LES FAVORIS
───────────────────────────────────────────── */
function getFavorites() {
  const saved = localStorage.getItem(FAVORITES_KEY);
  return saved ? JSON.parse(saved) : [];
}


/* ─────────────────────────────────────────────
   2. SAUVEGARDER LES FAVORIS
───────────────────────────────────────────── */
function saveFavorites(favs) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}


/* ─────────────────────────────────────────────
   3. VÉRIFIER SI UNE RECETTE EST EN FAVORI
───────────────────────────────────────────── */
function isFavorite(recipeId) {
  return getFavorites().includes(recipeId);
}


/* ─────────────────────────────────────────────
   4. AJOUTER / RETIRER UN FAVORI
───────────────────────────────────────────── */
function toggleFavorite(recipeId) {
  const favs = getFavorites();

  if (favs.includes(recipeId)) {
    const updated = favs.filter(id => id !== recipeId);
    saveFavorites(updated);
  } else {
    favs.push(recipeId);
    saveFavorites(favs);
  }

  updateFavCount();
}


/* ─────────────────────────────────────────────
   5. METTRE À JOUR LE COMPTEUR NAVBAR
───────────────────────────────────────────── */
function updateFavCount() {
  const countEl = document.getElementById("favCount");
  if (countEl) {
    countEl.textContent = getFavorites().length;
  }
}


/* ─────────────────────────────────────────────
   6. LANCEMENT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  updateFavCount();
});
