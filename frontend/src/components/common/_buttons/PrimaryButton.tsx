import { FunctionComponent } from "react";
import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";

interface PrimaryButtonProps extends MuiButtonProps {}

const PrimaryButon: FunctionComponent<PrimaryButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <MuiButton
      variant="contained"
      sx={{
        outline: "none !important",
        color: "common.white",
        borderRadius: "8px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default PrimaryButon;
