import gql from "graphql-tag";


export const PRODUCTS = gql`
  query Products {
    products {
      image
      name
      price
      updatedAt
      id
      description
      createdAt
    }
  }
`;

export const PRODUCT = gql`
  query Product($productId: Int) {
    product(id: $productId) {
      name
      image
      id
      price
      description
    }
  }
`;
