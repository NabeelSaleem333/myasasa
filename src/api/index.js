const express = require('express');
//
const userRouter = require('./resources/users/user.router');
//
const restRouter = express.Router();
// REST Full API's Calls
restRouter.use('/users', userRouter);
//
module.exports = restRouter;