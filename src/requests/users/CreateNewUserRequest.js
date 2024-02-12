const express = require('express');
const router = express.Router();
const Musician = require('../../models/User');

router.post('/', async (req, res, next) => {
    try {
        const newMusician = await Musician.create(req.body);
        res.status(201).json(newMusician);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
