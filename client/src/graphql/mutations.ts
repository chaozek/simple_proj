import gql from "graphql-tag";

export const CREATE_MANY_PRODUCTS = gql`
  mutation CreateManyProducts($data: [ProductCreateInput!]!) {
    createManyProducts(data: $data) {
      createdAt
      description
      id
      name
      price
      updatedAt
      image
    }
  }
`;

export const ERASE_ALL_PRODUCTS = gql`
  mutation EraseAllProducts {
    eraseAllProducts
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct($data: ProductUpdateInput!) {
    editProduct(data: $data) {
      name
      id
      price
      image
      description
    }
  }
`;
