// ─── Auth Controller ───
//
// register(req, res):
//   - Validate input (name, email, password)
//   - Check if email already exists
//   - Create user (password hashed via model pre-save hook)
//   - Return JWT token
//
// login(req, res):
//   - Validate input (email, password)
//   - Find user by email
//   - Compare password
//   - Return JWT token
//
// getMe(req, res):
//   - Return req.user (populated by auth middleware)
//
// updateMe(req, res):
//   - Update name/email (not password here)
//   - Return updated user
