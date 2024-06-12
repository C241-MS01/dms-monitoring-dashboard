import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import AuthService  from "helpers/auth.service";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const user = AuthService.getCurrentUser();
  if (!user) {
   
    return <React.Fragment>{children}</React.Fragment>;
  }
   return <Navigate to={{ pathname: "/dashbord" }} />;
};

export default PublicRoute;
