import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    page: "Profile",
    items: [
      { key: "dashboard", label: "Dashboard", link: "/user/profile/dashboard" },
      { key: "profile", label: "My Profile", link: "/user/profile/my-profile" },
      { key: "photos", label: "My Photos", link: "/user/profile/photos" },
      {
        key: "preferences",
        label: "Partner Preferences",
        link: "/user/profile/partner-preferences",
      },
      {
        key: "settings",
        label: "Settings",
        link: "/user/profile/acc-settings",
      },
      { key: "more", label: "More", link: "" },
    ],
  },
  {
    page: "Matches",
    items: [
      {
        key: "new-matches",
        label: "New Matches",
        link: "/user/matches/new-matches",
      },
      {
        key: "todays-matches",
        label: "Today's Matches",
        link: "/user/matches/todays-matches",
      },
      {
        key: "my-matches",
        label: "My Matches",
        link: "/user/matches/my-matches",
      },
      { key: "near-me", label: "Near Me", link: "/user/matches/near-me" },
      {
        key: "recently-viewed",
        label: "Recently Viewed",
        link: "/user/matches/recently-viewed",
      },
      {
        key: "more-matches",
        label: "More Matches",
        link: "/user/matches/more-matches",
      },
    ],
  },
];

const UserNavbar = () => {
  const location = useLocation();

  // Extracting the page name from the location
  const currentPage = location.pathname.split("/")[2]; // Assuming the URL format is /user/{page}

  // Filtering menuItems based on the current page
  const filteredItems = menuItems.find(
    (item) => item.page.toLowerCase() === currentPage.toLowerCase()
  );

  return (
    <Menu
      mode="horizontal"
      className="bg-secondary-subtle justify-content-center"
    >
      {filteredItems &&
        filteredItems.items.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
    </Menu>
  );
};

export default UserNavbar;
