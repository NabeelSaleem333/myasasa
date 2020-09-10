const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//

const userSchema = new Schema({
  userId: { type: String, required: true },
  fullname: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  access: { type: String, required: true },
  status: { type: String, required: true },
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
