const express = require('express');
const router = express.Router();
const deleteAllAvailabilitiesRouter = require('../requests/availability/DeleteAllAvailabilities');
const deleteAllUserAvailabilitiesRouter = require('../requests/availability/DeleteAllUserAvailabilities');
const generateAvailabilitySlotsGivenUserIdRouter = require('../requests/availability/GenerateOneWeekAvailabilitiesGivenUserId');
const prepareUserSoltsGivenIdAndDate = require('../responses/PrepareUserSlotsGivenDate');

router.use('/delete-all', deleteAllAvailabilitiesRouter);
router.use('/delete-user-slots', deleteAllUserAvailabilitiesRouter);
router.use('/generate-week-slots', generateAvailabilitySlotsGivenUserIdRouter);
router.use('/get-musician-slots', prepareUserSoltsGivenIdAndDate);

module.exports = router;
