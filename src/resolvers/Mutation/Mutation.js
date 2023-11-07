const user = require('./user')
const product = require('./product')
const review = require('./review')
const orderCard = require('./orderCard')
const category = require('./category')
const Mutation = {
  ...user,
  ...product,
  ...review,
  ...orderCard,
  ...category
};

module.exports = Mutation