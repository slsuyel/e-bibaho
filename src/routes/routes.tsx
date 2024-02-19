import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";

import Login from "../pages/Auth/Login";

import Home from "../pages/home/Home/Home";
import AllSupplies from "../pages/home/AllSupplies/AllSupplies";
import OutSideLayout from "../components/layouts/OutSideLayout";

import Register from "../pages/Auth/Register";
import { userPaths } from "./userRoute";
import SearchPage from "../pages/Search/SearchPage";
import SingleProfile from "../pages/SingleProfile/SingleProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutSideLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <AllSupplies />,
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
        path: "/search-res/:id",
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
