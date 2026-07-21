// Renders the filter bar, product grid and detail modal from products.js.
// No build step, no dependencies, no external requests.

(function () {
  const grid = document.getElementById("product-grid");
  const filterBar = document.getElementById("filter-bar");
  const backdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal");

  const money = (n) => STORE.currency + n.toFixed(2);
  const hasLink = (p) => p.stripeLink && !p.stripeLink.startsWith("PASTE_");

  function mediaHTML(p) {
    const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : "";
    return `<div class="product-media">${badge}<span class="product-cat">${p.category}</span><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>`;
  }

  function ratingHTML(p) {
    // Only rendered when real supplier ratings are filled in (see products.js).
    if (!p.rating || !p.ratingCount) return "";
    const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
    return `<div class="product-rating">${stars} ${p.rating.toFixed(1)} <span class="count">(${p.ratingCount.toLocaleString()})</span></div>`;
  }

  function buyButtonHTML(p) {
    if (hasLink(p)) {
      return `<a class="btn btn-primary" href="${p.stripeLink}" target="_blank" rel="noopener">Buy now — ${money(p.price)}</a>`;
    }
    return `<button class="btn btn-disabled" title="Owner: paste your Stripe Payment Link into products.js">Coming soon</button>`;
  }

  function pricingHTML(p) {
    const save = Math.round((1 - p.price / p.compareAt) * 100);
    return `
      <div class="product-pricing">
        <span class="price">${money(p.price)}</span>
        <span class="compare-at">${money(p.compareAt)}</span>
        <span class="save-tag">Save ${save}%</span>
      </div>`;
  }

  function cardHTML(p) {
    return `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
      ${mediaHTML(p)}
      <div class="product-body">
        <h3>${p.name}</h3>
        ${ratingHTML(p)}
        <p class="product-short">${p.short}</p>
        ${pricingHTML(p)}
        ${buyButtonHTML(p)}
      </div>
    </article>`;
  }

  // --- category filter ---
  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  let activeCat = "All";

  function renderFilters() {
    filterBar.innerHTML = categories
      .map((c) => `<button class="filter-chip${c === activeCat ? " active" : ""}" data-cat="${c}">${c}</button>`)
      .join("");
  }

  function renderGrid() {
    const list = activeCat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCat);
    grid.innerHTML = list.map(cardHTML).join("");
  }

  filterBar.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    activeCat = chip.dataset.cat;
    renderFilters();
    renderGrid();
  });

  renderFilters();
  renderGrid();

  // --- modal ---
  function openModal(p) {
    modal.innerHTML = `
      <button class="modal-close" aria-label="Close">✕</button>
      ${mediaHTML(p)}
      <div class="modal-content">
        <h3>${p.name}</h3>
        ${ratingHTML(p)}
        ${pricingHTML(p)}
        <p class="modal-desc">${p.description}</p>
        <ul>${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
        ${buyButtonHTML(p)}
        <p class="modal-guarantee">🔒 Secure Stripe checkout · 🚚 Free US shipping · ↩️ 30-day guarantee</p>
      </div>`;
    backdrop.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return; // let Buy Now work directly
    const card = e.target.closest(".product-card");
    if (!card) return;
    openModal(PRODUCTS.find((p) => p.id === card.dataset.id));
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const card = e.target.closest(".product-card");
    if (card) openModal(PRODUCTS.find((p) => p.id === card.dataset.id));
  });

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop || e.target.closest(".modal-close")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  // Bundle button: activates when a BUNDLE Stripe link is set below.
  const BUNDLE_STRIPE_LINK = "PASTE_STRIPE_PAYMENT_LINK"; // create one Payment Link at $44.99 for the 3-item kit
  const bundleBtn = document.getElementById("bundle-btn");
  if (bundleBtn && !BUNDLE_STRIPE_LINK.startsWith("PASTE_")) {
    bundleBtn.textContent = "Get the kit — $44.99";
    bundleBtn.href = BUNDLE_STRIPE_LINK;
    bundleBtn.target = "_blank";
    bundleBtn.rel = "noopener";
  }

  document.querySelector(".logo-name").textContent = STORE.name;
})();
