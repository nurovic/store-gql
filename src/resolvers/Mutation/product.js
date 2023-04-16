const Product = {
  createProduct: async (parent, { productInput }, {db}) => {
    const productdb = db.ProductDB
    const { 
      productName,
      description,
      price,
      count, 
      userId
    } = productInput;
    
    if(
      !productName || 
      !description || 
      !price || 
      !count ||  
      !userId
    ){
      return {
        userErrors: [
          {
            message: "You must provide title and content to create a post",
          },
        ],
        product: null,
      };
    }

    const product = await productdb.create({
        productName,
        description,
        price,
        count,
        userId
    });
    return {
      userErrors: [],
      product
    };
  },

  updateProduct: async (_, {productId, productInput}, {db}) => {
    const productdb = db.ProductDB

    const reqObj = {...productInput}

    const query = { _id: productId };
    const updateFields = { $set: reqObj };
    const options = { returnOriginal: false };
    const product = await productdb.findOneAndUpdate(query, updateFields, options);

    return {
      userErrors: [],
      product
    };
  }
};

module.exports = Product;
