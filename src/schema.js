const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    createUser(name:String!): PostPayload
  }
  type PostPayload {
    name: String
  }
`;
