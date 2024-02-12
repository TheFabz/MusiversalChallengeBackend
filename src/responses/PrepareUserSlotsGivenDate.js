const User = require('../models/User');
const AvailabilitySlot = require('../models/AvailabilitySlot');
async function buildResponse(userId, date) {
    try {
        const user = await User.findById(userId);
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
        const availabilitySlots = await AvailabilitySlot.find({
            user_id: userId,
            start_time: { $gte: startDate, $lt: endDate },
            is_booked: false
        });
        const response = {
            user: {
                name: user.name,
                email: user.email,
            },
            availableSlots: availabilitySlots.map(slot => ({
                start_time: slot.start_time,
                end_time: slot.end_time
            }))
        };
        return response;
    } catch (error) {
        console.error('Error building response:', error);
        throw new Error('Failed to build response');
    }
}

module.exports = { buildResponse };
