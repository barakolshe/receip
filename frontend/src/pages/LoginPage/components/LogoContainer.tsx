import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import logo from "../../../assets/logo.svg";

interface LogoContainerProps {}

const LogoContainer: FunctionComponent<LogoContainerProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "background.main",
      }}
    >
      <img src={logo} height="260px" width="260px" style={{ margin: "auto" }} />
    </Box>
  );
};

export default LogoContainer;
