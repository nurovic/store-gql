const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
const connectDB = require("./databse");
const { typeDefs } = require("./schema");
const { Query, Mutation, User, Product } = require("./resolvers");
const { ProductDB, UserDB, ReviewDB, OrderCardDB, CategoryDB } = require("./models");
const { getUserFromToken } = require("./utilits/getUserFromToken");

dotenv.config();
const db = { ProductDB, UserDB, ReviewDB, OrderCardDB, CategoryDB };
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    User,
    Product,
  },
  context: async ({ req }) => {
    const userInfo = await getUserFromToken(req.headers.authorization);

    return {
      db,
      userInfo,
    };
  },
});

connectDB();
server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});
