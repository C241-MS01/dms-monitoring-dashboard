import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "helpers/auth.service";

interface AuthProtectedProps {
  children: ReactNode;
}

const AuthProtected: React.FC<AuthProtectedProps> = ({ children }) => {
  const user = AuthService.getCurrentUser();
  if (!user) {
    console.log("User not logged in, redirecting to /login");
    return <Navigate to={{ pathname: "/login" }} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProtected;
