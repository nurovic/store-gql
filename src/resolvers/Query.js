const UserDB = require("../models/userModel");
const ProductDB = require("../models/productModel");

const Query = {
  users: async () => {
    const users = await UserDB.find({});
    return users;
  },
  // userById: async (_, {id}) => {
  //     const user = await UserDB.findById(id)
  //     return user
  // },
  productById: async (_, { id }) => {
    const product = await ProductDB.findById(id);
    return product;
  },
  products: async () => {
    const products = await ProductDB.find();
    return products;
  },
  ownProducts: async (_, { id }, { userInfo }) => {
    const products = await ProductDB.find({ userId: userInfo.userId });
    return products;
  },
  getMe: async (parent, _, context) => {
    const res = await context.db.UserDB.findById(
      context.userInfo.userId
    ).select("-password");
    return res;
  },
  getOrderCard: async (parent, _, { db, userInfo }) => {
    try {
      const orderCard = db.OrderCardDB;

      const product = await orderCard.find({ userId: userInfo.userId });
      // const resFilter = res.filter((obj) => obj.productId );
      // const resFilterId = res.filter((obj) => obj._id);
      // const amount = resFilter.reduce((acc, val) => {
      //   return acc + val.price;
      // }, 0);
      return product ;
    } catch (error) {
      console.log("get Order Card:", error);
    }
  },
};

module.exports = { Query };
