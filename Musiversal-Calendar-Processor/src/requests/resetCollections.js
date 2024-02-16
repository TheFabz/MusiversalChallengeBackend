const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Booking = require('../models/Booking');
const AvailabilitySlot = require('../models/AvailabilitySlot');

router.post('/', async (req, res) => {
    try {
        await User.deleteMany({});
        await Booking.deleteMany({});
        await AvailabilitySlot.deleteMany({});

        res.json({ message: 'Application reset successfully' });
    } catch (error) {
        console.error('Error resetting application:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
