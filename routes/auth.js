// ─── Auth Routes ───
// Mount at: /api/auth
//
// POST /api/auth/register   — Create new user account
// POST /api/auth/login      — Login, return JWT
// GET  /api/auth/me         — Get current user (protected)
// PUT  /api/auth/me         — Update profile (protected)
//
// Middleware needed: auth (JWT verification)
// Validation: express-validator on register/login inputs
