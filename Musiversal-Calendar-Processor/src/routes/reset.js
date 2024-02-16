const express = require('express');
const router = express.Router();
const reset = require('../requests/resetCollections');

router.use('/reset', reset);

module.exports = router;
