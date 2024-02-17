import React from "react";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import DayNight from "../ui/DayNight";

const items: MenuProps["items"] = [
  {
    label: "Profile",
    key: "1",
    icon: <UserOutlined />,
    onClick: handleProfileClick,
  },
  {
    label: "Log Out",
    key: "2", // Use a unique key for each menu item
    icon: <LogoutOutlined />,
    onClick: handleLogoutClick,
  },
];

const menuProps = {
  items,
};

// Define the onClick handler for Profile click
function handleProfileClick() {
  console.log("Profile clicked");
  // Add your logic here
}

// Define the onClick handler for Logout click
function handleLogoutClick() {
  console.log("Logout clicked");
  // Add your logic here
}

const Navbar: React.FC = () => (
  <div className="d-flex gap-3 align-item-center ">
    <DayNight />
    <Dropdown.Button
      menu={menuProps}
      placement="bottom"
      icon={<UserOutlined />}
    >
      Admin
    </Dropdown.Button>
  </div>
);

export default Navbar;
