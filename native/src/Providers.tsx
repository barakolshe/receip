import React, { FunctionComponent, ReactNode } from "react";
import { PaperProvider } from "react-native-paper";
import theme from "./theme";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default Providers;
