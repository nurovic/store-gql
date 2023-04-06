const Mongoose = require("mongoose");

const ProductSchema = new Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: { maxDepth: 2 },
    },
    productName: String,
    description: String,
    price: Number,
    count: Number,
    // Sale Booelan
    reviewId: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: { maxDepth: 2 },
      },
    ],
  },
  { versionKey: false }
);
ProductSchema.plugin(require("mongoose-autopopulate"));

module.exports = Mongoose.model("Product", ProductSchema);
