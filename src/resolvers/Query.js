const UserDB = require("../models/userModel");
const ProductDB = require("../models/productModel");
const jwt = require("jsonwebtoken");

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
  getMe: async (parent, _, context) => {
    const res = await context.db.UserDB.findById(
      context.userInfo.userId
    ).select("-password");
    return res;
  },
};

module.exports = { Query };
