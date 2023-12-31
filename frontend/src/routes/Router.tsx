import LoginLayout from "@/layouts/LoginLayout";
import LoginPage from "@/pages/LoginPage/LoginPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import React, { FunctionComponent } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ConditionalContent from "./ConditionalContent";
import HomePage from "@/pages/Home/HomePage";
import { AuthContext } from "@/providers/AuthProvider";
import LoadingPage from "@/pages/LoadingPage";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
  const currentUser = React.useContext(AuthContext);
  if (currentUser === "initial") {
    return <LoadingPage />;
  }
  const isAuth = currentUser !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ConditionalContent show={!isAuth}>
              <LoginLayout />
            </ConditionalContent>
          }
        >
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        </Route>
        <Route
          element={
            <ConditionalContent show={isAuth}>
              <LoginLayout />
            </ConditionalContent>
          }
        >
          <>
            <Route path="/home" element={<HomePage />} />
          </>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
