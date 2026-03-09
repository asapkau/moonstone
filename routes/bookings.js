// ─── Booking Routes ───
// Mount at: /api/bookings
//
// GET    /api/bookings              — List user's bookings (protected)
// GET    /api/bookings/available    — Get available time slots for a service/date
// POST   /api/bookings              — Create a booking (protected)
// PUT    /api/bookings/:id/cancel   — Cancel a booking (protected)
// GET    /api/bookings/admin        — List all bookings (admin only)
// PUT    /api/bookings/:id/status   — Update booking status (admin only)
//
// Middleware needed: auth, adminOnly
// Integration: Stripe for payment, email for confirmation
