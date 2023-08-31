const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    users: [User!]!
    productById(id: ID!): Product!
    products: [Product!]
    ownProducts: [Product!]
    getOrderCard: OrderCard!
    getMe: User
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput!): UserPayload!
    createProduct(productInput: ProductInput!): ProductPayload!
    updateProduct(productId: ID!, productInput: ProductInput!): ProductPayload!
    makeComment(createReviewInput: CreateReviewInput!): Comment!
    createOrderCard(createOrderCardInput: CreateOrderCardInput!): OrderCardPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
  }
  input CredentialsInput {
    email: String!
    password: String!
  }
  type AuthPayload {
    userErrors: [UserError!]!
    user: UserData
    token: String
  }
  input CreateReviewInput {
    productId: String!
    comment: String!
  }

  input CreateOrderCardInput {
    productId: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  input ProductInput {
    productName: String
    description: String
    price: Int
    count: Int
    userId: String
  }

  type Comment {
    comment: String!
  }

  type UserError {
    message: String!
  }

  type ProductPayload {
    userErrors: [UserError!]!
    product: Product
  }
  type OrderCardPayload {
    userErrors: [UserError!]!
    product: Product
  }
  type Product {
    _id: ID!
    productName: String!
    description: String!
    price: Int!
    count: Int!
    user: UserData!
    reviews: [Review!]!
  }


  type Review {
    _id: ID!
    userId: UserData!
    comment: String!
  }
  type UserPayload {
    userErrors: [UserError!]!
    user: UserData
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
  type OrderCard {
    totalPrice: String
    products: [Product!]!
    piece: String

  }
`;
