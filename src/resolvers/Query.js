const UserDB = require( '../models/userModel')
const ProductDB = require( '../models/productModel')

const Query = {
    users: async  () => {
        const users = await UserDB.find({})
        return users
    },
    productById: async (_, {id}) => {
        const product = await ProductDB.findById(id)
        return product
    },
    products: async () => {
        const products = await ProductDB.find()
        return products
    }
}

module.exports = {Query}