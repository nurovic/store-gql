const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema(
  {
    name: String,
  },
  { versionKey: false }
);
module.exports = Mongoose.model("User", UserSchema);
