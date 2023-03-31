const {ApolloServer, gql} = require( "apollo-server");
const dotenv = require('dotenv')
const connectDB = require('./databse')
const {typeDefs} = require('./schema')
const {  Query, Product } = require('./resolvers')

dotenv.config()


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product
    }
})

connectDB()
server.listen()
    .then(({url}) => {
        console.log(`Server ready on ${url}`)
    })