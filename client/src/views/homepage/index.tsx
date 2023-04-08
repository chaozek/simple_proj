import { Container } from "@chakra-ui/react";
import { withProductsData } from "src/HOC/withProductsData";
import Product from "../../components/Product";


interface Product {
  image: string;
  name: string;
  price: number;
  description: string;
  id: string;
}

interface IndexProps {
  products: Product[];
}

const Index = ({ products }: IndexProps) => {
  return (
    <Container maxW="7xl">
      {products.map(({ image, name, price, description, id }, i) => {
        return (
          <Product
            image={image}
            name={name}
            price={price}
            description={description}
            id={id}
            key={i}
          />
        );
      })}
    </Container>
  );
};

export default withProductsData(Index);
