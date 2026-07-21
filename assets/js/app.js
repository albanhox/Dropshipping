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
    // If a remote supplier photo fails to load, fall back to the local illustration.
    const fallback = p.imageFallback && p.imageFallback !== p.image
      ? ` onerror="this.onerror=null;this.src='${p.imageFallback}'"`
      : "";
    return `<div class="product-media">${badge}<span class="product-cat">${p.category}</span><img src="${p.image}" alt="${p.name}" loading="lazy"${fallback} /></div>`;
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

  // Only show products that are active (in stock with a verified supplier).
  const CATALOG = PRODUCTS.filter((p) => p.active !== false);

  // --- category filter ---
  const categories = ["All", ...new Set(CATALOG.map((p) => p.category))];
  let activeCat = "All";

  function renderFilters() {
    filterBar.innerHTML = categories
      .map((c) => `<button class="filter-chip${c === activeCat ? " active" : ""}" data-cat="${c}">${c}</button>`)
      .join("");
  }

  function renderGrid() {
    const list = activeCat === "All" ? CATALOG : CATALOG.filter((p) => p.category === activeCat);
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
        <p class="modal-guarantee">🔒 Secure Stripe checkout · 🚚 <a href="policies.html#shipping">Free US shipping</a> · ↩️ <a href="policies.html#returns">30-day guarantee</a></p>
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

  // --- best-seller spotlight ---
  const spotlight = document.getElementById("spotlight");
  const star = CATALOG.find((p) => p.id === "grooming-glove");
  if (spotlight && star) {
    spotlight.innerHTML = `
      <div class="spotlight-media">
        <img src="${star.image}" alt="${star.name}" onerror="this.onerror=null;this.src='${star.imageFallback}'" />
        <span class="spotlight-flag">⭐ #1 Best Seller</span>
      </div>
      <div class="spotlight-body">
        <p class="spotlight-kicker">Meet the fan favorite</p>
        <h2>${star.name}</h2>
        <p class="spotlight-desc">${star.description}</p>
        <ul class="spotlight-list">
          <li>🇺🇸 Ships from our <strong>US warehouse</strong> — arrives in 3–8 days</li>
          <li>🧤 ${star.bullets[0]}</li>
          <li>🧼 ${star.bullets[1]}</li>
        </ul>
        ${pricingHTML(star)}
        ${buyButtonHTML(star)}
        <p class="modal-guarantee">↩️ 30-day money-back guarantee — if your pet hates it, full refund.</p>
      </div>`;
  }

  // --- "shop by need" tiles drive the category filter ---
  document.querySelectorAll(".need-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      const cat = tile.dataset.cat;
      if (!categories.includes(cat)) return;
      activeCat = cat;
      renderFilters();
      renderGrid();
    });
  });

  // Bundle button: activates when a BUNDLE Stripe link is set below.
  const BUNDLE_STRIPE_LINK = "https://buy.stripe.com/3cIaEX6UVbwY5VR7bJ4ow0c"; // create one Payment Link at $44.99 for the 3-item kit
  const bundleBtn = document.getElementById("bundle-btn");
  if (bundleBtn && !BUNDLE_STRIPE_LINK.startsWith("PASTE_")) {
    bundleBtn.textContent = "Get the kit — $44.99";
    bundleBtn.href = BUNDLE_STRIPE_LINK;
    bundleBtn.target = "_blank";
    bundleBtn.rel = "noopener";
  }

  document.querySelector(".logo-name").textContent = STORE.name;
})();
