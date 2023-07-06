const UserDB = require( '../models/userModel')
const ProductDB = require( '../models/productModel')
const jwt = require('jsonwebtoken')

const Query = {
    users: async  () => {
        const users = await UserDB.find({})
        return users
    },
    // userById: async (_, {id}) => {
    //     const user = await UserDB.findById(id)
    //     return user
    // },
    productById: async (_, {id}) => {
        const product = await ProductDB.findById(id)
        return product
    },
    products: async () => {
        const products = await ProductDB.find()
        return products
    },
    getMe: async(parent, _, context ) => {
        
        token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTAxMTQyOTA1MGJiMzU3YmJiZWM4MSIsImlhdCI6MTY4Mjk2ODg5OSwiZXhwIjoxNjg1NTYwODk5fQ.tY_81i9snfkPhYpF4HOijGFNAULxmPbzbxZuuHWiaXE"


            const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const res = context.db.UserDB.findById(decoded.id).select("-password")
        console.log(res)




    }
}

module.exports = {Query}