// ─── Booking Model ───
//
// Fields to implement:
// - user: ObjectId ref 'User', required
// - service: String, enum ['tarot_reading', 'healing_workshop', 'inclusive_circle', 'conflict_resolution', 'leadership_retreat']
// - event: ObjectId ref 'Event' (optional — if tied to a specific event)
// - date: Date, required
// - timeSlot: String (e.g., "10:00 AM - 11:00 AM")
// - status: String, enum ['pending', 'confirmed', 'cancelled', 'completed'], default 'pending'
// - paymentIntentId: String (Stripe payment intent)
// - amount: Number (in cents)
// - notes: String (customer notes / questions)
// - createdAt: Date
//
// Indexes:
// - user
// - date
// - status
