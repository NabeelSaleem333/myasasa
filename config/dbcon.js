const mongoose = require("mongoose");
const devConfig = require("./process");
/* 
A function to connect with the mongodb
*/
exports.connect = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(devConfig.MongoCon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
