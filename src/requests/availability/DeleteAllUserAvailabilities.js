const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../models/AvailabilitySlot');

router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        await AvailabilitySlot.deleteMany({ user_id: userId }); // Delete availabilities for the given user ID
        res.status(204).send(); // No content response
    } catch (error) {
        console.error('Error deleting user availabilities:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
