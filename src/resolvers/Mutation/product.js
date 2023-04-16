const Product = {
  createProduct: async (parent, { createProductInput }, {db}) => {
    const product = db.ProductDB
    const { 
        productName,
        description,
        price,
        count, 
        userId
    } = createProductInput;
        
    const resProduct = await product.create({
        productName,
        description,
        price,
        count,
        userId
    });
    return resProduct;
  },
};

module.exports = Product;
