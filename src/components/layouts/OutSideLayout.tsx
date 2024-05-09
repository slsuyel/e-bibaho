import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import ScrollToTop from "../../utils/ScrollToTop";
import { GoToTop } from "go-to-top-react";
// import BottomToggleMenu from "../ui/BottomToggleMenu";
import { useEffect } from "react";
import AOS from "aos";

const OutSideLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ScrollToTop>
      <Header data-aos="fade-down" />

      <Outlet />

      <Footer />
      {/* <BottomToggleMenu /> */}
      <GoToTop />
    </ScrollToTop>
  );
};

export default OutSideLayout;
