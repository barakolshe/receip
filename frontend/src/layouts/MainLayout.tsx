import AppBar from "@/components/layout/AppBar";
import AppbarHeightContext from "@/providers/AppbarHeightContext";
import { Box } from "@mui/material";
import { useMeasure } from "@uidotdev/usehooks";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const [ref, { height: measuredHeight }] = useMeasure();

  const appbarHeight = measuredHeight ? measuredHeight + 1 : 0;

  return (
    <AppbarHeightContext.Provider value={appbarHeight}>
      <AppBar ref={ref} />
      <Box
        id="receip-main-content"
        component="main"
        sx={{
          minHeight: `calc(100vh - ${appbarHeight}px)`,
        }}
      >
        <Outlet />
      </Box>
    </AppbarHeightContext.Provider>
  );
};

export default MainLayout;
