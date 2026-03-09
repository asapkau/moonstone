// ─── Order Model ───
//
// Fields to implement:
// - user: ObjectId ref 'User', required
// - items: [{
//     crystal: ObjectId ref 'Crystal',
//     quantity: Number,
//     price: Number (snapshot at time of purchase)
//   }]
// - totalAmount: Number (in cents)
// - paymentIntentId: String (Stripe)
// - status: String, enum ['pending', 'paid', 'shipped', 'delivered', 'cancelled'], default 'pending'
// - shippingAddress: {
//     street: String,
//     city: String,
//     province: String,
//     postalCode: String,
//     country: String
//   }
// - trackingNumber: String
// - createdAt: Date
//
// Indexes:
// - user
// - status
// - createdAt
