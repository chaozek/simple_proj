import {


  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useState } from "react";
import { RefObject } from "react";
import {
  EditProductMutationVariables,
  ProductDocument,
  useEditProductMutation,
} from "../../generated/index";

interface CustomInputProps {
  field: {
    name: string;
    value?: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  reference: RefObject<HTMLTextAreaElement> | RefObject<HTMLInputElement>;
}

export interface ProductProps {
  image?: string;
  name?: string;
  price?: number;
  description?: string;
  id: string;
  detail?: boolean;
}

const Product = ({
  image,
  name,
  price,
  description,
  id,
  detail,
}: ProductProps) => {
  const [edit, setEdit] = useState(false);

  const CustomInput = ({ field, reference }: CustomInputProps) => {
    console.log(field, "FIELD");
    return field.name === "description" ? (
      <Textarea minHeight="200px" {...field} ref={reference} />
    ) : (
      <Input {...field} ref={reference} />
    );
  };

  const [editProduct, { data, loading, error }] = useEditProductMutation();

  const customEdit = (children: JSX.Element, values: any) => {
    return edit ? (
      <Formik
        initialValues={values}
        enableReinitialize
        validate={() => {
          const errors: any = {};
        }}
        onSubmit={(
          props: EditProductMutationVariables["data"],
          { setSubmitting }: FormikHelpers<EditProductMutationVariables["data"]>
        ) => {
          editProduct({
            variables: { data: { ...props, id, price: Number(props.price) } },
            refetchQueries: [{ query: ProductDocument }],
          });
          setSubmitting(false);
          setEdit(!edit);
        }}
      >
        {() => (
          <Form>
            <Flex gap="2" flexDirection="column">
              <Field component={CustomInput} name="name" />
              <Field component={CustomInput} name="price" />
              <Field component={CustomInput} name="description" />
              <Button maxWidth="110px" type="submit">
                Save
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    ) : (
      <Box>{children}</Box>
    );
  };

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
              {customEdit(
                <>
                  <Heading>{name}</Heading>
                  <Text>{price}$</Text>
                  <Text>{description}</Text>
                </>,
                {
                  name,
                  price,
                  description,
                }
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
