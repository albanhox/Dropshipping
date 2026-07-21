# Technical Setup — Deploy the Store Free in ~10 Minutes

The site is plain HTML/CSS/JS — no build step, no server, no database. Any static host serves it.

## Option A: GitHub Pages (recommended, free)

1. In this repo on GitHub: **Settings → Pages**.
2. Source: **Deploy from a branch** → pick your branch → folder `/ (root)` → Save.
3. In 1–2 minutes the store is live at `https://<username>.github.io/Dropshipping/`.
4. Every `git push` redeploys automatically.

## Option B: Vercel or Netlify (free, nicer URLs)

Import the repo at vercel.com or netlify.com → framework preset "Other" → deploy. You get `pawhaven.vercel.app`-style URLs and can attach a custom domain later with a couple of clicks.

## Editing the store

Everything a store owner touches lives in **`products.js`**:

- `STORE` — name, tagline, support email.
- `PRODUCTS` — one object per product: name, price, `compareAt` (strikethrough price), your `cost` (private, for margin math), copy, and `stripeLink`.

Until a product's `stripeLink` is a real Stripe URL, its button shows **"Coming soon"** and can't be clicked — so the site is safe to deploy before Stripe is set up.

### Connecting Stripe (per product, ~2 min each)

1. [dashboard.stripe.com](https://dashboard.stripe.com) → **Payment Links → + New**.
2. Add product name + price. Under options: **Collect customers' addresses → Shipping address**, restrict to United States.
3. Optionally add a confirmation message: "Thanks! Your order ships within 1–2 business days — tracking arrives by email."
4. Copy the link URL → paste into that product's `stripeLink` in `products.js` → commit & push.

### Adding real product photos

Download images from your CJ Dropshipping listings → save as `assets/img/<product-id>.jpg` → set `image: "assets/img/<product-id>.jpg"` on the product. The emoji placeholder disappears automatically.

### Email capture form

Create a free form at [formspree.io](https://formspree.io) → replace `YOUR_FORM_ID` in the form `action` in `index.html`. Submissions land in your inbox (or connect MailerLite later — see GROWTH.md).

## Custom domain (optional, ~$10/yr)

Buy at Cloudflare/Namecheap/Porkbun → add it in your host's domain settings (Pages/Vercel/Netlify all document this in-app) → done. Do this once you have first sales; it isn't needed to start.

## Local preview

Just open `index.html` in a browser, or run `python3 -m http.server` in the repo root and visit `http://localhost:8000`.
