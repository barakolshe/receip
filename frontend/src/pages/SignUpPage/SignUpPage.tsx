import BigLogoContainer from "@/components/containers/BigLogoContainer";
import { Grid } from "@mui/material";
import { FunctionComponent } from "react";
import SignUpContainer from "./SignUpContainer/SignUpContainer";

interface SignUpPageProps {}

const SignUpPage: FunctionComponent<SignUpPageProps> = () => {
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
        <SignUpContainer />
      </Grid>
      <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: "block" } }}>
        <BigLogoContainer />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
