// ─── Error Handler Middleware ───
//
// Global error handler — mount as last middleware in server.js
//
// TODO:
// - Catch all errors passed via next(err)
// - Format consistent error response: { success: false, error: message }
// - In development: include stack trace
// - In production: generic message for 500s
// - Handle specific cases: ValidationError, CastError, duplicate key (11000)
