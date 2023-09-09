import SmallLogoContainer from "@/components/containers/smallLogoContainer";
import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import Headers from "./components/Headers";
import SigmUpForm from "./components/SignUpForm/SignUpForm";
import LoginOptions from "./components/SignUpOptions";

interface LoginContainerProps {}

const SignUpContainer: FunctionComponent<LoginContainerProps> = () => {
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
      <SigmUpForm />
      <LoginOptions />
    </Box>
  );
};

export default SignUpContainer;
