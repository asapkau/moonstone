// ─── User Model ───
//
// Fields to implement:
// - name: String, required
// - email: String, required, unique, lowercase
// - password: String, required (hash with bcryptjs pre-save)
// - role: String, enum ['customer', 'admin'], default 'customer'
// - createdAt: Date, default now
//
// Methods to implement:
// - comparePassword(candidatePassword) — bcrypt compare
// - generateAuthToken() — sign JWT with user id and role
//
// Indexes:
// - email (unique)
