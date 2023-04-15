const Product = {
  user:async (parent, _, {db}) => {  
    const userID = parent.userId._id 
    const user = db.UserDB
    const res = await user.findById({_id: userID})
    console.log(user,"USER")
    return res
  },
};


module.exports = {Product}