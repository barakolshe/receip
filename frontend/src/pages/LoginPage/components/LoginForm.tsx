import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import TextInput from "../../../components/common/TextInput";
import Button from "../../../components/common/Button";
import Link from "../../../components/common/Link";

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextInput
        variant="primary"
        label="Email"
        placeholder="example@gmail.com"
        fullWidth
      />
      <TextInput variant="primary" label="Password" placeholder="" fullWidth />
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
        <Button variant="primary">Sign in</Button>
        <Button variant="primary" color="google" sx={{ color: "text.primary" }}>
          Sign in with google
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
