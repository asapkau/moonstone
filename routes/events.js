// ─── Event Routes ───
// Mount at: /api/events
//
// GET    /api/events                — List upcoming events (public)
// GET    /api/events/:slug          — Get single event (public)
// POST   /api/events                — Create event (admin only)
// PUT    /api/events/:id            — Update event (admin only)
// DELETE /api/events/:id            — Delete event (admin only)
// POST   /api/events/:id/register   — Register for an event (protected, decrements spotsRemaining)
//
// Middleware needed: auth, adminOnly
