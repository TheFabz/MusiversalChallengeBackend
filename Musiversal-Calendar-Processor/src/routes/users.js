const express = require('express');
const router = express.Router();
const getAllUsersRouter = require('../requests/users/GetAllUsersRequest');
const createNewUserRouter = require('../requests/users/CreateNewUserRequest');
const deleteAllUsersRouter = require('../requests/users/DeleteAllUsersRequest');
const generateSampleMusiciansRouter = require('../requests/users/GenerateSampleMusiciansRequest');

router.use('/get-all', getAllUsersRouter);
router.use('/create', createNewUserRouter);
router.use('/delete-all', deleteAllUsersRouter);
router.use('/generate-sample-musicians', generateSampleMusiciansRouter);

module.exports = router;
