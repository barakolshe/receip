import { Box, Container } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface LoginLayoutProps {}

const LoginLayout: FunctionComponent<LoginLayoutProps> = () => {
  return (
    <Box height="100%" width="100%">
      <Outlet />
    </Box>
  );
};

export default LoginLayout;
