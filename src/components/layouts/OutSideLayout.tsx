import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import ScrollToTop from "../../utils/ScrollToTop";

const OutSideLayout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};

export default OutSideLayout;
