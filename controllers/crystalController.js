// ─── Crystal Controller ───
//
// getAll(req, res):
//   - Query with optional filters: category, featured, price range
//   - Pagination: page, limit query params
//   - Sort: by price, name, or createdAt
//   - Return crystals + pagination meta
//
// getBySlug(req, res):
//   - Find crystal by slug
//   - Return 404 if not found
//
// create(req, res):
//   - Admin only
//   - Handle image upload via multer
//   - Auto-generate slug from name
//   - Return created crystal
//
// update(req, res):
//   - Admin only
//   - Handle image replacement
//   - Return updated crystal
//
// remove(req, res):
//   - Admin only
//   - Soft delete (set active: false)
