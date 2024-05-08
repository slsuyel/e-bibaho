import FooterTop from "./FooterTop";
import "../Styles/Components.css";
const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <FooterTop />
      <div className="new_footer_top">
        <div className="footer_bg">
          <div className="footer_bg_one" />
          <div className="footer_bg_two" />
          <div className="footer_waling_men" />
          <div className="footer_men-girl" />
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row mx-auto w-100 align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © e-bibaho.com 2024 All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <i className="icon_heart" /> in{" "}
                <a href="" target="_blank">
                  Zsi.Ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
