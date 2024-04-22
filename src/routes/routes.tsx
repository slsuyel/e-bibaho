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

import NewMatches from "../pages/Matches/NewMatches";
import TodayMatches from "../pages/Matches/TodayMatches";
import MyMatches from "../pages/Matches/MyMatches";
import NearMe from "../pages/Matches/NearMe";
import MoreMatches from "../pages/Matches/MoreMatches";
import RecentlyViewed from "../pages/Matches/RecentlyViewed";
import MessageLayout from "../pages/Message/MessageLayout";
import AccountSetting from "../pages/user/Settings/AccountSetting";
import Notification from "../pages/user/Notification/Notification";
import Pricing from "../pages/Pricing/Pricing";
import Cart from "../pages/Pricing/Cart";
import Help from "../pages/Help/Help";

import EditProfileInfo from "../pages/user/Profile/Edit/EditProfileInfo";

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
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
        path: "profile",
        element: <UserDashboard />,
      },
      {
        path: "cart/:id",
        element: <Cart />,
      },
      {
        path: "profile/messages",
        element: <MessageLayout />,
      },
      {
        path: "profile/notifications",
        element: <Notification />,
      },
      {
        path: "profile/my-profile",
        element: <LoggedProfile />,
      },
      {
        path: "profile/edit/",
        element: <EditProfileInfo />,
      },
      {
        path: "profile/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "profile/photos",
        element: <UserPhoto />,
      },
      {
        path: "profile/acc-settings",
        element: <AccountSetting />,
      },
      {
        path: "profile/partner-preferences",
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

      {
        path: "matches/new-matches",
        element: <NewMatches />,
      },
      {
        path: "matches/todays-matches",
        element: <TodayMatches />,
      },

      {
        path: "matches/my-matches",
        element: <MyMatches />,
      },
      {
        path: "matches/near-me",
        element: <NearMe />,
      },
      {
        path: "matches/recently-viewed",
        element: <RecentlyViewed />,
      },
      {
        path: "matches/more-matches",
        element: <MoreMatches />,
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
