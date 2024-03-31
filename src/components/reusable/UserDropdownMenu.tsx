import { Dropdown, Space } from "antd";
import CardForUser from "../ui/CardForUser";
import { DownOutlined } from "@ant-design/icons";
const UserDropdownMenu = () => {
  return (
    <Dropdown overlay={CardForUser} trigger={["click"]}>
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
  );
};

export default UserDropdownMenu;
