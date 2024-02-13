const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.delete('/', async (req, res) => {
    try {
        await User.deleteMany();
        res.status(200).json({ message: 'All users deleted successfully' });
    } catch (error) {
        console.error('Error deleting users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
