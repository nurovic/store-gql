const user = require('./user')
const product = require('./product')
const Mutation = {
  ...user,
  ...product
};

module.exports = Mutation