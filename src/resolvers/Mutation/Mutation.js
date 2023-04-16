const user = require('./user')
const product = require('./product')
const review = require('./review')
const Mutation = {
  ...user,
  ...product,
  ...review
};

module.exports = Mutation