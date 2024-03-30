import { Outlet } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { GoToTop } from "go-to-top-react";
import UserNavbar from "./userLayouts/UserNavbar";

const UserLoggedLayout = () => {
  return (
    <ScrollToTop>
      <Header />
      <UserNavbar />
      <Outlet />
      <Footer />
      <GoToTop />
    </ScrollToTop>
  );
};

export default UserLoggedLayout;
