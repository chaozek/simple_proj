import _ from "lodash";
import { useProductQuery, ProductQuery } from "../../generated/index";
import { Skeleton } from "@chakra-ui/react";
import { ComponentType, ReactElement } from "react";
import { useRouter } from "next/router";
type Props = {
  query: {
    id: string;
  };
};

type WrappedComponentProps = {
  product: ProductQuery["product"];
  loading: boolean;
} & Props;

export function withProductData<P extends WrappedComponentProps>(
  Component: ComponentType<P>
): (props: Props) => ReactElement {
  return function WrappedComponent(props: Props) {
    const router = useRouter();
    const { data, loading } = useProductQuery({
      variables: { productId: Number(router.query.id) },
    });
    if (loading) {
      return <Skeleton mt={20} height="20vh" width="100%" />;
    }
    return (
      <Component
        {...(props as P)}
        product={!loading && data?.product}
        loading={loading}
      />
    );
  };
}
