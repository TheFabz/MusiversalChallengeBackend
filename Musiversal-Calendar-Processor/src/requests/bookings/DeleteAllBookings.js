const express = require('express');
const router = express.Router();
const Booking = require('../../models/Booking');

router.delete('/', async (req, res) => {
    try {
        await Booking.deleteMany();
        res.json({ message: 'All bookings deleted successfully' });
    } catch (error) {
        console.error('Error deleting all bookings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
