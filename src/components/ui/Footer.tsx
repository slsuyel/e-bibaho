import FooterTop from './FooterTop';
import '../Styles/Components.css';
import logo from '../../assets/images/main_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const usefulLinks = [
    { name: 'Login', path: '/login' },
    { name: 'Sign up', path: '/register' },
    { name: 'Plans & Prices', path: '/pricing' },
    { name: 'Frequently asked questions', path: '/help' },
  ];

  const contactSupport = [
    { type: 'text', icon: 'fas fa-phone', content: '+47 45 80 80 80' },
    { type: 'link', icon: 'fas fa-comments', name: 'Live chat', path: '/' },
    { type: 'link', icon: 'fas fa-envelope', name: 'Contact us', path: '/' },
    { type: 'link', icon: 'fas fa-star', name: 'Give feedback', path: '/' },
  ];

  const officeAddress = {
    address: '74-09 37TH Avenue, Suite 203B, Jackson Heights, NY 11372',
    inquiries: {
      phone: '+1 (888) 887 5027',
      email: 'contact@ebibaho.com',
    },
  };

  return (
    <footer className="new_footer_area bg_color">
      <FooterTop />
      <div
        className="py-5 px-2 border-bottom"
        style={{ background: '#1C1324' }}
      >
        <div className="row mx-auto">
          <div className="col-md-3 px-2">
            <img src={logo} className="img-fluid" alt="Logo" width={150} />
            <p className="mb-0 text-white mt-2">
              Embark on a transformative journey with our globally recognized
              matrimonial and matchmaking service, trusted by individuals
              worldwide.
            </p>
          </div>
          <div className="col-md-3 text-white">
            <ul className="list-unstyled">
              <li className="fw-medium fs-5">Useful links</li>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  {link.path && (
                    <Link className="nav-link text-white" to={link.path}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li className="fw-medium fs-5 text-white">Contact & Support</li>
              {contactSupport.map((item, index) => (
                <li key={index}>
                  {item.type === 'text' ? (
                    <span className="nav-link text-white">
                      <i className={`me-1 ${item.icon}`}></i>
                      {item.content}
                    </span>
                  ) : (
                    item.path && (
                      <Link className="nav-link text-white" to={item.path}>
                        <i className={`me-1 ${item.icon}`}></i>
                        {item.name}
                      </Link>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 text-white">
            <span className="fw-medium fs-5">Office Address</span>
            <p>{officeAddress.address}</p>
            <p>
              General inquiries: <br />
              Phone: {officeAddress.inquiries.phone}
              <br />
              email: {officeAddress.inquiries.email}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
