import { FunctionComponent } from "react";
import logo from "@assets/logo.svg";
import { Box, BoxProps } from "@mui/material";

interface smallLogoProps extends BoxProps {}

const SmallLogoContainer: FunctionComponent<smallLogoProps> = ({
  sx,
  ...props
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "90px",
        ...sx,
      }}
      {...props}
    >
      <img src={logo} height="67.52px" width="67.52px" />
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.40)",
          position: "absolute",
          bottom: "0",
          top: "33.76px",
          right: "0",
          left: "0",
          backdropFilter: "blur(15px)",
        }}
      />
    </Box>
  );
};

export default SmallLogoContainer;
