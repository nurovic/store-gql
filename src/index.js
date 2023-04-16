const {ApolloServer, gql} = require( "apollo-server");
const dotenv = require('dotenv')
const connectDB = require('./databse')
const {typeDefs} = require('./schema')
const { Query, Mutation, User, Product } = require('./resolvers')
const {ProductDB, UserDB, ReviewDB} = require( './models')

dotenv.config()
const db ={ ProductDB, UserDB, ReviewDB}
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        User,
        Product
    },
    context: {db}
})

connectDB()
server.listen()
    .then(({url}) => {
        console.log(`Server ready on ${url}`)
    })