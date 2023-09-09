import { Box, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import logo from "@assets/logo.svg";

interface BigLogoContainerProps {}

const BigLogoContainer: FunctionComponent<BigLogoContainerProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.logoBackground.main,
      }}
    >
      <img src={logo} height="260px" width="260px" style={{ margin: "auto" }} />
      <Box
        sx={{
          backgroundColor: "rgba(248, 242, 240, 0.40)",
          position: "absolute",
          bottom: "0",
          top: "50%",
          right: "0",
          left: "0",
          backdropFilter: "blur(25px)",
        }}
      />
    </Box>
  );
};

export default BigLogoContainer;
