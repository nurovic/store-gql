const User = {
  products:async (parent, _, {db}) => {  
    const product = db.ProductDB
    const res = await product.find({userId: parent._id})
    
    return res
  },
};


module.exports = {User}