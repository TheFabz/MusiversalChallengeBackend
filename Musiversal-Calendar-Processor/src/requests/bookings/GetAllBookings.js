const express = require('express');
const router = express.Router();
const Booking = require('../../models/Booking');

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        console.error('Error fetching all bookings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
