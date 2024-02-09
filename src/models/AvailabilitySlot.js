const mongoose = require('mongoose');

const availabilitySlotSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    start_time: Date,
    end_time: Date,
    is_booked: Boolean,
    // Add other availability slot fields as needed
});

const AvailabilitySlot = mongoose.model('AvailabilitySlot', availabilitySlotSchema);

module.exports = AvailabilitySlot;
