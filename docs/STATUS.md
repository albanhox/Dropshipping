# Project Status — PawHaven Dropshipping Store

_Last updated: 2026-07-21. This file lets any Claude session (or human) pick up the project instantly. Read this, then the other docs as needed._

## What this is

A live, revenue-ready dropshipping store selling pet accessories, built end-to-end in this repo. Owner goal: $100 net profit in week 1, scaling to $1k/month (see `PLAYBOOK.md`, `GROWTH.md`).

## Current state: FULLY OPERATIONAL

- **Live site:** https://albanhox.github.io/Dropshipping/ — auto-deploys via `.github/workflows/deploy-pages.yml` on every push to this branch (`claude/automated-dropshipping-site-1nzkw2`).
- **Payments:** All active products have live Stripe Payment Links (in `products.js`), correct prices, US shipping-address collection. The $44.99 bundle link is in `assets/js/app.js` (`BUNDLE_STRIPE_LINK`).
- **Fulfillment:** CJ Dropshipping account exists; listings favorited. Per-order routine + all listing URLs + real unit economics: `SUPPLIERS.md`.
- **Catalog:** 9 active products + bundle; 3 hidden via `active: false` in `products.js` (out-of-stock/mis-matched suppliers — details in `SUPPLIERS.md`).
- **Marketing:** 21 video scripts, Marketplace listings, creator DMs ready in `MARKETING_KIT.md`. Owner has NOT started posting yet — this is the current bottleneck.

## How work gets done (division of labor)

- **This cloud session:** everything in the repo — site, prices, docs, deploys.
- **Claude Chrome extension (owner's browser):** anything needing the owner's logged-in accounts. It has already: created all Stripe links, sourced all CJ listings, updated Stripe prices. Pattern: this session writes a detailed prompt → owner pastes it into the extension → extension reports back → this session integrates.
- **Owner only:** identity/accounts, filming content, posting.

## Open items (in priority order)

1. **Support email is still a placeholder** (`support@yourdomain.com` in `products.js`, `index.html`, `policies.html`). Ask owner for a real address and replace everywhere. Needed before first sale.
2. **Owner wants max automation:** network policy for this environment was being loosened so the session can download CJ images (self-host in `assets/img/`) and optionally call Google's Gemini image API (owner may provide a free AI Studio key) to generate professional lifestyle imagery. If network is open: download the `image:` URLs in `products.js`, commit local copies, generate lifestyle shots, update `products.js` paths.
3. **6 more products pending:** an extension prompt was given to source + create Stripe links for: Dog Cooling Mat $24.99, Cat Corner Self-Groomer $12.99, Smart Rolling Ball Toy $19.99, Pet Bath Towel $16.99, Treat Pouch $15.99, Catnip Kicker Fish 3-Pack $13.99. When the owner pastes the results table, integrate like the first batch (costs → prices with ~$9 net target, photos, `products.js` entries).
4. **Re-source the 3 hidden products** (see `SUPPLIERS.md` fixes).
5. **Email capture form** in `index.html` still points at `YOUR_FORM_ID` (Formspree placeholder).
6. **Custom domain** — owner dislikes the github.io URL; if they buy a domain, add CNAME + configure Pages.
7. **Marketing launch** — the actual money-maker. Owner may not have easy access to a pet (unconfirmed); if so, shift plan toward Marketplace + AI ad creative (Creatify etc.) per the conversation.

## Key decisions made (don't relitigate without new info)

- Stack: static site + Stripe Payment Links + CJ free plan = $0/month fixed. Shopify explicitly deferred until GROWTH.md Stage 4 triggers.
- Niche: pet accessories (research + sources in `RESEARCH.md`).
- Design: warm/cozy boutique direction (owner-chosen) — Fraunces serif, cream/green/terracotta, collage hero, marquee, shop-by-need tiles, glove spotlight.
- Integrity rules: no fabricated reviews/ratings (rating fields render only with real supplier data); products without a verified fulfillable supplier get `active: false`; site prices must always match Stripe link prices.
