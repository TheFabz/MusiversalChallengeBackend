const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../models/AvailabilitySlot');

router.post('/', async (req, res) => {
    try {
        const { userId } = req.body;
        const today = new Date();
        const weekdays = [1, 2, 3, 4, 5];

        const availabilities = [];

        weekdays.forEach((weekday) => {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + (weekday - 1));

            for (let hour = 9; hour < 18; hour++) {
                const startTime = new Date(currentDate);
                startTime.setHours(hour);
                const endTime = new Date(startTime);
                endTime.setHours(startTime.getHours() + 1);

                 // Check if it's lunchtime (1pm to 2pm)
                const isBusy = hour === 13;

                availabilities.push({
                    user_id: userId,
                    start_time: startTime,
                    end_time: endTime,
                    is_booked: isBusy ? true : false
                });
            }
        });

        await AvailabilitySlot.insertMany(availabilities);

        res.status(201).json({ message: 'Availabilities generated successfully' });
    } catch (error) {
        console.error('Error generating availabilities:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
