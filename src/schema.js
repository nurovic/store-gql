const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    users: [User!]!
    productById(id: String!): ProductData! 
    products: [ProductData!] 
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput!): UserData!
    createProduct(createProductInput: CreateProductInput!): ProductData!
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
  }

  type ProductData {
    _id: ID!
    productName: String!,
    description: String!,
    price: Int!,
    count: Int!,
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
