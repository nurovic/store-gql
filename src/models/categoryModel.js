const Mongoose = require("mongoose");

const CategorySchema = new Mongoose.Schema(
  {
    categoryTitle: String,
  },
  { versionKey: false }
);
module.exports = Mongoose.model("Category", CategorySchema);
