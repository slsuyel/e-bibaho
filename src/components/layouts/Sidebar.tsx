import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/adminRoute';
const { Sider } = Layout;

const Sidebar = () => {
  let sidebarItems;

  const user = {
    token: true,
  };

  switch (user.token) {
    case true:
      sidebarItems = sidebarItemsGenerator(adminPaths);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
    >
      <div
        style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3> Dashboard</h3>
      </div>
      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={['4']}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
