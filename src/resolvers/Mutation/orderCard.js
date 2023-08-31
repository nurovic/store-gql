const OrderCard = {
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
      const resOrderCard = await OrderCardDB.create({
        product,
        userId: userInfo.userId,
      });
      return {
        userErrors: [
          {
            message: "Product Added To Order Card",
          },
        ],
        product: resOrderCard.product,
      };
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
      const res = await orderCard.deleteOne({_id: orderCardId});
      return {
        userErrors: [
          {message: "Order Card Deleted"}
        ]
      }
    } catch (error) {
      console.log("Delete Order Card Product:", error);
    }
  },
};

module.exports = OrderCard;
