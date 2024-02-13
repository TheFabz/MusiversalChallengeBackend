const mongoose = require('mongoose');

const availabilitySlotSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    start_time: Date,
    end_time: Date,
    is_booked: Boolean,
});

const AvailabilitySlot = mongoose.model('AvailabilitySlot', availabilitySlotSchema);

module.exports = AvailabilitySlot;
