import { FunctionComponent, ReactNode } from "react";
import theme from "../theme";
import { ThemeProvider } from "@mui/material";
import AuthProvider from "./AuthProvider";

interface ProvidersProps {
  children?: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
