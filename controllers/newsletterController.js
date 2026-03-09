// ─── Newsletter Controller ───
//
// subscribe(req, res):
//   - Validate email
//   - Check if already subscribed (and active)
//   - Create subscriber or reactivate if previously unsubscribed
//   - Send welcome email
//
// unsubscribe(req, res):
//   - Find by email
//   - Set active: false, unsubscribedAt: now
//
// getSubscribers(req, res):
//   - Admin only
//   - Return all active subscribers
//   - Support CSV export (optional)
