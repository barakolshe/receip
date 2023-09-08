import { FunctionComponent } from "react";
import PrimaryTextInput from "./_textinputs/PrimaryTextInput";
import { TextFieldProps } from "@mui/material";

const variants = {
  primary: "primary",
} as const;

type VariantsTypes = (typeof variants)[keyof typeof variants]; // Get the union type of values

type TextInputProps = Omit<TextFieldProps, "variant"> & {
  variant?: VariantsTypes;
};

const TextInput: FunctionComponent<TextInputProps> = ({
  variant,
  ...props
}) => {
  switch (variant) {
    case variants.primary:
      return <PrimaryTextInput {...props} />;
      break;
    default:
      return <PrimaryTextInput {...props} />;
      break;
  }
};

export default TextInput;
