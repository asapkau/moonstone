// ─── Order Controller ───
//
// getUserOrders(req, res):
//   - Return orders for req.user, sorted by createdAt desc
//   - Populate crystal details in items
//
// getOrderById(req, res):
//   - Verify ownership (req.user matches order.user)
//   - Return full order with populated items
//
// create(req, res):
//   - Validate items (check crystal exists, has stock)
//   - Calculate total from current prices (don't trust client-sent prices)
//   - Create Stripe payment intent
//   - Create order with status 'pending'
//   - Return order + Stripe client secret
//
// stripeWebhook(req, res):
//   - Verify Stripe signature
//   - Handle payment_intent.succeeded → update order to 'paid', decrement stock
//   - Handle payment_intent.failed → update order to 'cancelled'
//   - Send order confirmation email on success
//
// adminGetAll(req, res):
//   - Return all orders with filters (status, date range)
//
// adminUpdateStatus(req, res):
//   - Update status + optional tracking number
//   - Send shipping notification email if status → 'shipped'
