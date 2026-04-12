/* =============================================
   SAVEURS APP — Thèmes de Couleurs
   Fichier : assets/js/themes.js
   Codé par : Personne 1
   ============================================= */

const THEME_KEY = "saveurs-color-theme";

/* ─────────────────────────────────────────────
   1. DÉFINITION DES THÈMES
───────────────────────────────────────────── */
const colorThemes = {
  orange: {
    name: "Orange",
    emoji: "🍊",
    "--orange":       "#F97316",
    "--orange-light": "#FFF7ED",
    "--orange-dark":  "#EA6C0A",
    "--red":          "#EF4444",
  },
  green: {
    name: "Vert",
    emoji: "🌿",
    "--orange":       "#10B981",
    "--orange-light": "#ECFDF5",
    "--orange-dark":  "#059669",
    "--red":          "#06B6D4",
  },
  purple: {
    name: "Violet",
    emoji: "🍇",
    "--orange":       "#8B5CF6",
    "--orange-light": "#F5F3FF",
    "--orange-dark":  "#7C3AED",
    "--red":          "#EC4899",
  },
  blue: {
    name: "Bleu",
    emoji: "🧊",
    "--orange":       "#3B82F6",
    "--orange-light": "#EFF6FF",
    "--orange-dark":  "#2563EB",
    "--red":          "#6366F1",
  },
  red: {
    name: "Rouge",
    emoji: "🌶️",
    "--orange":       "#EF4444",
    "--orange-light": "#FEF2F2",
    "--orange-dark":  "#DC2626",
    "--red":          "#F97316",
  },
  pink: {
    name: "Rose",
    emoji: "🌸",
    "--orange":       "#EC4899",
    "--orange-light": "#FDF2F8",
    "--orange-dark":  "#DB2777",
    "--red":          "#F43F5E",
  },
};


/* ─────────────────────────────────────────────
   2. APPLIQUER UN THÈME
───────────────────────────────────────────── */
function applyColorTheme(themeKey, save = true) {
  const theme = colorThemes[themeKey];
  if (!theme) return;

  const root = document.documentElement;

  // Appliquer les variables CSS
  Object.entries(theme).forEach(([key, value]) => {
    if (key.startsWith("--")) {
      root.style.setProperty(key, value);
    }
  });

  // Marquer le thème actif dans le sélecteur
  document.querySelectorAll(".theme-option").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === themeKey);
  });

  if (save) {
    localStorage.setItem(THEME_KEY, themeKey);
  }
}


/* ─────────────────────────────────────────────
   3. CONSTRUIRE LE HTML DU SÉLECTEUR
───────────────────────────────────────────── */
function buildThemeSelectorHTML() {
  return `
    <div class="theme-selector" id="themeSelector">
      <div class="theme-selector-title">🎨 Thème</div>
      <div class="theme-options">
        ${Object.entries(colorThemes).map(([key, theme]) => `
          <button
            class="theme-option ${getCurrentTheme() === key ? "active" : ""}"
            data-theme="${key}"
            onclick="applyColorTheme('${key}')"
            title="${theme.name}"
            style="background: ${theme["--orange"]};"
          >
            <span class="theme-emoji">${theme.emoji}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}


/* ─────────────────────────────────────────────
   4. OBTENIR LE THÈME ACTUEL
───────────────────────────────────────────── */
function getCurrentTheme() {
  return localStorage.getItem(THEME_KEY) || "orange";
}


/* ─────────────────────────────────────────────
   5. OUVRIR / FERMER LE SÉLECTEUR
───────────────────────────────────────────── */
function toggleThemeSelector() {
  const selector = document.getElementById("themeSelector");
  if (selector) {
    selector.classList.toggle("visible");
  }
}

// Fermer en cliquant ailleurs
document.addEventListener("click", function (e) {
  const selector = document.getElementById("themeSelector");
  const btn      = document.getElementById("btnColorTheme");
  if (selector && !selector.contains(e.target) && e.target !== btn) {
    selector.classList.remove("visible");
  }
});


/* ─────────────────────────────────────────────
   6. INITIALISATION
───────────────────────────────────────────── */
function initThemes() {
  // Appliquer le thème sauvegardé
  applyColorTheme(getCurrentTheme(), false);

  // Injecter le sélecteur dans la navbar
  const navbarActions = document.querySelector(".navbar-actions");
  if (navbarActions) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.innerHTML = `
      <button class="btn-theme-color" id="btnColorTheme"
        onclick="toggleThemeSelector()">
        🎨
      </button>
      ${buildThemeSelectorHTML()}
    `;
    navbarActions.insertBefore(wrapper, navbarActions.firstChild);
  }
}


/* ─────────────────────────────────────────────
   7. LANCEMENT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  initThemes();
});