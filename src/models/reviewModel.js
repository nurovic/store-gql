const Mongoose = require("mongoose");

const ReviewSchema = new Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: { maxDepth: 2 },
    },
    productId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Product",
      autopopulate: { maxDepth: 2 },
    },
    comment: String 
    },
  { versionKey: false }
);

ReviewSchema.plugin(require("mongoose-autopopulate"));

module.exports = Mongoose.model("Review", ReviewSchema);
