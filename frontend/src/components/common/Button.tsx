import { FunctionComponent } from "react";
import PrimaryButon from "./_buttons/PrimaryButton";
import { ButtonProps as MuiButtonProps } from "@mui/material";

const variants = {
  primary: "primary",
} as const;

type VariantsTypes = (typeof variants)[keyof typeof variants]; // Get the union type of values

type ButtonProps = Omit<MuiButtonProps, "variant"> & {
  variant?: VariantsTypes;
};

const Button: FunctionComponent<ButtonProps> = ({ variant, ...props }) => {
  switch (variant) {
    case variants.primary:
      return <PrimaryButon {...props} />;
      break;
    default:
      return <PrimaryButon {...props} />;
      break;
  }
};

export default Button;
