import { useState } from "react";
import { Menu } from "antd";
import icon from "../../assets/icons/menubtn.png";
import "../Styles/Components.css";

const BottomToggleMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <img
        className="menu-box-img"
        src={icon}
        alt=""
        onClick={handleMenuClick}
        style={{
          width: 70,
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />

      <Menu
        className="menu-toggle font-maven fs-5"
        mode="vertical"
        onClick={handleMenuClick}
        style={{
          position: "fixed",
          bottom: visible ? "50px" : "-500px",
          zIndex: 0,
          transform: "translateX(-50%)",
        }}
      >
        <Menu.Item key="models">Our Models</Menu.Item>
        <Menu.Item key="specialties">Specialties</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="blog">Blog</Menu.Item>
        <Menu.Item key="contact" className="kbutton-nav">
          Contact
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default BottomToggleMenu;
