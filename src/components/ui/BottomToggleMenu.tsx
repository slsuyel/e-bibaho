import Draggable from "react-draggable";
import { useState } from "react";
import { Menu } from "antd";

import "../Styles/Components.css";

interface BottomToggleMenuProps {}

const BottomToggleMenu: React.FC<BottomToggleMenuProps> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleMenuClick = () => {
    setVisible(!visible);
    const menuElement = document.querySelector(".menu");
    if (menuElement) {
      menuElement.classList.toggle("opened");
    }
  };

  const handleTouchMenuClick = () => {
    setVisible(!visible);
    const menuElement = document.querySelector(".menu");
    if (menuElement) {
      menuElement.classList.toggle("opened");
    }
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
      <Draggable
        axis="x"
        bounds={{
          left: -500,
          right: 500,
        }}
      >
        <div>
          <button
            className={`menu menu-box p-1 ${visible ? "opened" : ""}`}
            onClick={handleMenuClick}
            onTouchStart={handleTouchMenuClick}
            aria-label="Main Menu"
            style={{
              position: "fixed",
              bottom: 5,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          >
            <h6 className="tgl-mnu-txt">{visible ? "Close" : "Menu"}</h6>

            {/* <svg width="60" height="60" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg> */}
          </button>

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
            <form className="align-items-center bg-body d-flex gap-2 px-2 rounded">
              <i className="fas fa-search text-info-emphasis" />
              <input
                className="border-0 py-1 text-center w-100 tgl-menu-srch text-info-emphasis"
                type="search"
                placeholder="Search "
              />
            </form>

            <Menu.Item key="models">Home</Menu.Item>
            <Menu.Item key="About Us">About Us</Menu.Item>
            <Menu.Item key="E Bibaho Blog">E Bibaho Blog</Menu.Item>
            <Menu.Item key="Careers">Careers</Menu.Item>
            <Menu.Item key="Contact Us">Contact Us</Menu.Item>
            <Menu.Item key="mediator">mediator</Menu.Item>
          </Menu>
        </div>
      </Draggable>
    </div>
  );
};

export default BottomToggleMenu;
