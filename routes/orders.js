// ─── Order Routes ───
// Mount at: /api/orders
//
// GET    /api/orders                — List user's orders (protected)
// GET    /api/orders/:id            — Get order detail (protected, own orders only)
// POST   /api/orders                — Create order + Stripe payment intent (protected)
// POST   /api/orders/webhook        — Stripe webhook handler (raw body, verify signature)
// GET    /api/orders/admin          — List all orders (admin only)
// PUT    /api/orders/:id/status     — Update order status/tracking (admin only)
//
// Middleware needed: auth, adminOnly
// NOTE: Webhook route needs express.raw() body parser, not json
