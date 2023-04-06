const User = require("../../models/userModel");

const Mutation = {
  createUser: async (parent, { createUserInput }, context) => {
    const { name, email, password } = createUserInput;
    const user = await User.create({
      name,
      email,
      password,
    });
    return user;
  },
};

module.exports = Mutation;
