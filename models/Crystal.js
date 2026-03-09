// ─── Crystal Model ───
//
// Fields to implement:
// - name: String, required (e.g., "Amethyst Cluster")
// - slug: String, unique, lowercase (auto-generate from name)
// - description: String
// - properties: [String] (e.g., ["inner peace", "clarity", "protection"])
// - price: Number, required (in cents for Stripe compatibility)
// - comparePrice: Number (original price for sale display)
// - images: [String] (file paths or URLs)
// - category: String, enum ['raw', 'tumbled', 'jewelry', 'bundle', 'tool']
// - stock: Number, default 0
// - featured: Boolean, default false
// - active: Boolean, default true
// - createdAt: Date
//
// Indexes:
// - slug (unique)
// - category
// - featured
