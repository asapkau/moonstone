const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ───
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Serve frontend ───
app.use(express.static(path.join(__dirname, 'public')));

// ─── API routes (mount these as you build them) ───
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/crystals', require('./routes/crystals'));
// app.use('/api/bookings', require('./routes/bookings'));
// app.use('/api/events', require('./routes/events'));
// app.use('/api/orders', require('./routes/orders'));
// app.use('/api/newsletter', require('./routes/newsletter'));
// app.use('/api/contact', require('./routes/contact'));

// ─── Fallback to frontend ───
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ─── Start ───
app.listen(PORT, () => {
	console.log(`✦ Moonstone running at http://localhost:${PORT}`);
});
