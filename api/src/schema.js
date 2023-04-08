import { gql } from "apollo-server";

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    description: String
    price: Float
    image: String
    updatedAt: String
    createdAt: String
  }

  input ProductCreateInput {
    name: String
    description: String
    price: Float
    image: String
  }
  input ProductUpdateInput {
    name: String
    description: String
    price: Float
    image: String
    id: ID!
  }
  type Query {
    products: [Product!]
    product(id: Int): Product
  }
  type Mutation {
    createManyProducts(data: [ProductCreateInput!]!): [Product!]!
    createProduct(data: ProductCreateInput!): Product!
    editProduct(data: ProductUpdateInput!): Product!
    eraseAllProducts: String
  }
`;
export default typeDefs;
