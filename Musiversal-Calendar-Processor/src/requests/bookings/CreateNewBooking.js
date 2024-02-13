const express = require('express');
const router = express.Router();
const AvailabilitySlot = require('../../models/AvailabilitySlot');
const Booking = require('../../models/Booking');

router.post('/', async (req, res) => {
    try {
        const { customerName, customerEmail, bookedDate, musicianId, availabilityId, requestedServices } = req.body;
        
        if (!customerName || !customerEmail || !bookedDate || !musicianId || !availabilityId || !requestedServices) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const currentDate = new Date();
        const selectedDate = new Date(bookedDate);

        if (selectedDate >= currentDate) {
            return res.status(400).json({ message: 'That slot is no longer available' });
        }

        const availabilitySlot = await AvailabilitySlot.findById(availabilityId);
        if (!availabilitySlot) {
            return res.status(404).json({ message: 'Availability slot not found' });
        }

        if (availabilitySlot.is_booked) {
            return res.status(400).json({ message: 'Slot cannot be booked' });
        }

        if (String(availabilitySlot.user_id) !== musicianId) {
            console.log("availabilitySlot.user_id: " + availabilitySlot.user_id );
            console.log("musicianId: " + musicianId );
            console.log(String(musicianId) === String(availabilitySlot.user_id));
        
            return res.status(403).json({ message: 'This action is not permitted by admin' });
        }

        availabilitySlot.is_booked = true;
        await availabilitySlot.save();

        const bookingData = {
            customerName,
            customerEmail,
            bookedDate,
            musicianId,
            availabilityId,
            requestedServices,
        };

        const newBooking = await Booking.createNewBooking(bookingData);

        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;