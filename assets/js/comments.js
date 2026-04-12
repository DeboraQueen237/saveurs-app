/* =============================================
   SAVEURS APP — Système de Commentaires
   Fichier : assets/js/comments.js
   Codé par : Personne 3
   ============================================= */


/* ─────────────────────────────────────────────
   CONFIG EMAILJS
   ⚠️ Remplace ces 3 valeurs par les tiennes
───────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = "Pjjp8vmmyN_q_ZDcj";
const EMAILJS_SERVICE_ID  = "service_d68ees8";
const EMAILJS_TEMPLATE_ID = "template_vpdkaej";


/* ─────────────────────────────────────────────
   ÉTAT LOCAL
───────────────────────────────────────────── */
let commentRating = 0;   // Note choisie dans le formulaire


/* ─────────────────────────────────────────────
   INIT — appelée depuis detail.js
───────────────────────────────────────────── */
function initComments(recipeId) {
  // Charge EmailJS si pas encore présent
  loadEmailJS().then(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  });

  // Reset de la note à chaque ouverture
  commentRating = 0;

  // Affiche les commentaires existants
  renderComments(recipeId);

  // Branche les étoiles du formulaire
  bindFormStars();
}


/* ─────────────────────────────────────────────
   CHARGER EMAILJS DYNAMIQUEMENT
───────────────────────────────────────────── */
function loadEmailJS() {
  return new Promise((resolve) => {
    if (window.emailjs) { resolve(); return; }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = resolve;
    document.head.appendChild(script);
  });
}


/* ─────────────────────────────────────────────
   ÉTOILES DU FORMULAIRE
───────────────────────────────────────────── */
function bindFormStars() {
  const stars = document.querySelectorAll(".comment-form-star");
  if (!stars.length) return;

  stars.forEach(star => {
    // Clic → sélectionne la note
    star.addEventListener("click", () => {
      commentRating = parseInt(star.dataset.value);
      paintFormStars(commentRating);
      const labels = ["", "Pas terrible 😕", "Bof 😐", "Bien 🙂", "Très bien 😊", "Excellent ! 🤩"];
      const label = document.getElementById("commentStarsLabel");
      if (label) label.textContent = labels[commentRating];
    });

    // Survol → prévisualise
    star.addEventListener("mouseover", () => paintFormStars(parseInt(star.dataset.value)));
    star.addEventListener("mouseout",  () => paintFormStars(commentRating));
  });
}

function paintFormStars(value) {
  document.querySelectorAll(".comment-form-star").forEach(s => {
    s.classList.toggle("active", parseInt(s.dataset.value) <= value);
  });
}


/* ─────────────────────────────────────────────
   SOUMETTRE UN COMMENTAIRE
───────────────────────────────────────────── */
async function submitComment(recipeId) {
  const name   = document.getElementById("commentName")?.value.trim();
  const text   = document.getElementById("commentText")?.value.trim();
  const status = document.getElementById("commentStatus");
  const btn    = document.getElementById("commentSubmitBtn");

  // Validations
  if (!name)               return setStatus(status, "⚠️ Entre ton prénom.", "warning");
  if (commentRating === 0) return setStatus(status, "⚠️ Donne une note avec les étoiles.", "warning");
  if (!text || text.length < 10) return setStatus(status, "⚠️ Écris au moins 10 caractères.", "warning");

  // Désactive le bouton pendant l'envoi
  btn.disabled    = true;
  btn.textContent = "Envoi en cours...";

  // Nom de la recette pour l'email
  const recipeName = document.querySelector(".detail-title")?.textContent || "Recette inconnue";

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      recipe_name : recipeName,
      user_name   : name,
      rating : commentRating,
      message     : text
    });

    // Sauvegarde en localStorage
    saveComment(recipeId, name, commentRating, text);

    // Rafraîchit la liste
    renderComments(recipeId);

    // Reset formulaire
    document.getElementById("commentName").value = "";
    document.getElementById("commentText").value = "";
    commentRating = 0;
    paintFormStars(0);
    const label = document.getElementById("commentStarsLabel");
    if (label) label.textContent = "Clique pour noter";

    setStatus(status, "✅ Merci ! Ton avis a été envoyé.", "success");

  } catch (err) {
    console.error("EmailJS error:", err);
    setStatus(status, "❌ Erreur d'envoi. Réessaie plus tard.", "error");
  }

  btn.disabled    = false;
  btn.textContent = "Envoyer mon avis ✉️";
}


/* ─────────────────────────────────────────────
   AFFICHER LES COMMENTAIRES
───────────────────────────────────────────── */
function renderComments(recipeId) {
  const list     = document.getElementById("commentsList");
  if (!list) return;

  const comments = getComments(recipeId);

  if (comments.length === 0) {
    list.innerHTML = `
      <p class="comments-empty">
        Aucun avis pour le moment. Sois le premier ! 🍽️
      </p>`;
    return;
  }

  list.innerHTML = comments.map((c, i) => `
    <div class="comment-card">
      <div class="comment-header">
        <span class="comment-author">👤 ${escapeHTML(c.name)}</span>
        <span class="comment-stars">${"★".repeat(c.rating)}${"☆".repeat(5 - c.rating)}</span>
        <span class="comment-date">${c.date}</span>
      </div>
      <p class="comment-text">${escapeHTML(c.text)}</p>
      <button
        class="comment-thank-btn ${c.thanked ? "thanked" : ""}"
        onclick="thankComment(${recipeId}, ${i})"
      >${c.thanked ? "❤️ Merci noté !" : "👍 Merci pour l'avis"}</button>
    </div>
  `).join("");
}


/* ─────────────────────────────────────────────
   BOUTON "MERCI POUR L'AVIS" — Style Play Store
───────────────────────────────────────────── */
function thankComment(recipeId, index) {
  const comments = getComments(recipeId);
  if (!comments[index]) return;
  comments[index].thanked = true;
  saveAllComments(recipeId, comments);
  renderComments(recipeId);
}


/* ─────────────────────────────────────────────
   LOCALSTORAGE
───────────────────────────────────────────── */
function getComments(recipeId) {
  try {
    return JSON.parse(localStorage.getItem(`saveurs_comments_${recipeId}`)) || [];
  } catch { return []; }
}

function saveComment(recipeId, name, rating, text) {
  const comments = getComments(recipeId);
  comments.unshift({
    name,
    rating,
    text,
    date    : new Date().toLocaleDateString("fr-FR"),
    thanked : false
  });
  saveAllComments(recipeId, comments);
}

function saveAllComments(recipeId, comments) {
  localStorage.setItem(`saveurs_comments_${recipeId}`, JSON.stringify(comments));
}


/* ─────────────────────────────────────────────
   UTILITAIRES
───────────────────────────────────────────── */
function setStatus(el, msg, type) {
  if (!el) return;
  el.textContent = msg;
  el.className   = `comment-status comment-status--${type}`;
}

// Évite les injections XSS dans les commentaires
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}