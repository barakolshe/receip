import { TextField, TextFieldProps } from "@mui/material";
import { FunctionComponent } from "react";

type PrimaryTextInputProps = TextFieldProps & {};

const PrimaryTextInput: FunctionComponent<PrimaryTextInputProps> = ({
  sx,
  ...props
}) => {
  return (
    <TextField
      variant="outlined"
      sx={{
        ...sx,
      }}
      {...props}
    />
  );
};

export default PrimaryTextInput;
