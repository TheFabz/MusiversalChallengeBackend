const express = require('express');
const router = express.Router();
const Booking = require('../../models/Booking');

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json({ message: 'Booking deleted successfully', booking: deletedBooking });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
