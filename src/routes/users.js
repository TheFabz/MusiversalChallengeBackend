const express = require('express');
const router = express.Router();
const getAllUsersRouter = require('../requests/GetAllUsersRequest');
const createNewUserRouter = require('../requests/CreateNewUserRequest');

router.use('/get-all', getAllUsersRouter);
router.use('/create', createNewUserRouter);

module.exports = router;
