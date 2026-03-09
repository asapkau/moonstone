// ─── Event Controller ───
//
// getUpcoming(req, res):
//   - Return active events where date >= now
//   - Optional filter by type
//   - Sort by date ascending
//
// getBySlug(req, res):
//   - Find event by slug, return 404 if not found
//
// create(req, res):
//   - Admin only
//   - Set spotsRemaining = capacity on creation
//   - Auto-generate slug from title
//
// update(req, res):
//   - Admin only
//
// remove(req, res):
//   - Admin only
//   - Consider: what happens to existing registrations?
//
// register(req, res):
//   - Check spotsRemaining > 0
//   - Decrement spotsRemaining
//   - Create a Booking linked to this event
//   - Send confirmation email
