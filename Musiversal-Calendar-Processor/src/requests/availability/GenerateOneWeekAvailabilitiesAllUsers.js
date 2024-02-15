const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');
const User = require('../../models/User');

router.post('/', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find({}, '_id');

        const today = new Date();
        const weekdays = [1, 2, 3, 4, 5];

        const availabilities = [];

        // Generate availabilities for each user
        for (const user of users) {
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
                        user_id: user._id,
                        start_time: startTime,
                        end_time: endTime,
                        is_booked: isBusy
                    });
                }
            });
        }

        // Insert all generated availabilities into the database
        await AvailabilitySlot.insertMany(availabilities);

        res.status(201).json({ message: 'Availabilities generated successfully for all users' });
    } catch (error) {
        console.error('Error generating availabilities for all users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
