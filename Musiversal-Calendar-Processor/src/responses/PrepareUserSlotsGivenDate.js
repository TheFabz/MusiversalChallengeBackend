const express = require('express');
const router = express.Router();
const User = require('../models/User');
const AvailabilitySlot = require('../models/AvailabilitySlot');

router.post('/', async (req, res) => {
    const { userId, date } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);

        const availabilitySlots = await AvailabilitySlot.find({
            user_id: userId,
            start_time: { $gte: startDate, $lt: endDate },
        });

        const response = {
            user: {
                name: user.name,
                email: user.email,
            },
            availableSlots: availabilitySlots.map(slot => ({
                start_time: slot.start_time,
                end_time: slot.end_time,
                is_booked: slot.is_booked
            }))
        };

        res.json(response);
    } catch (error) {
        console.error('Error building response:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
