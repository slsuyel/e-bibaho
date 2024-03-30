import { Menu, Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CardForUser from "./CardForUser";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

const LoggedHeader = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ position: "sticky", top: 0, zIndex: "999" }}
      selectedKeys={[]}
      className="fs-5 fw-bold justify-content-center font-maven"
    >
      <Menu.Item key="1">
        <NavLink to="/user/profile" className="nav-link">
          My Shaadi
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/matches" className="nav-link">
          Matches
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/user/search-res" className="nav-link">
          Search
        </NavLink>
      </Menu.Item>

      <SubMenu key="sub1" title="Inbox">
        <Menu.Item key="4">
          <NavLink to="/messages" className="nav-link">
            Messages
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/notifications" className="nav-link">
            Notifications
          </NavLink>
        </Menu.Item>
      </SubMenu>

      <Menu.Item key="6">
        <Button
          className="mb-3 ms-0 my-2 rounded-1 fw-medium"
          type="primary"
          icon={<i className="fa-solid fa-crown"></i>}
          size="middle"
        >
          Upgrade Now
        </Button>
      </Menu.Item>

      <Menu.Item key="7">
        <Dropdown overlay={<CardForUser />} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()} style={{ cursor: "pointer" }}>
            <Space className="text-white gap-0">
              <img
                width={40}
                src="https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"
                alt=""
                className="border rounded-circle"
              />
              <DownOutlined className="fs-6" />
            </Space>
          </a>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};

export default LoggedHeader;
