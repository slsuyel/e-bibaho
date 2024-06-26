import { Outlet, useLocation } from 'react-router-dom';
import Header from '../ui/Header';
import ScrollToTop from '../../utils/ScrollToTop';
import BottomToggleMenu from '../ui/BottomToggleMenu';
import { useEffect } from 'react';
import AOS from 'aos';
import BannerSlider from '../../pages/home/BannerSlider/BannerSlider';
import Footer from '../ui/Footer';
const OutSideLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const location = useLocation();
  return (
    <ScrollToTop>
      {
        <div className="animation-bg ">
          <Header data-aos="fade-down" />
          {location.pathname == '/' && <BannerSlider />}
        </div>
      }
      <Outlet />
      <Footer />
      <BottomToggleMenu />
    </ScrollToTop>
  );
};

export default OutSideLayout;
