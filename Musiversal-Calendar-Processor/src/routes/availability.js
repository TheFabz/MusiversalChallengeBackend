const express = require('express');
const router = express.Router();
const deleteAllAvailabilitiesRouter = require('../requests/availability/deleteAllAvailabilities');
const deleteAllUserAvailabilitiesRouter = require('../requests/availability/deleteAllUserAvailabilities');
const generateAvailabilitySlotsGivenUserIdRouter = require('../requests/availability/generateOneWeekAvailabilitiesGivenUserId');
const generateAvailabilitySlotsAllUsersRouter = require('../requests/availability/generateOneWeekAvailabilitiesAllUsers');
const unbookAllSlots = require('../requests/availability/unbookAllSlots');
const prepareUserSoltsGivenIdAndDate = require('../responses/prepareUserSlotsGivenDate');

router.use('/delete-all', deleteAllAvailabilitiesRouter);
router.use('/delete-user-slots', deleteAllUserAvailabilitiesRouter);
router.use('/generate-week-slots', generateAvailabilitySlotsGivenUserIdRouter);
router.use('/generate-week-slots-all-users', generateAvailabilitySlotsAllUsersRouter);
router.use('/unbook-all', unbookAllSlots);
router.use('/get-musician-slots', prepareUserSoltsGivenIdAndDate);

module.exports = router;
