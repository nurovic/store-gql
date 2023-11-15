const OrderCard = {
  orderCardUpdate: async (_, { productId, orderInput }, {db}) => {
    const orderCardDB = db.OrderCardDB;
    const changeAmount = orderInput.count ? 1 : -1;
    const reqObj = { $inc: { orderCount: changeAmount } };
    const query = { _id: productId };
    const updateFields = reqObj;
    const options = { returnOriginal: false };
    const product = await orderCardDB.findOneAndUpdate(
      query,
      updateFields,
      options
    );
    return {
      userErrors: [],
      product,
    };
  },
  createOrderCard: async (_, { createOrderCardInput }, { db, userInfo }) => {
    try {
      const OrderCardDB = db.OrderCardDB;
      const { product } = createOrderCardInput;

      if (!product) {
        return {
          userErrors: [
            {
              message: "No Product ID!",
            },
          ],
          product: null,
        };
      }
      console.log(product, " ID PASDk");
      const checkOrderList = await OrderCardDB.findOne({
        _id: product,
        userId: userInfo.userId,
      });

      if (checkOrderList == null) {
        const createOrderCard = await OrderCardDB.create({
          product,
          userId: userInfo.userId,
          orderCount: 0,
        });
        return {
          userErrors: [
            {
              message: "Product Added To Order Card",
            },
          ],
          product: createOrderCard.product,
        };
      } else {
        const updated = await OrderCard.orderCardUpdate(
          _,
          { productId: product, orderInput: true },
          db
        );
        return {
          userErrors: [
            {
              message: "Product Added To Order Card.",
            },
          ],
          product: updated.product.product,
        };
      }
    } catch (error) {
      console.log("Create Order Card:", error);
    }
  },

  deleteOrderCardProduct: async (
    parent,
    { deleteOrderCardInput },
    { db, userInfo }
  ) => {
    try {
      const orderCard = db.OrderCardDB;
      const { orderCardId } = deleteOrderCardInput;
      const res = await orderCard.deleteOne({ _id: orderCardId });
      return {
        userErrors: [{ message: "Order Card Deleted" }],
      };
    } catch (error) {
      console.log("Delete Order Card Product:", error);
    }
  },
};

module.exports = OrderCard;
