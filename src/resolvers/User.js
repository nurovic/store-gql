const User = {
  products:async (parent, _, {ProductDB}) => {  
    
    const res = await ProductDB.find({userId: parent._id})
    return res
  },
};


module.exports = {User}