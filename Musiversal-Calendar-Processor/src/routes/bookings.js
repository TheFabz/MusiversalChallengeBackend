
const express = require('express');
const router = express.Router();
const createNewBooking = require('../requests/bookings/createNewBooking');
const getAllBookings = require('../requests/bookings/getAllBookings');
const deleteAllBookings = require('../requests/bookings/deleteAllBookings');
const deleteBookingGivenId = require('../requests/bookings/deleteBookingGivenId');
const GetAllBookingsForGivenMusician = require('../requests/bookings/getAllBookingsForGivenMusician');
const prepareRelevantBookingInfo = require('../responses/prepareBookingCardInfo');


router.use('/create', createNewBooking);
router.use('/get-all', getAllBookings);
router.use('/delete-all', deleteAllBookings);
router.use('/delete-booking-given-id', deleteBookingGivenId);
router.use('/get-all-musician-bookings', GetAllBookingsForGivenMusician);
router.use('/get-prepared-bookings', prepareRelevantBookingInfo);

module.exports = router;
