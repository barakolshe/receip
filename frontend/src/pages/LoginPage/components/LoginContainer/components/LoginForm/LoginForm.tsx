import TextField from "@/components/common/TextField";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import Button from "../../../../../../components/common/Button";
import Link from "../../../../../../components/common/Link";
import useLoginFormLogic from "./LoginFormLogic";

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  const { submitHandler, registers, formErrors } = useLoginFormLogic();

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
      >
        <Link sx={{ fontWeight: "500" }}>Forgot password</Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
        {/* <Button variant="primary" color="google" sx={{ color: "text.primary" }}>
          Sign in with google
        </Button> */}
      </Box>
    </Box>
  );
};

export default LoginForm;
