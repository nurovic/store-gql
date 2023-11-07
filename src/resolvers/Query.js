const UserDB = require("../models/userModel");
const ProductDB = require("../models/productModel");
const CategoryDB = require("../models/categoryModel");

const Query = {
  users: async () => {
    const users = await UserDB.find({});
    return users;
  },
  categoryList: async (_,{},{db}) => {
    const category = await CategoryDB.find({});
    return category;
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
  productListCategory: async(parent, {queryCategoryInput}, {db}) => {
    const categoryList = db.ProductDB
    const {categoryId} = queryCategoryInput
    const products = await categoryList.find({
      categoryId:{
      _id: categoryId
      }
    })
    return  products
    

  },
  getOrderCard: async (parent, _, { db, userInfo }) => {
    try {
      const orderCard = db.OrderCardDB;

      const product = await orderCard.find({ userId: userInfo.userId });
      const groupedProducts = {};
      product?.forEach((product) => {
        const productId = product.product._id
        if (!groupedProducts[productId]) {
          groupedProducts[productId] = {
            ...product._doc,
            orderCount: product.orderCount,
          };
        }
        groupedProducts[productId].orderCount++;
      });
      const updatedProducts = Object.values(groupedProducts);

      //       const uniqueProducts = {};

      //  product.forEach(item => {
      //   const productId = item.product._id;
      //   if (!uniqueProducts[productId]) {
      //     uniqueProducts[productId] = {
      //      product: item.product._doc,
      //       orderCount: 1
      //     };
      //   } else {
      //     uniqueProducts[productId].orderCount++;
      //   }
      // });
      // const uniqueProductArray = Object.values(uniqueProducts);
      console.log(updatedProducts);
      // console.log(product)

      const amount = product.reduce((acc, val) => {
        return acc + val.product.price;
      }, 0);
      return {
        product: updatedProducts,
        amount: amount,
        piece: product.length,
      };
    } catch (error) {
      console.log("get Order Card:", error);
    }
  },
};

module.exports = { Query };
