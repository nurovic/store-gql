const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    users: [User!]!
    categoryList: [Category!]!
    productById(id: ID!): Product!
    products: [Product!]
    ownProducts: [Product!]
    getOrderCard: OrderCard!
    getMe: User
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput!): UserPayload!
    createProduct(productInput: ProductInput!): ProductPayload!
    orderCardUpdate(productId: ID!, orderInput: OrderInput!):OrderCardPayload!
    updateProduct(productId: ID!, productInput: ProductInput!): ProductPayload!
    makeComment(createReviewInput: CreateReviewInput!): Comment!
    createOrderCard(
      createOrderCardInput: CreateOrderCardInput!
    ): OrderCardPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
    deleteOrderCardProduct(
      deleteOrderCardInput: DeleteOrderCardInput!
    ): OrderCardPayload!
    createCategory(categoryInput: CreateCategoryInput!): CategoryPayload!
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
  input DeleteOrderCardInput {
    orderCardId: String!
  }

  input CreateOrderCardInput {
    product: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }
  input CreateCategoryInput {
    CategoryTitle: String!
  }
  input ProductInput {
    productName: String
    description: String
    price: Int
    count: Int
    userId: String
  }
input OrderInput {
  count: Boolean
}
  type Comment {
    comment: String!
  }

  type UserError {
    message: String!
  }

  type ProductPayload {
    userErrors: [UserError!]!
    product: Product!
  }
  type OrderCardPayload {
    userErrors: [UserError!]!
    product: Product!
    orderCount: Int!

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
  type CategoryPayload {
    userErrors: [UserError!]!
    category: String

  }
  type OrderCardPayload {
    userErrors: [UserError!]!
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
  type Category {
    _id: ID!
    categoryTitle: String
  }
  type OrderProduct {
    product: Product!
    _id: ID!
    orderCount: Int!
  }
  type OrderCard {
    product: [OrderProduct]!
    amount: String
    piece: String
    orderCount: Int!
  }
`;
