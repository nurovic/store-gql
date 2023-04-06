const ProductDB = require("../../models/productModel");

const Product = {
  createProduct: async (parent, { createProductInput }, context) => {
    const { 
        productName,
        description,
        price,
        count, } = createProductInput;
        
    const product = await ProductDB.create({
        productName,
        description,
        price,
        count,
        userId: ("642f111be9039b3f8b78de8b") 
    });
    return product;
  },
};

module.exports = Product;
