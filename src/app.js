const express = require('express');
const {connect} = require('../config/dbcon');
const {setGlobalMiddlewares} = require('./api/middlewares/global-middlewares');
const restRouter = require('./api/index');
const devConfig = require('../config/process');
////
var app = express();
// Create Connection with Mongodb
connect();

// set all global middlwares
setGlobalMiddlewares(app);
// RESTFUll API calls
app.use('/api',restRouter);
// myasasa server listening at
app.listen(devConfig.PORT, () =>{
console.log(`my-asasa is running at http://localhost:${devConfig.PORT}`);
});