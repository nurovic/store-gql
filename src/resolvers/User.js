const ProductDB = require( '../models/productModel')

const User = {
  products:async (parent) => {  
    const res = await ProductDB.find({userId: parent._id})
    return res
  },
};


module.exports = {User}