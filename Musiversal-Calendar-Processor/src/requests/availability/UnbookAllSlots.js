const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');

router.patch('/unbook-all-slots', async (req, res) => {
    try {
        // Find all slots that are booked and not during lunch hour
        const slotsToUpdate = await AvailabilitySlot.find({ is_booked: true, start_time: { $not: { $gte: "13:00", $lt: "14:00" } } });

        // Update each slot to set is_booked to false
        await Promise.all(slotsToUpdate.map(async (slot) => {
            slot.is_booked = false;
            await slot.save();
        }));

        res.status(200).json({ message: 'Successfully unbooked slots' });
    } catch (error) {
        console.error('Error unbooking slots:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
