# Week 1 Playbook — First $100 Profit

Goal: **$100 net profit in 7 days** with ~$0 fixed costs. That's roughly **11 orders** at the store's average ~$9.50 net profit per order.

## Unit economics (know these cold)

Example: Grooming Glove at $17.99, free shipping.

| Line | Amount |
|---|---|
| Revenue | $17.99 |
| Product + US shipping from CJ | −$6.50 |
| Stripe fee (2.9% + $0.30) | −$0.82 |
| **Net profit per order** | **≈ $10.67** |

Across the catalog, net profit runs **$8–$15/order**. So:

- **$100/week = 10–12 orders = ~1–2 orders/day.**
- **$1k/month = ~100 orders/month = 3–4/day** (or fewer with bundles — see GROWTH.md).

---

## Day 1 (≈3 hours): Make the store real

1. **Stripe** — create an account at stripe.com (need: SSN/EIN, bank account). Activate payments.
2. **Payment Links** — for each of the 6 products: Dashboard → Payment Links → New → set name + price from `products.js` → enable "Collect shipping address" (US only) → create. Paste each URL into `stripeLink` in `products.js`.
3. **CJ Dropshipping** — free account at cjdropshipping.com. Search each product, prefer listings with **US warehouse** stock. Save each to your favorites. Update the `cost` fields in `products.js` with real all-in costs; adjust retail prices if a real cost breaks your ~$9+ profit target.
4. **Product photos** — download the supplier photos from each CJ listing, drop them in `assets/img/`, set `image` in `products.js`.
5. **Deploy** — follow `docs/SETUP.md` (GitHub Pages, ~10 minutes, free).
6. Update `support email` in `products.js` and `index.html` (a free Gmail is fine to start).

**Checkpoint:** you can open your live URL, click Buy Now, and reach a real Stripe checkout.

## Day 2 (≈2 hours): Order samples + set up channels

1. **Order 1–2 samples** of your lead product (grooming glove and hair roller) from CJ to yourself (~$13). You need them in hand to film content. Until they arrive, film with any pet you can borrow + supplier videos for reference (don't repost supplier footage — TikTok suppresses recycled clips).
2. Create accounts: **TikTok** (business), **Instagram** (Reels), **YouTube** (Shorts). Same handle everywhere, e.g. `@pawhavenshop`. Bio: one line + store link.
3. Create a **Facebook Marketplace** seller profile and join 3–5 local pet-owner Facebook groups.

## Days 2–7: The two-track sales engine

### Track A — fast money (this is what makes week 1 possible)

Organic TikTok takes 30–60 days to compound. Don't wait for it:

1. **Facebook Marketplace + local groups.** List the grooming glove, hair roller, and LED collar at your retail price. When items are in a CJ **US warehouse**, delivery is ~a week — fine for Marketplace shipping. 3–5 sales here is $30–50 profit.
2. **Your own network.** Message every pet owner you know, honestly: "I just launched a small pet-gear store — here's my 10% launch code if anything's useful." 5 warm sales is normal for a launch. Not embarrassing; every store starts here.
3. **Reddit/Nextdoor** where allowed: answer real questions ("my dog eats too fast") helpfully and mention the product only when it genuinely answers the question.

### Track B — the compounding engine (start day 2, pays off weeks 2–8)

**Post 2–3 short videos per day** on TikTok, cross-posted to Reels and Shorts. Formats that work for these exact products:

- **The peel:** grooming glove covered in fur, peel it off in one sheet. (This clip is the whole reason the product is in the catalog.)
- **Before/after:** fur-covered couch → clean couch with the roller. Satisfying + fast.
- **POV problem:** "POV: your dog inhales dinner in 9 seconds" → slow feeder fixes it.
- **Night shot:** LED collar visible from far away in the dark.
- Hook in the first second, product proof by second two, price/link mention only in caption or comments.

Rules: native-shot vertical video, no watermarked supplier footage, reply to every comment (comments feed the algorithm), and put the store link in bio from day one.

**Micro-creators (day 4+):** DM 10 small pet accounts (1k–20k followers): free product + 15% of sales via a personal discount code. One yes can outperform a week of your own posting.

## Fulfilling orders (the "automated" loop)

When Stripe emails you a new payment:

1. Open the order in Stripe → copy the customer's shipping address.
2. In CJ: order the product to that address (from your saved favorites).
3. When CJ emails the tracking number, forward it to the customer from your support email.

~3 minutes per order. At week-1 volume, this **is** the automation-appropriate level — full auto-sync comes with AutoDS in `GROWTH.md` when volume justifies $30–60/mo.

## Daily scorecard (5 min every evening)

| Metric | Target |
|---|---|
| Videos posted | 2–3 |
| Marketplace listings live | 3+ |
| Orders today | 1–2 by day 4+ |
| Profit running total | $100 by day 7 |

If a video gets >5k views, make 3 more variations of it immediately. If a product gets zero traction by day 5 across both tracks, feature a different one — the six-product catalog exists so you can rotate without rebuilding anything.

## What "failure" looks like and what to do

If day 7 lands at $40–60 instead of $100: normal, keep going — Track B compounds. If it's $0 with 30+ videos posted and 10+ Marketplace listings: your content hooks are the problem, not the niche — watch the top 20 videos under #petproducts, copy their first-two-seconds structure exactly, and rerun the week.
