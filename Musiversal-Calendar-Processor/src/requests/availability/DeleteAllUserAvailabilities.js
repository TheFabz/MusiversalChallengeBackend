const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');

router.delete('/', async (req, res) => {
    const userId = req.body.userId;
    try {
        await AvailabilitySlot.deleteMany({ user_id: userId });
        res.status(201).json({ message: 'All availabilities deleted successfully' });
    } catch (error) {
        console.error('Error deleting user availabilities:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
