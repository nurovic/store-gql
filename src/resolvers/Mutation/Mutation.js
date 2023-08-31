const user = require('./user')
const product = require('./product')
const review = require('./review')
const orderCard = require('./orderCard')
const Mutation = {
  ...user,
  ...product,
  ...review,
  ...orderCard
};

module.exports = Mutation