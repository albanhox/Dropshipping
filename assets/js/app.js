// Renders the product grid and detail modal from products.js.
// No build step, no dependencies — works on GitHub Pages as-is.

(function () {
  const grid = document.getElementById("product-grid");
  const backdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal");

  const money = (n) => STORE.currency + n.toFixed(2);
  const hasLink = (p) => p.stripeLink && !p.stripeLink.startsWith("PASTE_");

  function mediaHTML(p) {
    const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : "";
    const inner = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />`
      : `<span aria-hidden="true">${p.emoji}</span>`;
    return `<div class="product-media">${badge}${inner}</div>`;
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

  grid.innerHTML = PRODUCTS.map(
    (p) => `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
      ${mediaHTML(p)}
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-short">${p.short}</p>
        ${pricingHTML(p)}
        ${buyButtonHTML(p)}
      </div>
    </article>`
  ).join("");

  function openModal(p) {
    modal.innerHTML = `
      <button class="modal-close" aria-label="Close">✕</button>
      ${mediaHTML(p)}
      <div class="modal-content">
        <h3>${p.name}</h3>
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

  document.querySelector(".logo span").textContent = STORE.name;
})();
