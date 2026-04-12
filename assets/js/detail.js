/* =============================================
   SAVEURS APP — Page Détail, Calculateur,
                 PDF & Partage
   Fichier : assets/js/detail.js
   Codé par : Personne 3
   ============================================= */


/* ─────────────────────────────────────────────
   1. VARIABLES D'ÉTAT
───────────────────────────────────────────── */
let currentRecipe   = null;
let currentServings = 1;
const MAX_SERVINGS  = 20;
const MIN_SERVINGS  = 1;


/* ─────────────────────────────────────────────
   2. OUVRIR LA PAGE DÉTAIL
───────────────────────────────────────────── */
function openRecipeDetail(recipeId) {
  currentRecipe = recipes.find(r => r.id === recipeId);
  if (!currentRecipe) return;

  currentServings = currentRecipe.baseServings;

  document.getElementById("pageHome").style.display   = "none";
  document.getElementById("pageDetail").style.display = "block";
  document.getElementById("pageDetail").classList.add("active");
  document.getElementById("pageDetail").innerHTML = buildDetailHTML(currentRecipe);

  // ✅ Ajoute cette ligne ↓
  initComments(currentRecipe.id);

  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ─────────────────────────────────────────────
   3. RETOUR À L'ACCUEIL
───────────────────────────────────────────── */
function goHome() {
  document.getElementById("pageHome").style.display   = "block";
  document.getElementById("pageDetail").style.display = "none";
  document.getElementById("pageDetail").classList.remove("active");
  currentRecipe   = null;
  currentServings = 1;
  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ─────────────────────────────────────────────
   4. CONSTRUIRE LE HTML DE LA PAGE DÉTAIL
───────────────────────────────────────────── */
function buildDetailHTML(recipe) {
  const isFav = isFavorite(recipe.id);
  const stars = "★".repeat(Math.floor(recipe.rating)) +
                "☆".repeat(5 - Math.floor(recipe.rating));

  return `
    <div class="detail-page">

      <!-- Bouton retour -->
      <button class="detail-back-btn" onclick="goHome()">
        ← Retour aux recettes
      </button>

      <!-- Boutons actions (PDF + Partage) -->
      <div class="detail-actions">
        <button class="action-btn action-btn-pdf" onclick="exportPDF(${recipe.id})">
          <span class="action-btn-icon">📄</span>
          Exporter PDF
        </button>
        <button class="action-btn action-btn-share" onclick="openShareModal(${recipe.id})">
          <span class="action-btn-icon">🔗</span>
          Partager
        </button>
      </div>

      <!-- Hero image -->
      <div class="detail-hero">
        <img
          class="detail-hero-img"
          src="${recipe.image}"
          alt="${recipe.title}"
          onerror="this.style.display='none';
                   document.querySelector('.detail-hero-fallback').style.cssText=
                   'display:flex; background:${recipe.color}22;'"
        />
        <div class="detail-hero-fallback" style="background:${recipe.color}22;">
          🍽️
        </div>
        <div class="detail-hero-overlay"></div>
        <button
          class="detail-fav-btn ${isFav ? "active" : ""}"
          id="detailFavBtn"
          onclick="toggleDetailFavorite(${recipe.id})"
        >
          ${isFav ? "❤️" : "🤍"}
        </button>
      </div>

      <!-- Infos principales -->
      <div class="detail-info-card">
        <span
          class="detail-category-badge"
          style="background:${recipe.color}22; color:${recipe.color};
                 border:1px solid ${recipe.color}44;"
        >${recipe.category}</span>
        <h1 class="detail-title">${recipe.title}</h1>
        <div class="detail-rating">
          <span class="detail-stars">${stars}</span>
          <span class="detail-rating-value">${recipe.rating} / 5</span>
        </div>
        <div class="detail-quick-infos">
          <div class="detail-quick-item">
            <span class="detail-quick-icon">⏱</span>
            <span class="detail-quick-value">${recipe.time}</span>
            <span class="detail-quick-label">Durée</span>
          </div>
          <div class="detail-quick-item">
            <span class="detail-quick-icon">🔥</span>
            <span class="detail-quick-value">${recipe.calories}</span>
            <span class="detail-quick-label">Kcal</span>
          </div>
          <div class="detail-quick-item">
            <span class="detail-quick-icon">📊</span>
            <span class="detail-quick-value">${recipe.difficulty}</span>
            <span class="detail-quick-label">Niveau</span>
          </div>
        </div>
      </div>

      <!-- Calculateur de portions -->
      <div class="calculator-card">
        <div class="calculator-header">
          <div>
            <span class="calculator-label">👥 Ajuster les portions</span>
            <span class="calculator-base">
              Base : ${recipe.baseServings} personne${recipe.baseServings > 1 ? "s" : ""}
            </span>
          </div>
          <div class="calculator-control">
            <button class="calc-btn calc-btn-minus" id="btnMinus"
              onclick="changeServings(-1)"
              ${currentServings <= MIN_SERVINGS ? "disabled" : ""}>−</button>
            <div class="calc-value" id="calcValue">${currentServings}</div>
            <button class="calc-btn calc-btn-plus" id="btnPlus"
              onclick="changeServings(1)"
              ${currentServings >= MAX_SERVINGS ? "disabled" : ""}>+</button>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill"
            style="width:${(currentServings / MAX_SERVINGS) * 100}%"></div>
        </div>
        <div class="progress-labels">
          <span class="progress-label">1</span>
          <span class="progress-label">20 pers. max</span>
        </div>
        <div class="calculator-badge" id="calcBadge"></div>
      </div>

      <!-- Ingrédients -->
      <div class="ingredients-card">
        <div class="detail-section-header">
          <h2 class="detail-section-title">🧺 Ingrédients</h2>
          <span class="ingredients-serving-label" id="servingLabel"
            style="color:${recipe.color};">
            pour ${currentServings} personne${currentServings > 1 ? "s" : ""}
          </span>
        </div>
        <div class="ingredients-list" id="ingredientsList">
          ${buildIngredientsHTML(recipe.ingredients, currentServings, recipe.baseServings)}
        </div>
        <button class="btn-reset-servings" id="btnReset" onclick="resetServings()">
          ↺ Revenir à ${recipe.baseServings} personne${recipe.baseServings > 1 ? "s" : ""}
        </button>
      </div>

      <!-- Étapes -->
      <div class="steps-card">
        <h2 class="detail-section-title" style="margin-bottom:16px;">
          👨‍🍳 Étapes de préparation
        </h2>
        <div class="steps-list">
          ${recipe.steps.map((step, i) => `
            <div class="step-item">
              <div class="step-number" style="background:${recipe.color};">${i + 1}</div>
              <p class="step-text">${step}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Tags -->
      <div class="detail-tags">
        ${recipe.tags.map(tag => `
          <span class="detail-tag">#${tag}</span>
        `).join("")}
      </div>

         <!-- Section Commentaires -->
<div class="comments-section">
  <h2 class="comments-section-title">💬 Avis & Commentaires</h2>

  <!-- Formulaire -->
  <div class="comment-form">
    <h3>Laisser un avis</h3>
    <div class="comment-form-stars">
      <span class="comment-form-star" data-value="1">★</span>
      <span class="comment-form-star" data-value="2">★</span>
      <span class="comment-form-star" data-value="3">★</span>
      <span class="comment-form-star" data-value="4">★</span>
      <span class="comment-form-star" data-value="5">★</span>
    </div>
    <span class="comment-stars-label" id="commentStarsLabel">Clique pour noter</span>
    <input type="text" id="commentName" placeholder="Ton prénom" maxlength="50" />
    <textarea id="commentText" placeholder="Ton avis sur cette recette..." maxlength="500"></textarea>
    <button class="comment-submit-btn" id="commentSubmitBtn"
      onclick="submitComment(${recipe.id})">
      Envoyer mon avis ✉️
    </button>
    <span class="comment-status" id="commentStatus"></span>
  </div>

  <!-- Liste des commentaires -->
  <div id="commentsList"></div>
</div> 

    </div>

    <!-- Modal Partage -->
    <div class="share-modal-overlay" id="shareModalOverlay" onclick="closeShareModal()">
      <div class="share-modal" onclick="event.stopPropagation()">
        <div class="share-modal-header">
          <h3 class="share-modal-title">Partager cette recette</h3>
          <button class="share-modal-close" onclick="closeShareModal()">✕</button>
        </div>
        <p class="share-modal-recipe">${recipe.title}</p>
        <div class="share-options">

          <!-- WhatsApp -->
          <button class="share-option share-whatsapp" onclick="shareWhatsApp(${recipe.id})">
            <span class="share-option-icon">💬</span>
            <div class="share-option-text">
              <strong>WhatsApp</strong>
              <span>Envoyer via WhatsApp</span>
            </div>
          </button>

          <!-- Copier le lien -->
          <button class="share-option share-copy" id="shareCopyBtn"
            onclick="copyLink(${recipe.id})">
            <span class="share-option-icon">🔗</span>
            <div class="share-option-text">
              <strong>Copier le lien</strong>
              <span id="copyLinkStatus">Copier le lien dans le presse-papier</span>
            </div>
          </button>

        </div>
      </div>
    </div>
  `;
}


/* ─────────────────────────────────────────────
   5. INGRÉDIENTS HTML
───────────────────────────────────────────── */
function buildIngredientsHTML(ingredients, servings, baseServings) {
  const ratio   = servings / baseServings;
  const changed = servings !== baseServings;

  return ingredients.map(ing => {
    const newAmount = ing.amount * ratio;
    const formatted = formatAmount(newAmount);
    return `
      <div class="ingredient-item ${changed ? "changed" : ""}">
        <span class="ingredient-name">${ing.name}</span>
        <span class="ingredient-amount ${changed ? "changed" : ""}">
          ${formatted} ${ing.unit}
        </span>
      </div>
    `;
  }).join("");
}


/* ─────────────────────────────────────────────
   6. CALCULATEUR DE PORTIONS
───────────────────────────────────────────── */
function changeServings(delta) {
  const next = currentServings + delta;
  if (next < MIN_SERVINGS || next > MAX_SERVINGS) return;
  currentServings = next;
  updateCalculator();
}

function resetServings() {
  if (!currentRecipe) return;
  currentServings = currentRecipe.baseServings;
  updateCalculator();
}

function updateCalculator() {
  if (!currentRecipe) return;
  const ratio = currentServings / currentRecipe.baseServings;

  // Valeur + animation bump
  const calcValue = document.getElementById("calcValue");
  if (calcValue) {
    calcValue.textContent = currentServings;
    calcValue.classList.add("bump");
    setTimeout(() => calcValue.classList.remove("bump"), 150);
  }

  // Boutons
  const btnMinus = document.getElementById("btnMinus");
  const btnPlus  = document.getElementById("btnPlus");
  if (btnMinus) btnMinus.disabled = currentServings <= MIN_SERVINGS;
  if (btnPlus)  btnPlus.disabled  = currentServings >= MAX_SERVINGS;

  // Barre progression
  const progressFill = document.getElementById("progressFill");
  if (progressFill) {
    progressFill.style.width = `${(currentServings / MAX_SERVINGS) * 100}%`;
  }

  // Badge
  const badge = document.getElementById("calcBadge");
  if (badge) {
    if (currentServings === currentRecipe.baseServings) {
      badge.classList.remove("visible", "multiply", "divide");
    } else {
      badge.classList.add("visible");
      if (ratio > 1) {
        badge.classList.add("multiply");
        badge.classList.remove("divide");
        badge.textContent = `✕ Quantités multipliées — recette pour ${currentServings} personne${currentServings > 1 ? "s" : ""}`;
      } else {
        badge.classList.add("divide");
        badge.classList.remove("multiply");
        badge.textContent = `÷ Quantités réduites — recette pour ${currentServings} personne${currentServings > 1 ? "s" : ""}`;
      }
    }
  }

  // Label portions
  const servingLabel = document.getElementById("servingLabel");
  if (servingLabel) {
    servingLabel.textContent = `pour ${currentServings} personne${currentServings > 1 ? "s" : ""}`;
  }

  // Ingrédients
  const list = document.getElementById("ingredientsList");
  if (list) {
    list.innerHTML = buildIngredientsHTML(
      currentRecipe.ingredients, currentServings, currentRecipe.baseServings
    );
  }

  // Bouton reset
  const btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.classList.toggle("visible", currentServings !== currentRecipe.baseServings);
  }
}


/* ─────────────────────────────────────────────
   7. FORMAT DES QUANTITÉS
───────────────────────────────────────────── */
function formatAmount(amount) {
  if (amount === 0) return "0";
  if (amount >= 10) return Math.round(amount).toString();
  const rounded = Math.round(amount * 4) / 4;
  const whole   = Math.floor(rounded);
  const decimal = rounded - whole;
  const fracs   = { 0.25: "¼", 0.5: "½", 0.75: "¾" };
  if (fracs[decimal]) return whole > 0 ? `${whole} ${fracs[decimal]}` : fracs[decimal];
  return (Math.round(amount * 10) / 10).toString();
}


/* ─────────────────────────────────────────────
   8. FAVORIS
───────────────────────────────────────────── */
function toggleDetailFavorite(recipeId) {
  toggleFavorite(recipeId);
  const btn = document.getElementById("detailFavBtn");
  if (btn) {
    const fav = isFavorite(recipeId);
    btn.classList.toggle("active", fav);
    btn.textContent = fav ? "❤️" : "🤍";
  }
  updateFavCount();
}


/* ─────────────────────────────────────────────
   9. EXPORT PDF avec jsPDF
───────────────────────────────────────────── */
async function exportPDF(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  // Bouton en état de chargement
  const btn = document.querySelector(".action-btn-pdf");
  if (btn) {
    btn.textContent = "⏳ Génération...";
    btn.disabled = true;
  }

  try {
    // Charger jsPDF dynamiquement
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    const pageW  = 210;
    const pageH  = 297;
    const margin = 16;
    const colW   = pageW - margin * 2;
    let   y      = 0;

    // ── Couleur principale de la recette ──
    const hex   = recipe.color.replace("#", "");
    const r     = parseInt(hex.substring(0, 2), 16);
    const g     = parseInt(hex.substring(2, 4), 16);
    const b     = parseInt(hex.substring(4, 6), 16);

    // ── HEADER coloré ──
    doc.setFillColor(r, g, b);
    doc.rect(0, 0, pageW, 48, "F");

    // Logo et titre dans le header
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("🍳  SAVEURS — Recettes de Cuisine", margin, 14);

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    const titleLines = doc.splitTextToSize(recipe.title, colW - 10);
    doc.text(titleLines, margin, 28);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${recipe.category}  •  ${recipe.difficulty}  •  ${recipe.rating}/5`, margin, 42);

    y = 58;

    // ── Infos rapides ──
    doc.setTextColor(80, 80, 80);
    doc.setFillColor(250, 250, 248);
    doc.roundedRect(margin, y, colW, 22, 3, 3, "F");

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(r, g, b);

    const infoItems = [
      { label: "Durée", value: recipe.time },
      { label: "Portions", value: `${recipe.baseServings} pers.` },
      { label: "Calories", value: `${recipe.calories} kcal` },
    ];

    const infoW = colW / 3;
    infoItems.forEach((item, i) => {
      const x = margin + i * infoW + infoW / 2;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(item.value, x, y + 10, { align: "center" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(160, 160, 156);
      doc.text(item.label.toUpperCase(), x, y + 17, { align: "center" });
    });

    y += 32;

    // ── Séparateur ──
    doc.setDrawColor(r, g, b);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageW - margin, y);
    y += 10;

    // ── INGRÉDIENTS ──
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(28, 25, 23);
    doc.text("Ingrédients", margin, y);
    y += 8;

    const ratio = currentServings / recipe.baseServings;
    recipe.ingredients.forEach((ing, i) => {
      if (y > pageH - 30) {
        doc.addPage();
        y = 20;
      }

      const amount   = formatAmount(ing.amount * ratio);
      const isEven   = i % 2 === 0;

      if (isEven) {
        doc.setFillColor(250, 250, 248);
        doc.rect(margin, y - 4, colW, 8, "F");
      }

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(28, 25, 23);
      doc.text(ing.name, margin + 3, y + 1);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(r, g, b);
      doc.text(`${amount} ${ing.unit}`, pageW - margin - 3, y + 1, { align: "right" });

      y += 9;
    });

    y += 6;

    // ── Séparateur ──
    doc.setDrawColor(r, g, b);
    doc.line(margin, y, pageW - margin, y);
    y += 10;

    // ── ÉTAPES ──
    if (y > pageH - 50) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(28, 25, 23);
    doc.text("Étapes de préparation", margin, y);
    y += 10;

    recipe.steps.forEach((step, i) => {
      if (y > pageH - 30) {
        doc.addPage();
        y = 20;
      }

      // Numéro cerclé
      doc.setFillColor(r, g, b);
      doc.circle(margin + 4, y - 1, 4, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.text((i + 1).toString(), margin + 4, y + 1, { align: "center" });

      // Texte de l'étape
      doc.setTextColor(28, 25, 23);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const stepLines = doc.splitTextToSize(step, colW - 14);
      doc.text(stepLines, margin + 12, y + 1);

      y += stepLines.length * 6 + 5;
    });

    y += 6;

    // ── Tags ──
    if (y < pageH - 30) {
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(160, 160, 156);
      const tagsText = recipe.tags.map(t => `#${t}`).join("  ");
      doc.text(tagsText, margin, y);
      y += 10;
    }

    // ── Footer ──
    const lastPage = doc.internal.getNumberOfPages();
    for (let p = 1; p <= lastPage; p++) {
      doc.setPage(p);
      doc.setFillColor(r, g, b);
      doc.rect(0, pageH - 12, pageW, 12, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont("helvetica", "normal");
      doc.text("Saveurs — Application de Recettes  •  KEYCE Informatique", margin, pageH - 5);
      doc.text(`Page ${p} / ${lastPage}`, pageW - margin, pageH - 5, { align: "right" });
    }

    // ── Télécharger ──
    const filename = recipe.title.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "") + ".pdf";
    doc.save(filename);

  } catch (err) {
    console.error("Erreur PDF:", err);
    alert("Erreur lors de la génération du PDF. Réessayez.");
  } finally {
    if (btn) {
      btn.innerHTML = '<span class="action-btn-icon">📄</span> Exporter PDF';
      btn.disabled = false;
    }
  }
}

// Charger un script externe dynamiquement
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload  = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}


/* ─────────────────────────────────────────────
   10. MODAL DE PARTAGE
───────────────────────────────────────────── */
function openShareModal(recipeId) {
  const overlay = document.getElementById("shareModalOverlay");
  if (overlay) {
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }
}

function closeShareModal() {
  const overlay = document.getElementById("shareModalOverlay");
  if (overlay) {
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }
  // Reset du bouton copier
  const status = document.getElementById("copyLinkStatus");
  if (status) status.textContent = "Copier le lien dans le presse-papier";
  const copyBtn = document.getElementById("shareCopyBtn");
  if (copyBtn) copyBtn.classList.remove("copied");
}


/* ─────────────────────────────────────────────
   11. PARTAGE WHATSAPP
───────────────────────────────────────────── */
function shareWhatsApp(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  const text = `🍳 *${recipe.title}*\n\n` +
    `📂 Catégorie : ${recipe.category}\n` +
    `⏱ Durée : ${recipe.time}\n` +
    `👥 Portions : ${recipe.baseServings} personnes\n` +
    `🔥 Calories : ${recipe.calories} kcal\n` +
    `📊 Difficulté : ${recipe.difficulty}\n\n` +
    `🧺 *Ingrédients :*\n` +
    recipe.ingredients.map(i => `• ${i.name} : ${formatAmount(i.amount)} ${i.unit}`).join("\n") +
    `\n\n👨‍🍳 *Étapes :*\n` +
    recipe.steps.map((s, i) => `${i + 1}. ${s}`).join("\n") +
    `\n\n🌐 Découvrez plus de recettes sur Saveurs — KEYCE Informatique`;

  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
  closeShareModal();
}


/* ─────────────────────────────────────────────
   12. COPIER LE LIEN
───────────────────────────────────────────── */
function copyLink(recipeId) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  // Construire un lien avec le titre de la recette
  const baseUrl = window.location.href.split("?")[0];
  const link    = `${baseUrl}?recette=${recipeId}`;

  navigator.clipboard.writeText(link).then(() => {
    // Feedback visuel
    const status  = document.getElementById("copyLinkStatus");
    const copyBtn = document.getElementById("shareCopyBtn");
    if (status)  status.textContent = "✅ Lien copié !";
    if (copyBtn) copyBtn.classList.add("copied");

    // Reset après 2 secondes
    setTimeout(() => {
      if (status)  status.textContent = "Copier le lien dans le presse-papier";
      if (copyBtn) copyBtn.classList.remove("copied");
    }, 2000);
  }).catch(() => {
    alert("Impossible de copier. Copiez manuellement : " + link);
  });
}


/* ─────────────────────────────────────────────
   13. LOGO → RETOUR ACCUEIL
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  const logoBtn = document.getElementById("logoBtn");
  if (logoBtn) {
    logoBtn.addEventListener("click", function () {
      if (currentRecipe) goHome();
    });
  }
});