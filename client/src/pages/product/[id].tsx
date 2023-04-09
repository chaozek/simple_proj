import { getDataFromTree } from "@apollo/client/react/ssr";
import { NextPage } from "next";
import { AppProps } from "next/app";
import withApollo from "src/utils/withApollo";
import ProductDetail from "src/views/productDetail";


type Props = AppProps & {
  query: {
    id: string;
  };
};

const ProductDetailPage: NextPage<Props> = (props) => {
  return <ProductDetail {...props} />;
};

export default withApollo(ProductDetailPage, {
  getDataFromTree,
});
