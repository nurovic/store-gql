const User = require("../../models/userModel");

const Mutation = {
  
  createUser: async (parent, {name}, context) => {
    console.log(name)
    const user = await User.create({name});
    console.log(user)
    return user;
  },
};

module.exports = Mutation