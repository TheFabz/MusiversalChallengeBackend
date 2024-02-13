const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');

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
                startTime.setHours(hour, 0, 0); // Reset minutes and seconds to 0
                const endTime = new Date(startTime);
                endTime.setHours(startTime.getHours() + 1);

                const isLunchHour = hour === 13; // Lunch hour from 1pm to 2pm
                const isBusy = isLunchHour || (Math.random() < 0.2 && !isLunchHour); // 20% chance of being busy for non-lunch slots

                availabilities.push({
                    user_id: userId,
                    start_time: startTime,
                    end_time: endTime,
                    is_booked: isBusy
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
