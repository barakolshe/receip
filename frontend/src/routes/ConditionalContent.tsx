import Error404Page from "@/pages/Error404Page";
import { AuthContext } from "@/providers/AuthProvider";
import React, { FunctionComponent, ReactNode } from "react";
import { Route } from "react-router-dom";

type ProtectedRouteProps = {
  show: boolean;
  children: ReactNode;
};

const ConditionalContent: FunctionComponent<ProtectedRouteProps> = ({
  show,
  children,
}) => {
  console.log({ show });
  if (show) {
    return children;
  } else {
    return <Error404Page />;
  }
};

export default ConditionalContent;
