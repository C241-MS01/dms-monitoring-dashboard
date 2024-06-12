/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import Layout from "../Layout";
import NonAuthLayout from "../Layout/NonLayout";
import AuthProtected from "./AuthProtected";
import PublicRoute from "./PublicRoute";
// import Alerts from "pages/Dashboards/Alerts";
// import Overview from "pages/Dashboards/Overview";
// import LiveMonitoring from "pages/Dashboards/LiveMonitoring";
// import Basic from "pages/AuthenticationInner/Login/Basic";
// import Alert from 'Common/Components/Alert';



const RouteIndex = () => {
  return (

      <Routes>
        {authProtectedRoutes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <AuthProtected>
                <Layout>
                  <route.component />
                </Layout>
              </AuthProtected>
            }
          />
        ))}

        {publicRoutes.map((route: any, idx: number) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <PublicRoute>
                <NonAuthLayout>
                  <route.component />
                </NonAuthLayout>
              </PublicRoute>
            }
          />
        ))}

        <Route path="/*" element={<Navigate to={{ pathname: "/   " }} />} />
      </Routes>
  );
};

export default RouteIndex;
