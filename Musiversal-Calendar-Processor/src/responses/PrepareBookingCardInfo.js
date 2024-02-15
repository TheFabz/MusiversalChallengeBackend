const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const User = require('../models/User');
const Availability = require('../models/AvailabilitySlot');

router.post('/', async (req, res) => {
    try {
        const currentDate = new Date().toISOString().split('T')[0];
        const bookings = await Booking.find({ bookedDate: { $gte: currentDate } });

        const musicianIds = Array.from(new Set(bookings.map(booking => booking.musicianId)));
        const availabilityIds = Array.from(new Set(bookings.map(booking => booking.availabilityId)));

        const musiciansInfo = await Promise.all(musicianIds.map(async (musicianId) => {
            const user = await User.findById(musicianId);
            return {
                userId: musicianId,
                name: user.name,
                imageUrl: user.imageUrl
            };
        }));

        const availabilitiesInfo = await Promise.all(availabilityIds.map(async (availabilityId) => {
            const availability = await Availability.findById(availabilityId);
            return {
                availabilityId: availabilityId,
                startTime: availability.start_time
            };
        }));

        const bookingsWithAdditionalInfo = bookings.map(booking => {
            const musicianInfo = musiciansInfo.find(info => info.userId === booking.musicianId);
            const availabilityInfo = availabilitiesInfo.find(info => info.availabilityId === booking.availabilityId);
            return {
                bookingInfo: booking,
                musicianInfo: musicianInfo,
                availabilityInfo: availabilityInfo
            };
        });

        res.json({ bookings: bookingsWithAdditionalInfo });
    } catch (error) {
        console.error('Error building response:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
