import BigLogoContainer from "@/components/containers/BigLogoContainer";
import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import LoginContainer from "./components/LoginContainer/LoginContainer";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <Grid container sx={{ minWidth: "100vw", minHeight: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LoginContainer />
      </Grid>
      <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: "block" } }}>
        <BigLogoContainer />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
