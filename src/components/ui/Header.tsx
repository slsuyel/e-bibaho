import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/newlogo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import UserDropdownMenu from "../reusable/UserDropdownMenu";

const Header = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [MobileMenu, setMobileMenu] = useState(false);

  const showDrawer = () => {
    setMobileMenu(true);
  };

  const onClose = () => {
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      id: 1,
      label: "Login",
      link: "/login",
    },
    {
      id: 2,
      label: "Register",
      link: "/register",
    },
    {
      id: 3,
      label: "Help",
      link: "/help",
    },
    {
      id: 4,
      label: "Search result",
      link: "/search-res",
    },
    // {
    //   id: 4,
    //   label: "Profile",
    //   link: "/profile",
    // },
  ];

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#be93b6" }}
        expand="lg"
        fixed={isFixed ? "top" : undefined}
        className={`border-bottom p-0 py-2 font-maven ${isFixed ? "" : ""} ${
          isMobile ? "d-none" : "d-block"
        }`}
      >
        <Container>
          <Navbar.Brand href="/" className="p-0 ">
            <img src={logo} alt="" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end fs-5 text-white fw-semibold gap-3"
          >
            {menuItems.map((item) => (
              <NavLink key={item.id} to={item.link} className="nav-link ">
                {item.label}
              </NavLink>
            ))}

            <Button
              onClick={() => navigate("/pricing")}
              className="my-1 rounded-1 fw-medium"
              type="primary"
              icon={<i className="fa-solid fa-crown"></i>}
              size="middle"
            >
              Upgrade Now
            </Button>

            <UserDropdownMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isMobile && (
        <>
          <div className="align-items-center d-flex justify-content-between p-2 bg-dark">
            <Navbar.Brand href="/" className="p-1 ">
              <img src={logo} alt="" width={120} />
            </Navbar.Brand>
            <Button type="primary" className="rounded-0 " onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>

          <Drawer
            style={{ backgroundColor: "#be93b6" }}
            placement="left"
            onClose={onClose}
            open={MobileMenu}
          >
            {menuItems.map((item) => (
              <NavLink key={item.id} to={item.link} className="nav-link ">
                {item.label}
              </NavLink>
            ))}

            <Button
              onClick={() => navigate("/pricing")}
              className="mb-3 ms-0 my-2 rounded-1 fw-medium"
              type="primary"
              icon={<i className="fa-solid fa-crown"></i>}
              size="middle"
            >
              Upgrade Now
            </Button>
            <br />
            <UserDropdownMenu />
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
