const Mongoose = require("mongoose");

const OrderCardSchema = new Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: { maxDepth: 2 },
    },
    product: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Product",
      autopopulate: { maxDepth: 2 },
    },
    orderCount: Number
  },
  { versionKey: false }
);

OrderCardSchema.plugin(require("mongoose-autopopulate"));

module.exports = Mongoose.model("OrderCard", OrderCardSchema);
