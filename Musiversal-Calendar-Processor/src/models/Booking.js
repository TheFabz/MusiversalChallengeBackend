const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: String,
    customerEmail: String,
    bookedDate: Date,
    musicianId: String,
    requestedServices: [String],
});

const Booking = mongoose.model('Booking', bookingSchema);

Booking.createNewBooking = async function(bookingData) {
    try {
        const newBooking = await this.create(bookingData);
        return newBooking;
    } catch (error) {
        throw error;
    }
};

module.exports = Booking;
