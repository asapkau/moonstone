// ─── Contact Routes ───
// Mount at: /api/contact
//
// POST   /api/contact   — Submit contact form (public, rate-limited)
//   Body: { name, email, subject, message }
//   Action: Send email to admin, send confirmation to sender
//
// Rate limit: 3 requests per IP per hour
// Validation: all fields required, valid email
