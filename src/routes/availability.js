const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all availability');
});

router.post('/', (req, res) => {
    res.send('Create a new availability slot');
});

module.exports = router;
