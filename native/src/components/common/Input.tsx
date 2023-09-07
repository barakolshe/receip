import { FunctionComponent, ReactNode } from "react";
import { Props as MuiInputProps } from "react-native-paper/src/components/TextInput/TextInput";
import PrimaryInput from "./_inputs/PrimaryInput";

const variants = {
  primary: "primary",
} as const;

type VariantsTypes = (typeof variants)[keyof typeof variants]; // Get the union type of values

interface InputProps extends MuiInputProps {
  variant: VariantsTypes;
}

const Input: FunctionComponent<InputProps> = ({ variant, ...props }) => {
  switch (variant) {
    case variants.primary:
      return <PrimaryInput {...props} />;
      break;
    default:
      return <PrimaryInput {...props} />;
      break;
  }
};

export default Input;
