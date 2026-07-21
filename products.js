// ============================================================
// PRODUCT CATALOG — this is the only file you edit to change
// what the store sells.
//
// For each product:
//   1. Source it on CJ Dropshipping (cjdropshipping.com) and note
//      the real cost + US shipping price.
//   2. Create a Stripe Payment Link (dashboard.stripe.com >
//      Payment Links > New) at the retail price and paste the URL
//      into `stripeLink`.
//   3. Replace `image` with a real supplier photo (download from
//      the CJ listing, save into assets/img/, reference it here).
//      Until then the site shows a styled placeholder.
// ============================================================

const STORE = {
  name: "PawHaven",
  tagline: "Clever gear for happier pets (and cleaner homes)",
  supportEmail: "support@yourdomain.com", // change me
  currency: "$",
};

const PRODUCTS = [
  {
    id: "grooming-glove",
    name: "5-Finger Pet Grooming Glove",
    price: 17.99,
    compareAt: 24.99,
    cost: 6.5, // your approx. all-in cost from CJ incl. US shipping — for your own math, not shown to customers
    badge: "Best Seller",
    emoji: "🧤",
    image: "",
    short: "Brush, de-shed and massage in one — hair peels off in a single sheet.",
    description:
      "Soft silicone tips remove loose fur while you pet. Works on dogs and cats, long or short hair. Shed hair sticks to the glove and peels off in one satisfying sheet — the exact clip that goes viral on TikTok.",
    bullets: [
      "Gentle enough for daily use — most pets think it's petting",
      "Machine-washable, one size fits all",
      "Free US shipping, 7–12 day delivery",
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "self-cleaning-brush",
    name: "Self-Cleaning Slicker Brush",
    price: 19.99,
    compareAt: 27.99,
    cost: 7.0,
    badge: "",
    emoji: "🪮",
    image: "",
    short: "One click retracts the bristles — collected fur falls right off.",
    description:
      "Fine bent-wire bristles reach the undercoat without scratching skin. When you're done, press the button: bristles retract and the collected fur drops off in one pad. No more picking hair out of a brush.",
    bullets: [
      "Push-button self-cleaning mechanism",
      "Safe for sensitive skin — rounded bristle tips",
      "Free US shipping, 7–12 day delivery",
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "slow-feeder",
    name: "Anti-Gulp Slow Feeder Bowl",
    price: 16.99,
    compareAt: 22.99,
    cost: 6.0,
    badge: "",
    emoji: "🥣",
    image: "",
    short: "Maze design slows fast eaters by up to 10x — better digestion, less bloat.",
    description:
      "Vets recommend slow feeders for dogs that inhale their food. The maze pattern turns mealtime into a puzzle, reducing bloat, vomiting and boredom. Non-slip base keeps it in place.",
    bullets: [
      "Food-grade, dishwasher-safe material",
      "Non-slip rubber base",
      "Free US shipping, 7–12 day delivery",
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "hair-roller",
    name: "Reusable Pet Hair Remover Roller",
    price: 18.99,
    compareAt: 25.99,
    cost: 7.0,
    badge: "TikTok Famous",
    emoji: "🛋️",
    image: "",
    short: "Rolls fur off sofas and car seats — no refills, empties with one click.",
    description:
      "The roller that made 'fur-covered couch' videos famous. Roll back and forth over fabric and the chamber traps the hair; open the lid, dump it out, done. Nothing to replace, ever.",
    bullets: [
      "100% reusable — no sticky refills to buy",
      "Works on sofas, beds, car seats and clothes",
      "Free US shipping, 7–12 day delivery",
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "led-collar",
    name: "USB-Rechargeable LED Safety Collar",
    price: 14.99,
    compareAt: 19.99,
    cost: 5.5,
    badge: "",
    emoji: "💡",
    image: "",
    short: "Makes your dog visible from 500m on night walks. Charges via USB.",
    description:
      "Three light modes (steady, slow flash, fast flash) keep your dog visible to cars and cyclists after dark. One 15-minute charge lasts up to 8 hours. Cuttable strip fits any neck size.",
    bullets: [
      "Visible up to 500m at night",
      "USB rechargeable — no coin batteries",
      "Free US shipping, 7–12 day delivery",
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "snuffle-mat",
    name: "Interactive Snuffle Mat",
    price: 24.99,
    compareAt: 34.99,
    cost: 9.0,
    badge: "High Margin",
    emoji: "🐾",
    image: "",
    short: "Hides treats in fleece folds — 15 minutes of sniffing tires a dog like an hour of walking.",
    description:
      "Scatter kibble into the fleece folds and let your dog forage. Nosework is deeply tiring for dogs — trainers use snuffle mats to calm anxious and high-energy pups. Machine washable, non-slip backing.",
    bullets: [
      "Great for anxious, bored or high-energy dogs",
      "Machine washable, rolls up for storage",
      "Free US shipping, 7–12 day delivery",
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
];
