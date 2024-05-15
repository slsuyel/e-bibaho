import { Outlet } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import Footer from "../ui/Footer";
import UserNavbar from "./userLayouts/UserNavbar";
import LoggedHeader from "../ui/LoggedHeader";

const UserLoggedLayout = () => {
  return (
    <ScrollToTop>
      <LoggedHeader />
      <UserNavbar />
      <div style={{ background: "#F1F1F2" }}>
        <Outlet />
      </div>
      <Footer />
    </ScrollToTop>
  );
};

export default UserLoggedLayout;
