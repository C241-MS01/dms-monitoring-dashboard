/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import Layout from "../Layout";
import NonAuthLayout from "../Layout/NonLayout";
import AuthProtected from "./AuthProtected";
import { AuthContextProvider } from "helpers/AuthContext";
import PublicRoute from "./PublicRoute";
import Alerts from "pages/Dashboards/Alerts";
import Overview from "pages/Dashboards/Overview";
import LiveMonitoring from "pages/Dashboards/LiveMonitoring";
import Basic from "pages/AuthenticationInner/Login/Basic";
// import Alert from 'Common/Components/Alert';

const createRouter = createBrowserRouter([
  //Protected Routes
  {
    path: "/",
    element: (
      <AuthProtected>
        <Layout>
          <Overview />
        </Layout>
      </AuthProtected>
    ),
  },
  {
    path: "/dahsboard",
    element: (
      <AuthProtected>
        <Layout>
          <Overview />
        </Layout>
      </AuthProtected>
    ),
  },
  {
    path: "/live-monitoring",
    element: (
      <AuthProtected>
        <Layout>
          <LiveMonitoring />
        </Layout>
      </AuthProtected>
    ),
  },
  {
    path: "/live-monitoring/:id",
    element: (
      <AuthProtected>
        <Layout>
          <LiveMonitoring />
        </Layout>
      </AuthProtected>
    ),
  },
  {
    path: "/alerts",
    element: (
      <AuthProtected>
        <Layout>
          <Alerts />
        </Layout>
      </AuthProtected>
    ),
  },
  {
    path: "/alerts/:id",
    element: (
      <AuthProtected>
        <Layout>
          <Alerts />
        </Layout>
      </AuthProtected>
    ),
  },
  //UnProtected Routes
  {
    path: "/login",
    element: (
      <PublicRoute>
        <NonAuthLayout>
          <Basic />
        </NonAuthLayout>
      </PublicRoute>
    ),
  },
]);

const RouteIndex = () => {
  return (
    <AuthContextProvider>
      <Routes>
        {/* <Route
          path="/Alerts/:alert"
          element={
            <AuthProtected>
              <Layout>
                <Alerts />
              </Layout>
            </AuthProtected>
          }
        /> */}
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
    </AuthContextProvider>
  );
};

export default RouteIndex;
