import { Menu } from "antd";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <Menu
      mode="horizontal"
      className="bg-secondary-subtle justify-content-center"
    >
      <Menu.Item key="dashboard">
        <Link to="/user/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to="/user/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="photos">
        <Link to="/user/photos">My Photos</Link>
      </Menu.Item>
      <Menu.Item key="preferences">
        <Link to="/user/partner-preferences">Partner Preferences</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="">Settings</Link>
      </Menu.Item>
      <Menu.Item key="more">
        <Link to="">More</Link>
      </Menu.Item>
    </Menu>
  );
};

export default UserNavbar;
