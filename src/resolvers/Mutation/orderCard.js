const OrderCard = {
  createOrderCard: async (
    parent,
    { createOrderCardInput },
    { db, userInfo }
  ) => {
    try {
      const OrderCardDB = db.OrderCardDB;
      const { productId } = createOrderCardInput;

      if (!productId) {
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
        productId,
        userId: userInfo.userId,
      });
      return {
        userErrors: [
          {
            message: "Product Added To Order Card",
          },
        ],
        product: resOrderCard.productId,
      };
    } catch (error) {
      console.log("Create Order Card:", error);
    }
  },
};

module.exports = OrderCard;
