import { Box, Button, Flex } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  EditProductMutationVariables,
  useEditProductMutation,
} from "../../../generated/index";
import CustomInput from "./CustomInput";


const CustomForm = (
  children: JSX.Element,
  values: any,
  edit: boolean,
  setEdit: Function,
  id: string
) => {
  const [editProduct, { data, loading, error }] = useEditProductMutation();

  return edit ? (
    <Formik
      initialValues={values}
      enableReinitialize
      validateOnChange={true} // validate on each input change
      validate={(values) => {
        const errors: any = {};
        if (!values.name) {
          errors.name = "Name is required";
        }

        if (!values.price) {
          errors.price = "Price is required";
        } else if (isNaN(Number(values.price))) {
          errors.price = "Price must be a number";
        }

        if (!values.description) {
          errors.description = "Description is required";
        }

        return errors;
      }}
      onSubmit={(
        props: EditProductMutationVariables["data"],
        { setSubmitting }: FormikHelpers<EditProductMutationVariables["data"]>,
        ...rest
      ) => {
        editProduct({
          variables: { data: { ...props, id, price: Number(props.price) } },
        });
        setSubmitting(false);
        setEdit(!edit);
      }}
    >
      {({ isValid, errors, touched, ...rest }) => (
        <Form>
          <Flex gap="2" flexDirection="column">
            <Field
              errors={errors}
              touched={touched}
              component={CustomInput}
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />

            <Field
              errors={errors}
              touched={touched}
              component={CustomInput}
              name="price"
            />
            <ErrorMessage
              name="price"
              component="div"
              className="error-message"
            />
            <Field
              errors={errors}
              touched={touched}
              component={CustomInput}
              name="description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error-message"
            />
            <Button maxWidth="110px" type="submit" disabled={!isValid}>
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

export default CustomForm;
