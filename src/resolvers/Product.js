const Product = {
  user:async (parent, _, {db}) => {  
    const userID = parent.userId._id 
    const user = db.UserDB
    const res = await user.findById({_id: userID})
    
    return res
  },
  reviews: async (parent, _, {db}) => {
    const reviewDB = db.ReviewDB    
    const res = await reviewDB.find({productId: parent._id})
    
    return res
  }
};


module.exports = {Product}