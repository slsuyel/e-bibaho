import FooterTop from './FooterTop';
import '../Styles/Components.css';
import logo from '../../assets/images/main_logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <FooterTop />

      <div
        className=" py-5 px-2 border-bottom"
        style={{ background: '#1C1324' }}
      >
        <div className="row mx-auto ">
          <div className="col-md-3 px-2">
            <img src={logo} className="img-fluid" alt="" width={150} />
            <p className="mb-0 text-white mt-2">
              Embark on a transformative journey with our globally recognized
              matrimonial and matchmaking service, trusted by individuals
              worldwide.
            </p>
          </div>
          <div className="col-md-3 text-white">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="fs-4 fw-bold">Useful links</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/pricing">
                  Plans & Prices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/help">
                  Frequently asked questions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="text-white fs-4 fw-bold">
                  Contact & Support
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">
                  <i className="me-1 fas fa-phone"></i>+47 45 80 80 80
                </span>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  <i className="me-1 fas fa-comments"></i>Live chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  <i className="me-1 fas fa-envelope"></i>Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  <i className="me-1 fas fa-star"></i>Give feedback
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-white ">
            <span className="fs-4 fw-bold">Office Address</span>

            <p>74-09 37TH Avenue, Suite 203B,&nbsp;Jackson Heights, NY 11372</p>
            <p>
              General inquiries: <br />
              Phone: +1 (888) 887 5027
              <br />
              email: contact@ebibaho.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
