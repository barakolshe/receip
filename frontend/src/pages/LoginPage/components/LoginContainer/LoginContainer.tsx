import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import Headers from "./components/Headers";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginOptions from "./components/LoginOptions";
import SmallLogoContainer from "@/components/containers/smallLogoContainer";

interface LoginContainerProps {}

const LoginContainer: FunctionComponent<LoginContainerProps> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "360px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        marginX: "auto",
      }}
    >
      <SmallLogoContainer sx={{ display: { xs: "flex", md: "none" } }} />
      <Headers />
      <LoginForm />
      <LoginOptions />
    </Box>
  );
};

export default LoginContainer;
