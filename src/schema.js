const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    users: [User!]!
    productById(id: String!): Product! 
    products: [Product!] 
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput!): UserData!
    createProduct(createProductInput: CreateProductInput!): Product!
  }

  input CreateUserInput{
    name: String!
    email: String!
    password: String!
  }

  input CreateProductInput {
    productName: String!,
    description: String!,
    price: Int!,
    count: Int!,
    userId: String!
  }

  type Product {
    _id: ID!
    productName: String!,
    description: String!,
    price: Int!,
    count: Int!,
    user: UserData!
  }
  type UserData {
    _id: ID!
    name: String
    email: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    products: [Product!]!
  }


`;
