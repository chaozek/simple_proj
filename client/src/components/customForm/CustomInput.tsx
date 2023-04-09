import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { RefObject } from "react";


interface CustomInputProps {
  field: {
    name: string;
    value?: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
  };
  reference: RefObject<HTMLTextAreaElement> | RefObject<HTMLInputElement>;
  errors: {
    [key: string]: boolean | undefined;
  };
  touched: {
    [key: string]: boolean | undefined;
  };
}

const CustomInput = ({
  field,
  reference,
  errors,
  touched,
}: CustomInputProps) => {
  const { name } = field;
  const hasError = touched[name] && errors[name];
  return field.name === "description" ? (
    <Textarea
      className={hasError ? "error" : ""}
      {...field}
      minHeight="200px"
      {...field}
      ref={reference}
    />
  ) : (
    <Input className={hasError ? "error" : ""} {...field} ref={reference} />
  );
};

export default CustomInput;
