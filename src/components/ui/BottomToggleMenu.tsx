import { useState } from 'react';
import { Menu } from 'antd';

import '../Styles/Components.css';
import { Link } from 'react-router-dom';

const BottomToggleMenu = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const menuItems = [
    { key: 'models', title: 'Home', link: '/' },
    { key: 'About Us', title: 'About Us', link: '/about' },
    { key: 'E Bibaho Blog', title: 'E Bibaho Blog', link: '/blog' },
    { key: 'Careers', title: 'Careers', link: '/careers' },
    { key: 'Contact Us', title: 'Contact Us', link: '/contact' },
    { key: 'mediator', title: 'Mediator', link: '/mediator' },
  ];

  const handleMenuClick = () => {
    setVisible(!visible);
    const menuElement = document.querySelector('.menu');
    if (menuElement) {
      menuElement.classList.toggle('opened');
    }
  };

  // const handleTouchMenuClick = () => {
  //   setVisible(!visible);
  //   const menuElement = document.querySelector('.menu');
  //   if (menuElement) {
  //     menuElement.classList.toggle('opened');
  //   }
  // };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <div>
        <button
          className={`menu menu-box p-1 ${visible ? 'opened' : ''}`}
          onClick={handleMenuClick}
          // onTouchStart={handleTouchMenuClick}
          aria-label="Main Menu"
          style={{
            position: 'fixed',
            bottom: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          <h6 className="tgl-mnu-txt">{visible ? 'Close' : 'Menu'}</h6>
        </button>

        <Menu
          className="menu-toggle font-maven fs-5"
          mode="vertical"
          onClick={handleMenuClick}
          style={{
            position: 'fixed',
            bottom: visible ? '50px' : '-500px',
            zIndex: 0,
            transform: 'translateX(-50%)',
          }}
        >
          <form className="align-items-center bg-body d-flex gap-2 px-2 rounded">
            <i className="fas fa-search text-info-emphasis" />
            <input
              className="border-0 py-1 text-center w-100 tgl-menu-srch text-info-emphasis"
              type="search"
              placeholder="Search "
            />
          </form>

          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default BottomToggleMenu;
