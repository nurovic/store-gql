const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(createUserInput:CreateUserInput!): UserData!
  }

  input CreateUserInput{
    name: String!
    email: String!
    password: String!
  }
  type UserData {
    name: String
    email: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
  }
`;
