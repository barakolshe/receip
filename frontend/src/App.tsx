import { RouterProvider } from "react-router-dom";
import "./App.css";
import Providers from "./Providers";
import publicRouter from "./routes/publicRoutes";
import { CssBaseline } from "@mui/material";
import privateRouter from "./routes/privateRoutes";

function App() {
  const isAuth = false;
  const router = isAuth ? publicRouter : privateRouter;

  return (
    <Providers>
      <CssBaseline />
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
