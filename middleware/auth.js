// ─── Auth Middleware ───
//
// auth:
// - Extract JWT from Authorization header (Bearer <token>)
// - Verify token with JWT_SECRET
// - Attach user to req.user
// - Return 401 if invalid/missing
//
// adminOnly:
// - Check req.user.role === 'admin'
// - Return 403 if not admin
// - Must be used AFTER auth middleware
