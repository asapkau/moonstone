// ─── Booking Controller ───
//
// getUserBookings(req, res):
//   - Return all bookings for req.user
//   - Populate event details if applicable
//
// getAvailableSlots(req, res):
//   - Query params: service, date
//   - Return available time slots (exclude already booked)
//
// create(req, res):
//   - Validate service, date, timeSlot
//   - Check slot availability
//   - Create Stripe payment intent
//   - Create booking with status 'pending'
//   - Send confirmation email
//   - Return booking + client secret for Stripe
//
// cancel(req, res):
//   - Verify ownership (req.user matches booking.user)
//   - Update status to 'cancelled'
//   - Trigger Stripe refund if paid
//   - Send cancellation email
//
// adminGetAll(req, res):
//   - Return all bookings with filters (status, date range, service)
//
// adminUpdateStatus(req, res):
//   - Update booking status
