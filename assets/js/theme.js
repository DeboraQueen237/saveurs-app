 
/* =============================================
   SAVEURS APP — Mode Sombre / Clair
   Fichier : assets/js/theme.js
   Codé par : Personne 3
   ============================================= */


/* ─────────────────────────────────────────────
   1. INITIALISATION DU THÈME
───────────────────────────────────────────── */
function initTheme() {
  const savedTheme = localStorage.getItem("saveurs-theme");

  if (savedTheme === "dark") {
    enableDarkMode(false);
  } else {
    enableLightMode(false);
  }

  const btnTheme = document.getElementById("btnTheme");
  if (btnTheme) {
    btnTheme.addEventListener("click", toggleTheme);
  }
}


/* ─────────────────────────────────────────────
   2. BASCULER LE THÈME
───────────────────────────────────────────── */
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    enableLightMode(true);
  } else {
    enableDarkMode(true);
  }
}


/* ─────────────────────────────────────────────
   3. MODE SOMBRE
───────────────────────────────────────────── */
function enableDarkMode(save = true) {
  document.body.classList.add("dark");

  const btn = document.getElementById("btnTheme");
  if (btn) btn.textContent = "☀️";

  if (save) localStorage.setItem("saveurs-theme", "dark");
}


/* ─────────────────────────────────────────────
   4. MODE CLAIR
───────────────────────────────────────────── */
function enableLightMode(save = true) {
  document.body.classList.remove("dark");

  const btn = document.getElementById("btnTheme");
  if (btn) btn.textContent = "🌙";

  if (save) localStorage.setItem("saveurs-theme", "light");
}


/* ─────────────────────────────────────────────
   5. LANCEMENT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
});