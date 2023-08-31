const Mongoose = require("mongoose");

const OrderCardSchema = new Mongoose.Schema(
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
  },
  { versionKey: false }
);

OrderCardSchema.plugin(require("mongoose-autopopulate"));

module.exports = Mongoose.model("OrderCard", OrderCardSchema);
