import { Layout } from "antd";

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            backgroundColor: scrollY > 0 ? "rgba(0, 21, 41, 0.8)" : "#001529",
            backdropFilter: scrollY > 0 ? "blur(4px)" : "none",
            transition: "background-color 0.3s, backdrop-filter 0.3s",
          }}
        >
          <Navbar />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              marginTop: "50px",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer>
          <footer>
            <div className="float-right d-none d-sm-inline">Version 1.0.0</div>
            <strong>
              Copyright © 2023-2024{" "}
              <a href="https://softwebsys.com/">Softweb System Solutions</a>
            </strong>{" "}
            All rights reserved.
          </footer>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
