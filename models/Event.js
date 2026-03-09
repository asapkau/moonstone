// ─── Event Model ───
//
// Fields to implement:
// - title: String, required (e.g., "New Moon Healing Circle")
// - slug: String, unique
// - description: String
// - type: String, enum ['workshop', 'circle', 'retreat', 'ceremony']
// - date: Date, required
// - endDate: Date (for multi-day retreats)
// - time: String (e.g., "7:00 PM - 9:00 PM")
// - location: String
// - capacity: Number
// - spotsRemaining: Number
// - price: Number (in cents, 0 for free events)
// - image: String
// - featured: Boolean, default false
// - active: Boolean, default true
// - createdAt: Date
//
// Indexes:
// - date
// - type
// - active
