const express = require('express');
const router = express.Router();
const getAllUsersRouter = require('../requests/users/getAllUsersRequest');
const createNewUserRouter = require('../requests/users/createNewUserRequest');
const deleteAllUsersRouter = require('../requests/users/deleteAllUsersRequest');
const generateSampleMusiciansRouter = require('../requests/users/generateSampleMusiciansRequest');

router.use('/get-all', getAllUsersRouter);
router.use('/create', createNewUserRouter);
router.use('/delete-all', deleteAllUsersRouter);
router.use('/generate-sample-musicians', generateSampleMusiciansRouter);

module.exports = router;
