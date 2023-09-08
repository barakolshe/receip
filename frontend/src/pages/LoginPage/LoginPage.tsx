import { Box, Grid } from "@mui/material";
import { FunctionComponent } from "react";
import Headers from "./components/Headers";
import LoginForm from "./components/LoginForm";
import LogoContainer from "./components/LogoContainer";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <Grid container sx={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Grid
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          style={{}}
          sx={{
            width: "100%",
            maxWidth: "360px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginX: "auto",
          }}
        >
          <Headers />
          <LoginForm />
        </Box>
      </Grid>
      <Grid xs={0} md={6}>
        <LogoContainer />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
