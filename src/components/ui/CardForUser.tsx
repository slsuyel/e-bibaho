import { Link } from 'react-router-dom';
import { Card, Menu } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  SettingOutlined,
  LockOutlined,
  FilterOutlined,
  LogoutOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import UpgrateBtn from '../reusable/UpgrateBtn';

const CardForUser = () => {
  return (
    <div className="CardForUser">
      <Card title="" className="mt-2 rounded-0 shadow-lg">
        <div className="d-flex justify-content-between gap-4 p-3">
          <Menu className="shadow-none" style={{ flex: 1 }}>
            <Link to="/user/profile/dashboard">
              <Menu.Item
                icon={<DashboardOutlined />}
                className="text-nowrap border-bottom"
              >
                Dashboard
              </Menu.Item>
            </Link>
            <Link to="/user/profile/my-profile">
              <Menu.Item
                icon={<UserOutlined />}
                className="text-nowrap border-bottom"
              >
                My Profile
              </Menu.Item>
            </Link>
            <Link to="/email-alerts">
              <Menu.Item
                icon={<MailOutlined />}
                className="text-nowrap border-bottom"
              >
                Email / SMS Alerts
              </Menu.Item>
            </Link>
            <Link to="/user/profile/acc-settings">
              <Menu.Item
                icon={<SettingOutlined />}
                className="text-nowrap border-bottom"
              >
                Account Settings
              </Menu.Item>
            </Link>
          </Menu>
          <Menu className="shadow-none" style={{ flex: 1 }}>
            <Link to="/privacy-options">
              <Menu.Item
                icon={<LockOutlined />}
                className="text-nowrap border-bottom"
              >
                Privacy Options
              </Menu.Item>
            </Link>
            <Link to="/contact-filters">
              <Menu.Item
                icon={<FilterOutlined />}
                className="text-nowrap border-bottom"
              >
                Contact Filters
              </Menu.Item>
            </Link>

            <Menu.Item
              icon={<LogoutOutlined />}
              className="text-nowrap border-bottom"
            >
              Logout
            </Menu.Item>
          </Menu>
        </div>

        <div className="border-top pt-3 text-center">
          <h6>Account Type: Free</h6>

          <UpgrateBtn />

          <p className="text-primary-emphasis">Compare memberships</p>
        </div>
      </Card>
    </div>
  );
};

export default CardForUser;
