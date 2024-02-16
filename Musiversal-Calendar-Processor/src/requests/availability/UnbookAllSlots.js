const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');

router.patch('/', async (req, res) => {
    try {
        await AvailabilitySlot.updateMany({ is_booked: true }, { $set: { is_booked: false } });
        res.status(200).json({ message: 'All slots unbooked successfully' });
    } catch (error) {
        console.error('Error unbooking all slots:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
