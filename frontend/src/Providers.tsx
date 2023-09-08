import { FunctionComponent, ReactNode } from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

interface ProvidersProps {
  children?: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
