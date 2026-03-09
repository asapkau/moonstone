// ─── Contact Controller ───
//
// submit(req, res):
//   - Validate: name, email, subject, message (all required)
//   - Send email to admin (EMAIL_FROM) with contact details
//   - Send auto-reply to sender confirming receipt
//   - Return success message
//   - NOTE: no database storage needed, email-only
