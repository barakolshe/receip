import { FunctionComponent, ReactNode } from "react";
import { Props as MuiButtonProps } from "react-native-paper";
import PrimaryButton from "./_buttons/PrimaryButton";
import SecondaryButton from "./_buttons/SecondaryButton";

const variants = {
  primary: "primary",
  secondary: "secondary",
} as const;

type VariantsTypes = (typeof variants)[keyof typeof variants]; // Get the union type of values

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  variant: VariantsTypes;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  switch (variant) {
    case variants.primary:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
      break;
    case variants.secondary:
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
      break;
    default:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
      break;
  }
};

export default Button;
