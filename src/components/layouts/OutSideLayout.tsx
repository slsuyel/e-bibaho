import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import ScrollToTop from "../../utils/ScrollToTop";
import { GoToTop } from "go-to-top-react";
import BottomToggleMenu from "../ui/BottomToggleMenu";

const OutSideLayout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />

      <Footer />
      {/* <BottomToggleMenu /> */}
      <GoToTop />
    </ScrollToTop>
  );
};

export default OutSideLayout;
