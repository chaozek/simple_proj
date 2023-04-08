import _ from "lodash";
import { ComponentType } from "react";
import { useProductsQuery } from "../../generated/index";


export function withProductsData(Component: ComponentType<any>) {
  return function WrappedComponent(props: Object) {
    const { data, loading } = useProductsQuery();
    if (!data) {
      return null;
    }
    if (loading) {
      return null;
    }
    return (
      <Component
        {...props}
        products={!loading && data.products}
        loading={loading}
      />
    );
  };
}
