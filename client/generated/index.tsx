// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProducts: Array<Product>;
  createProduct: Product;
  editProduct: Product;
  eraseAllProducts?: Maybe<Scalars['String']>;
};


export type MutationCreateManyProductsArgs = {
  data: Array<ProductCreateInput>;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationEditProductArgs = {
  data: ProductUpdateInput;
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProductCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type ProductUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateManyProductsMutationVariables = Exact<{
  data: Array<ProductCreateInput> | ProductCreateInput;
}>;


export type CreateManyProductsMutation = { __typename?: 'Mutation', createManyProducts: Array<{ __typename?: 'Product', createdAt?: string | null, description?: string | null, id: string, name?: string | null, price?: number | null, updatedAt?: string | null, image?: string | null }> };

export type EraseAllProductsMutationVariables = Exact<{ [key: string]: never; }>;


export type EraseAllProductsMutation = { __typename?: 'Mutation', eraseAllProducts?: string | null };

export type EditProductMutationVariables = Exact<{
  data: ProductUpdateInput;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'Product', name?: string | null, id: string, price?: number | null, image?: string | null, description?: string | null } };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', image?: string | null, name?: string | null, price?: number | null, updatedAt?: string | null, id: string, description?: string | null, createdAt?: string | null }> | null };

export type ProductQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['Int']>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', name?: string | null, image?: string | null, id: string, price?: number | null, description?: string | null } | null };


export const CreateManyProductsDocument = gql`
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
export type CreateManyProductsMutationFn = Apollo.MutationFunction<CreateManyProductsMutation, CreateManyProductsMutationVariables>;

/**
 * __useCreateManyProductsMutation__
 *
 * To run a mutation, you first call `useCreateManyProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManyProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManyProductsMutation, { data, loading, error }] = useCreateManyProductsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateManyProductsMutation(baseOptions?: Apollo.MutationHookOptions<CreateManyProductsMutation, CreateManyProductsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateManyProductsMutation, CreateManyProductsMutationVariables>(CreateManyProductsDocument, options);
      }
export type CreateManyProductsMutationHookResult = ReturnType<typeof useCreateManyProductsMutation>;
export type CreateManyProductsMutationResult = Apollo.MutationResult<CreateManyProductsMutation>;
export type CreateManyProductsMutationOptions = Apollo.BaseMutationOptions<CreateManyProductsMutation, CreateManyProductsMutationVariables>;
export const EraseAllProductsDocument = gql`
    mutation EraseAllProducts {
  eraseAllProducts
}
    `;
export type EraseAllProductsMutationFn = Apollo.MutationFunction<EraseAllProductsMutation, EraseAllProductsMutationVariables>;

/**
 * __useEraseAllProductsMutation__
 *
 * To run a mutation, you first call `useEraseAllProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEraseAllProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [eraseAllProductsMutation, { data, loading, error }] = useEraseAllProductsMutation({
 *   variables: {
 *   },
 * });
 */
export function useEraseAllProductsMutation(baseOptions?: Apollo.MutationHookOptions<EraseAllProductsMutation, EraseAllProductsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EraseAllProductsMutation, EraseAllProductsMutationVariables>(EraseAllProductsDocument, options);
      }
export type EraseAllProductsMutationHookResult = ReturnType<typeof useEraseAllProductsMutation>;
export type EraseAllProductsMutationResult = Apollo.MutationResult<EraseAllProductsMutation>;
export type EraseAllProductsMutationOptions = Apollo.BaseMutationOptions<EraseAllProductsMutation, EraseAllProductsMutationVariables>;
export const EditProductDocument = gql`
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
export type EditProductMutationFn = Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>;

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, options);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;
export const ProductsDocument = gql`
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

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductDocument = gql`
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

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;