import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import useSignUpFormLogic from "./SignUpFormLogic";

interface SigmUpFormProps {}

const SigmUpForm: FunctionComponent<SigmUpFormProps> = () => {
  const { submitHandler, registers, formErrors } = useSignUpFormLogic();

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        inputRef={registers.email.ref}
        {...registers.email.inputProps}
        variant="primary"
        label="Email"
        placeholder="example@gmail.com"
        fullWidth
        error={Boolean(formErrors.email)}
        helperText={formErrors.email?.message}
      />
      <TextField
        inputRef={registers.password.ref}
        {...registers.password.inputProps}
        variant="primary"
        label="Password"
        placeholder=""
        fullWidth
        type="password"
        error={Boolean(formErrors.password)}
        helperText={formErrors.password?.message}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      ></Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default SigmUpForm;
