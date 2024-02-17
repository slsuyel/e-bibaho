import AdminDashboard from "../pages/user/Dashboard/AdminDashboard";
import CreateSupply from "../pages/user/Dashboard/pages/Supplies/CreateSupply";
import Supplies from "../pages/user/Dashboard/pages/Supplies/Supplies";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "Supplies ",
    children: [
      {
        name: "All Supplies ",
        path: "supplies",
        element: <Supplies />,
      },
      {
        name: "Create Supply",
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
];
