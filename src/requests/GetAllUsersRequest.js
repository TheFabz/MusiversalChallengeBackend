const express = require('express');
const router = express.Router();
const Musician = require('../models/User');

router.get('/', async (req, res, next) => {
    console.log("getting musicians");
    try {
        const musicians = await Musician.find();
        res.json(musicians);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
