
const express = require('express');
const router = express.Router();
const createNewBooking = require('../requests/bookings/CreateNewBooking');
const getAllBookings = require('../requests/bookings/GetAllBookings');
const deleteAllBookings = require('../requests/bookings/DeleteAllBookings');
const deleteBookingGivenId = require('../requests/bookings/DeleteBookingGivenId');
const GetAllBookingsForGivenMusician = require('../requests/bookings/GetAllBookingsForGivenMusician');

router.use('/create', createNewBooking);
router.use('/get-all', getAllBookings);
router.use('/delete-all', deleteAllBookings);
router.use('/delete-booking-given-id', deleteBookingGivenId);
router.use('/get-all-musician-bookings', GetAllBookingsForGivenMusician);

module.exports = router;
