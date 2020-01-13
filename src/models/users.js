var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
  firstName: { type: "string", required: [true, "User firstname is required"] },
  lastName: { type: "string", required: [true, "User firstname is required"] },
  email: { type: "string", required: [true, "Email is required"] }
});

var UserModel = mongoose.model("User", user);
