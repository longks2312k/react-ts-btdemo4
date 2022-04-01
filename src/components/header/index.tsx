import React from "react";
import "./style.css";
import { Button, Dropdown, Input, Menu } from "antd";
import { TeamOutlined, DollarOutlined, AuditOutlined, DingdingOutlined, RiseOutlined, WindowsOutlined, CaretDownOutlined, CheckCircleFilled, MailFilled, DollarCircleFilled, PieChartFilled, WindowsFilled, AndroidFilled, MessageFilled, HddFilled, MehFilled, SearchOutlined, BarsOutlined, BellFilled } from "@ant-design/icons";
// import { click } from "@testing-library/user-event/dist/click";

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  //const [current, setCurrent] = useState("mail");
  // handleClick = e => {
  //   setCurrent(e.key);
  // };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container-left">
          <div className="header-container-logo">
            <img src="https://jumbo.g-axon.work/images/logo.png" alt="" />
          </div>
          <div className="header-container-input">
            <Input className="header-input" type="textarea" allowClear={true} size="large" placeholder="Search here..." prefix={<SearchOutlined />}></Input>
            <Dropdown className="header-cas-btn" trigger={["click"]} overlay={menu} placement="bottomLeft">
              <Button>CATEGORIES</Button>
            </Dropdown>
          </div>
        </div>
        <div className="header-container-right">
          <div className="header-login">
            <div className="login-div1"></div>
            <div className="login-div2">
              <Button type="text" className="btn-login">
                <p className="text-btn">LOGIN</p>
              </Button>
            </div>
            <div className="div-4"></div>
            <div className="login-div3">
              <Button type="text" className="btn-sign-up">
                <p className="text-btn">SIGN UP</p>
              </Button>
            </div>
          </div>
          <div className="header-combo-btn">
            <Dropdown className="header-item-btn" trigger={["click"]} overlay={menu} placement="bottomLeft">
              <Button className="btn" type="text" icon={<BarsOutlined style={{fontSize:'22px'}} />}></Button>
            </Dropdown>
            <Dropdown className="header-item-btn" trigger={["click"]} overlay={menu} placement="bottomLeft">
              <Button className="btn" type="text" icon={<MessageFilled style={{fontSize:'22px'}} />}></Button>
            </Dropdown>
            <Dropdown className="header-item-btn" trigger={["click"]} overlay={menu} placement="bottomLeft">
              <Button className="btn" type="text" icon={<BellFilled style={{fontSize:'22px'}} />}></Button>
            </Dropdown>
            <Dropdown className="header-language-btn" trigger={["click"]} overlay={menu} placement="bottomLeft">
              <Button className="btn btn-2" type="text">
                <img className="img-language" src="https://jumbo.g-axon.work/images/flag/icons8-usa.png" alt="" />
              </Button>
            </Dropdown>
            <Dropdown className="header-logout-btn" trigger={["click"]} overlay={menu} placement="bottomLeft">
              <Button className="btn btn-2" type="text">
                <img className="img-logout" src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg" alt="" />  
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <Menu
        // onClick={handleClick(e.key)}
        //selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        className="header-menu"
      >
        <SubMenu key="Dashboards" title="Dashboards" theme="light" icon={<CaretDownOutlined />}>
          <Menu.Item icon={<DollarCircleFilled />} key="setting:1">Crypto</Menu.Item>
          <Menu.Item icon={<AuditOutlined />} key="setting:2">Listing</Menu.Item>
          <Menu.Item icon={<TeamOutlined />} key="setting:3">Crm</Menu.Item>
          <Menu.Item icon={<PieChartFilled />} key="setting:4">Intranet</Menu.Item>
          <Menu.Item icon={<DingdingOutlined />} key="setting:5">eCommerce</Menu.Item>
          <Menu.Item icon={<DollarOutlined />} key="setting:6">News</Menu.Item>
          <Menu.Item icon={<DollarCircleFilled />} key="setting:7">Misc</Menu.Item>
        </SubMenu>
        <SubMenu key="Components" title="Components" theme="light" icon={<CaretDownOutlined />}>
          <SubMenu icon={<WindowsFilled />} key="Metrics" title="Metrics" theme="light">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu icon={<WindowsOutlined />} key="MaterialUI" title="Material UI Components" theme="light">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu icon={<AndroidFilled />} key="Coremat" title="Coremat Components" theme="light">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu icon={<RiseOutlined />} key="Widgets" title="Widgets" theme="light">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="Apps" title="Apps" theme="light" icon={<CaretDownOutlined />}>
          <Menu.Item icon={<MailFilled />} key="setting:1">Mail</Menu.Item>
          <Menu.Item icon={<CheckCircleFilled />} key="setting:2">To do</Menu.Item>
          <Menu.Item icon={<RiseOutlined />} key="setting:3">Contact</Menu.Item>
          <Menu.Item icon={<MessageFilled />} key="setting:4">Chat</Menu.Item>
          <Menu.Item icon={<WindowsFilled />} key="setting:5">Kanban Broad</Menu.Item>
        </SubMenu>
        <SubMenu key="Social" title="Social Apps" theme="light" icon={<CaretDownOutlined />}>
          <Menu.Item icon={<MehFilled />} key="setting:1">Profile</Menu.Item>
          <Menu.Item icon={<HddFilled />}  key="setting:2">Wall App</Menu.Item>
        </SubMenu>
        <SubMenu key="Visualization" title="Visualization" theme="light" icon={<CaretDownOutlined />}>
          <SubMenu key="Chart" title="Chart" theme="light">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="GoogleMaps" title="Google Maps" theme="light">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="Extras" title="Extras" theme="light" icon={<CaretDownOutlined />}>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="Extensions" title="Extensions" theme="light" icon={<CaretDownOutlined />}>
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Header;