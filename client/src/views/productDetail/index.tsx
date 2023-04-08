import ProductComponent from "src/components/Product";
import { withProductData } from "src/HOC/withProductData";


export interface ProductProps {
  product: {
    name?: string;
    image?: string;
    price?: number;
    description?: string;
    id: string;
    detail?: boolean;
  };
}

const ProductDetail: React.FC<any> = ({
  product: { image, price, description, name, id },
}: ProductProps) => {
  return (
    <ProductComponent
      image={image}
      name={name}
      price={price}
      description={description}
      id={id}
      detail
    />
  );
};

export default withProductData(ProductDetail);
