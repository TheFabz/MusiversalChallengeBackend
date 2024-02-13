const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Booking = require('../../models/Booking');

router.post('/', async (req, res) => {
    const { musicianId } = req.body;
    try {
        // Find the musician by ID
        const musician = await User.findById(musicianId);
        if (!musician) {
            return res.status(404).json({ message: 'Musician not found' });
        }
        
        // Find all bookings related to the musician
        const bookings = await Booking.find({ musicianId });
        
        res.json({ musician, bookings });
    } catch (error) {
        console.error('Error fetching bookings for musician:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
