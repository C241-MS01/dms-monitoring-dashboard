import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "helpers/AuthContext";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
   
    return <React.Fragment>{children}</React.Fragment>;
  }
   return <Navigate to={{ pathname: "/dashbord" }} />;
};

export default PublicRoute;
