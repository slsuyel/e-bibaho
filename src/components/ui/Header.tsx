import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo_new.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "antd";
import useIsMobile from "../../hooks/useIsMobile";

const Header = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const isMobile = useIsMobile();

  const showDrawer = () => {
    setMobileMenu(true);
  };

  const onClose = () => {
    setMobileMenu(false);
  };

  const menuItems = [
    {
      id: 1,
      label: "Login",
      link: "/login",
    },
    {
      id: 4,
      label: "Help",
      link: "/help",
    },
    {
      id: 2,
      label: "Pricing",
      link: "/pricing",
    },
    {
      id: 3,
      label: "Profile",
      link: "user/profile",
    },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        // fixed={isFixed ? "top" : undefined}
        className={` p-0 py-3 ${isMobile ? "d-none" : "d-block"}`}
      >
        <Container>
          <NavLink to={"/"} className=" text-decoration-none mt-1">
            <img src={logo} alt="" width={150} />
          </NavLink>

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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isMobile && (
        <>
          <div className="align-items-center d-flex justify-content-between py-3 px-2">
            <Navbar.Brand href="/" className="">
              <img src={logo} alt="" width={120} />
            </Navbar.Brand>

            {/* <Button type="primary" className="">
              <MenuOutlined />
            </Button> */}

            <div
              className={`hamburger ${MobileMenu ? "active" : ""}`}
              onClick={showDrawer}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>

          <Drawer
            style={{ backgroundColor: "#be93b6", width: "60%" }}
            placement="left"
            onClose={onClose}
            open={MobileMenu}
          >
            {menuItems.map((item) => (
              <NavLink key={item.id} to={item.link} className="nav-link fs-4">
                {item.label}
              </NavLink>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
