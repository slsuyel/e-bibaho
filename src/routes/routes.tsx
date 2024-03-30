import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";

import Login from "../pages/Auth/Login";

import Home from "../pages/home/Home/Home";

import OutSideLayout from "../components/layouts/OutSideLayout";

import Register from "../pages/Auth/Register";
import { userPaths } from "./userRoute";
import SearchPage from "../pages/Search/SearchPage";
import SingleProfile from "../pages/SingleProfile/SingleProfile";
import Errorpage from "../components/ui/Errorpage";
import LoggedProfile from "../pages/user/Profile/LoggedProfile";
import UserDashboard from "../pages/user/Profile/UserDashboard";
import UserLoggedLayout from "../components/layouts/UserLoggedLayout";
import UserPhoto from "../pages/user/Profile/UserPhoto";
import PartnerPre from "../pages/user/Profile/PartnerPreferences/PartnerPre";
import UserPrivate from "./privateRoute/userPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutSideLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/search-res",
        element: <SearchPage />,
      },

      // {
      //   path: "/profile",
      //   element: <LoggedProfile />,
      // },
      // {
      //   path: "/profile/dashboard",
      //   element: <UserDashboard />,
      // },
    ],
  },

  {
    path: "user",
    element: (
      <UserPrivate>
        <UserLoggedLayout />
      </UserPrivate>
    ),
    errorElement: <Errorpage />,
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
      {
        path: "profile",
        element: <LoggedProfile />,
      },
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "photos",
        element: <UserPhoto />,
      },
      {
        path: "partner-preferences",
        element: <PartnerPre />,
      },
      {
        path: "search-res",
        element: <SearchPage />,
      },
      {
        path: "search-res/:id",
        element: <SingleProfile />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <App />,
    children: routeGenerator(userPaths),
  },
]);

export default router;
