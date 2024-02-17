import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/e_bibaho_logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
  ];

  return (
    <Navbar
      style={{ backgroundColor: "#dc3545" }}
      expand="lg"
      fixed={isFixed ? "top" : undefined}
      className=" p-0 font-maven"
    >
      <Container>
        <Navbar.Brand href="/" className="p-0">
          <img src={logo} alt="" width={95} height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav "
          className="justify-content-end fs-5 text-white fw-semibold gap-3"
        >
          {menuItems.map((item) => (
            <>
              <NavLink key={item.id} to={item.link} className="nav-link ">
                {item.label}
              </NavLink>
            </>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
