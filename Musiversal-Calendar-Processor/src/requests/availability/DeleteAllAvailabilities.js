const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');

router.delete('/', async (req, res) => {
    try {
        await AvailabilitySlot.deleteMany();
        res.status(200).json({ message: 'All time slots deleted successfully' });
    } catch (error) {
        console.error('Error deleting all availabilities:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
