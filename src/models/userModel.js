const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
  {
    name: String,
    email: String,
    password: String 
    },
  { versionKey: false }
);
module.exports = Mongoose.model("User", UserSchema);
