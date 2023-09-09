import TextField from "@/components/common/TextField";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";
import Button from "../../../../../../components/common/Button";
import Link from "../../../../../../components/common/Link";
import useLoginFormLogic from "./LoginFormLogic";

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  const { submitHandler, control } = useLoginFormLogic();

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            variant="primary"
            label="Email"
            placeholder="example@gmail.com"
            fullWidth
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            variant="primary"
            label="Password"
            placeholder=""
            fullWidth
            type="password"
            error={Boolean(error)}
            helperText={error?.message}
          />
        )}
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
