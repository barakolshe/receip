import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import LoginLayout from "../layouts/LoginLayout";

const publicRouter = createBrowserRouter([
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);

export default publicRouter;
