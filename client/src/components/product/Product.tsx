import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import CustomForm from "../customForm";


export interface ProductProps {
  image?: string;
  name?: string;
  price?: number;
  description?: string;
  id: string;
  detail?: boolean;
  edit: boolean;
  setEdit: (edit: boolean) => void;
}

const Product = ({
  image,
  name,
  price,
  description,
  id,
  detail,
  edit,
  setEdit,
}: ProductProps) => {
  return (
    <Card my="2">
      <CardBody>
        <Flex>
          <Flex>
            <Image minWidth="250px" maxHeight="250px" src={image} />
          </Flex>
          <Flex
            ml={5}
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <Flex flexDirection="column">
              {CustomForm(
                <>
                  <Heading>{name}</Heading>
                  <Text>{price}$</Text>
                  <Text>{description}</Text>
                </>,
                {
                  name,
                  price,
                  description,
                },
                edit,
                setEdit,
                id
              )}
            </Flex>
            <Flex mt="2" gap="2">
              {!detail && (
                <Button as={Link} href={`/product/${id}`}>
                  Product detail
                </Button>
              )}
              <Button onClick={() => setEdit(!edit)}>
                {edit ? "close edit" : "open edit"}
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Product;
