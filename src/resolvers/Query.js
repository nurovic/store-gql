const UserDB = require( '../models/userModel')

const Query = {
    users:async  () => {
        const users = await UserDB.find({})
        return users
    } 
}

module.exports = {Query}