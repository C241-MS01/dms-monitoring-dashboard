/* eslint-disable @typescript-eslint/no-explicit-any */
// dashboard
import LiveMonitoring from "pages/Dashboards/LiveMonitoring";
import Overview from "pages/Dashboards/Overview";
import Alerts from "pages/Dashboards/Alerts";

// // plugins
// import PSimpleBar from "pages/Components/Plugins/Simplebar";
// import VideoPlayer from "pages/Components/Plugins/VideoPlayer";

// // forms
// import ReactDataTable from "pages/Components/Table/ReactTable";

// // auth
import Basic from "../pages/AuthenticationInner/Login/Basic";

// //Register
// import BasicRegister from "../pages/AuthenticationInner/Register/Basic";

// // EmailVerify
// import BasicEmailVerify from "../pages/AuthenticationInner/VerifyEmail/Basic";

// // TwoSteps
// import BasicTwoSteps from "../pages/AuthenticationInner/TwoSteps/Basic";

// // Logout
// import BasicLogout from "../pages/AuthenticationInner/Logout/Basic";

// // Reset Password
// import BasicResetPassword from "../pages/AuthenticationInner/ResetPassword/Basic";

// // Create Password
// import Pages404 from "../pages/AuthenticationInner/Pages404";
// import UserProfile from "../pages/Authentication/UserProfile";
// import ComingSoon from "../pages/AuthenticationInner/ComingSoon";
// import Offline from "../pages/AuthenticationInner/Offline";
// import Maintenance from "../pages/AuthenticationInner/Maintenance";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: Overview },
  { path: "/dashboard", component: Overview },
  { path: "/live-monitoring", component: LiveMonitoring },
  { path: "/alerts/:alert", component: Alerts },
  { path: "/alerts", component: Alerts },
  // // Ui Element

  // // plugins
  // { path: "/plugins-simplebar", component: PSimpleBar },
  // { path: "/plugins-video-player", component: VideoPlayer },

  // // Table
  // { path: "/tables-datatable", component: ReactDataTable },

  // // profile
  // { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [
  // auth
  { path: "/login", component: Basic },

  // // Register
  // { path: "/register", component: BasicRegister },


  // // logout
  // { path: "/logout", component: BasicLogout },

  // //Reset Password
  // { path: "/auth-reset-password-basic", component: BasicResetPassword },

  // //Create Password

  // // coming soon
  // { path: "/pages-coming-soon", component: ComingSoon },

  // // Error
  // { path: "/pages-offline", component: Offline },
  // { path: "/pages-404", component: Pages404 },

  // // Maintenance
  // { path: "/pages-maintenance", component: Maintenance },
];

export { authProtectedRoutes, publicRoutes };
