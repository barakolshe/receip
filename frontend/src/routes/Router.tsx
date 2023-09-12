import MainLayout from "@/layouts/MainLayout";
import Error404Page from "@/pages/Error404Page";
import GroupsPage from "@/pages/GroupsPage/GroupsPage";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { FunctionComponent } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route element={<MainLayout />}>
          <Route
            path="/groups"
            element={
              <>
                <SignedIn>
                  <GroupsPage />
                </SignedIn>
                <SignedOut>
                  <Navigate to="/login" />
                </SignedOut>
              </>
            }
          />
        </Route>
        <Route
          path="/*"
          element={
            <>
              <SignedIn>
                <Error404Page />
              </SignedIn>
              <SignedOut>
                <Navigate to="/sign-in" />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
