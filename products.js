// ============================================================
// PRODUCT CATALOG — the only file you edit to change what the
// store sells.
//
// For each product:
//   1. Source it on CJ Dropshipping (cjdropshipping.com), prefer
//      US-warehouse listings, note the real all-in cost.
//   2. Create a Stripe Payment Link at the retail price and paste
//      the URL into `stripeLink`. Buttons say "Coming soon" until
//      you do.
//   3. Replace `image` with a real supplier photo (download from
//      the CJ listing into assets/img/, e.g. "assets/img/glove.jpg").
//      Until then the site shows the built-in illustration.
//   4. `rating`/`ratingCount`: OPTIONAL. Only fill these with the
//      real rating from your supplier's listing (these commodity
//      products usually have thousands of reviews). Leave null and
//      no stars are shown — never invent numbers.
// ============================================================

const STORE = {
  name: "PawHaven",
  tagline: "Clever gear for happier pets",
  supportEmail: "support@yourdomain.com", // change me
  currency: "$",
};

const PRODUCTS = [
  {
    id: "grooming-glove",
    name: "5-Finger Grooming Glove",
    category: "Grooming",
    price: 17.99, compareAt: 24.99, cost: 6.5,
    badge: "Best Seller",
    image: "assets/img/grooming-glove.svg",
    rating: null, ratingCount: null,
    short: "Brush, de-shed and massage in one — hair peels off in a single sheet.",
    description: "Soft silicone tips remove loose fur while you pet. Works on dogs and cats, long or short hair. Shed hair sticks to the glove and peels off in one satisfying sheet.",
    bullets: ["Gentle enough for daily use — most pets think it's petting", "Machine-washable, one size fits all", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "self-cleaning-brush",
    name: "Self-Cleaning Slicker Brush",
    category: "Grooming",
    price: 19.99, compareAt: 27.99, cost: 7.0,
    badge: "",
    image: "assets/img/self-cleaning-brush.svg",
    rating: null, ratingCount: null,
    short: "One click retracts the bristles — collected fur falls right off.",
    description: "Fine bent-wire bristles reach the undercoat without scratching skin. Press the button when done: bristles retract and the fur drops off in one pad.",
    bullets: ["Push-button self-cleaning mechanism", "Rounded tips, safe for sensitive skin", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "nail-grinder",
    name: "Whisper-Quiet Nail Grinder",
    category: "Grooming",
    price: 21.99, compareAt: 29.99, cost: 8.0,
    badge: "",
    image: "assets/img/nail-grinder.svg",
    rating: null, ratingCount: null,
    short: "USB-rechargeable, low-vibration — trims nails without the clipper panic.",
    description: "Diamond-bit grinder files nails smoothly instead of squeezing them. Low noise and vibration keep anxious pets calm. Two speeds, three port sizes for small to large breeds.",
    bullets: ["Quieter than standard grinders — under 40db", "USB-C rechargeable, 6hr runtime", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "slow-feeder",
    name: "Anti-Gulp Slow Feeder Bowl",
    category: "Feeding",
    price: 16.99, compareAt: 22.99, cost: 6.0,
    badge: "",
    image: "assets/img/slow-feeder.svg",
    rating: null, ratingCount: null,
    short: "Maze design slows fast eaters by up to 10x — better digestion, less bloat.",
    description: "Vets recommend slow feeders for dogs that inhale their food. The maze pattern turns mealtime into a puzzle, reducing bloat, vomiting and boredom. Non-slip base.",
    bullets: ["Food-grade, dishwasher-safe material", "Non-slip rubber base", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "lick-mat",
    name: "Calming Lick Mat (2-Pack)",
    category: "Feeding",
    price: 13.99, compareAt: 18.99, cost: 5.0,
    badge: "",
    image: "assets/img/lick-mat.svg",
    rating: null, ratingCount: null,
    short: "Spread peanut butter, buy yourself 20 calm minutes. Bath-time hack included.",
    description: "Licking is naturally soothing for dogs and cats. Textured surface holds spreads and slows them down — suction backing sticks to the bathtub wall for stress-free wash time.",
    bullets: ["Two textures, dishwasher safe", "Suction backing sticks to tubs and floors", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "water-bottle",
    name: "Portable Dog Water Bottle",
    category: "Walks",
    price: 19.99, compareAt: 26.99, cost: 7.0,
    badge: "",
    image: "assets/img/water-bottle.svg",
    rating: null, ratingCount: null,
    short: "One-hand press fills the trough; unused water drains back. No more cupped hands.",
    description: "Leak-proof bottle with a built-in drinking trough. Press to fill, release to drain the extra back in — nothing wasted, nothing spilled in your bag.",
    bullets: ["19oz, leak-proof lock switch", "Food-grade, BPA-free", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "led-collar",
    name: "USB LED Safety Collar",
    category: "Walks",
    price: 14.99, compareAt: 19.99, cost: 5.5,
    badge: "",
    image: "assets/img/led-collar.svg",
    rating: null, ratingCount: null,
    short: "Makes your dog visible from 500m on night walks. Charges via USB.",
    description: "Three light modes keep your dog visible to cars and cyclists after dark. A 15-minute charge lasts up to 8 hours. Cuttable strip fits any neck size.",
    bullets: ["Visible up to 500m at night", "USB rechargeable — no coin batteries", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "seatbelt-tether",
    name: "Dog Car Seatbelt Tether",
    category: "Walks",
    price: 12.99, compareAt: 17.99, cost: 4.5,
    badge: "",
    image: "assets/img/seatbelt-tether.svg",
    rating: null, ratingCount: null,
    short: "Clips into any seatbelt buckle — keeps your co-pilot safe and off your lap.",
    description: "Heavy-duty nylon tether clicks into the standard seatbelt receiver and clips to any harness. Elastic buffer absorbs sudden stops. Adjustable 21–30 inches.",
    bullets: ["Fits standard seatbelt buckles", "Use with a harness, never a collar", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "paw-cleaner",
    name: "Portable Paw Cleaner Cup",
    category: "Walks",
    price: 16.99, compareAt: 22.99, cost: 6.0,
    badge: "",
    image: "assets/img/paw-cleaner.svg",
    rating: null, ratingCount: null,
    short: "Dunk, twist, done — muddy paws cleaned at the door in seconds.",
    description: "Soft silicone bristles inside a spill-resistant cup. Add a little water, dip each paw, twist gently — mud stays in the cup, not on your floors.",
    bullets: ["Gentle silicone bristles", "Splits apart for easy rinsing", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "hair-roller",
    name: "Reusable Pet Hair Roller",
    category: "Home",
    price: 18.99, compareAt: 25.99, cost: 7.0,
    badge: "TikTok Famous",
    image: "assets/img/hair-roller.svg",
    rating: null, ratingCount: null,
    short: "Rolls fur off sofas and car seats — no refills, empties with one click.",
    description: "Roll back and forth over fabric and the chamber traps the hair; open the lid, dump it out, done. Nothing to replace, ever.",
    bullets: ["100% reusable — no sticky refills", "Works on sofas, beds, car seats, clothes", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "snuffle-mat",
    name: "Interactive Snuffle Mat",
    category: "Play",
    price: 24.99, compareAt: 34.99, cost: 9.0,
    badge: "High Margin",
    image: "assets/img/snuffle-mat.svg",
    rating: null, ratingCount: null,
    short: "Hides treats in fleece folds — 15 minutes of sniffing tires a dog like an hour of walking.",
    description: "Scatter kibble into the fleece folds and let your dog forage. Nosework is deeply tiring for dogs — trainers use snuffle mats to calm anxious and high-energy pups.",
    bullets: ["Great for anxious or high-energy dogs", "Machine washable, non-slip backing", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
  {
    id: "cat-teaser",
    name: "Feather Wand Cat Teaser Set",
    category: "Play",
    price: 11.99, compareAt: 15.99, cost: 4.0,
    badge: "",
    image: "assets/img/cat-teaser.svg",
    rating: null, ratingCount: null,
    short: "Telescoping wand + 5 swap-on feather lures. Indoor cats' favorite cardio.",
    description: "Extends to 39 inches so you can play from the couch. Five interchangeable lures (feathers, worm, fish) keep the hunt fresh — rotation is the secret to a cat that never gets bored of it.",
    bullets: ["Telescopes from 15 to 39 inches", "5 replaceable lures included", "Free US shipping, 7–12 day delivery"],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK",
  },
];
