// ─── Crystal Routes ───
// Mount at: /api/crystals
//
// GET    /api/crystals              — List all (with filters: category, featured, price range)
// GET    /api/crystals/:slug        — Get single crystal by slug
// POST   /api/crystals              — Create crystal (admin only)
// PUT    /api/crystals/:id          — Update crystal (admin only)
// DELETE /api/crystals/:id          — Soft delete crystal (admin only)
//
// Middleware needed: auth, adminOnly
// File upload: multer for crystal images (POST/PUT)
