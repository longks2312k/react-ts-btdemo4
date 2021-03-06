import React, { useContext, useState } from "react";
import "./style.css";
import { Button, Drawer, Dropdown, Input, Menu } from "antd";
import {
  TeamOutlined,
  DollarOutlined,
  AuditOutlined,
  DingdingOutlined,
  MenuUnfoldOutlined,
  RiseOutlined,
  WindowsOutlined,
  CaretDownOutlined,
  CheckCircleFilled,
  MailFilled,
  DollarCircleFilled,
  PieChartFilled,
  WindowsFilled,
  AndroidFilled,
  MessageFilled,
  HddFilled,
  MehFilled,
  SearchOutlined,
  BarsOutlined,
  BellFilled,
  AppstoreFilled,
  ContainerFilled,
  DesktopOutlined,
} from "@ant-design/icons";
import ThemeBtn from "./themeBtn";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import '../../translations/i18n'
// import { click } from "@testing-library/user-event/dist/click";

const { SubMenu } = Menu;



const Header = () => {
  // Change language
  const { t ,i18n} = useTranslation();
  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="text" icon={<img className="btn-language-item" src="https://kenh14cdn.com/thumb_w/660/2017/2-1503128133740.png"/>} onClick={changeLanguage("en")}>English</Button>
      </Menu.Item>
      <Menu.Item>
      <Button type="text" icon={<img className="btn-language-item" src="https://nhatbanchotoinhe.com/wp-content/uploads/2021/04/co-nhat-4795-1497173124.png"/>} onClick={changeLanguage("jp")}>Japan</Button>

      </Menu.Item>
      <Menu.Item>
      <Button type="text" icon={<img className="btn-language-item" src="https://fileth.hcm.edu.vn//UploadImages/thhoabinhq11/2021_11/quocky-1_291120211558.gif?w=400"/>} onClick={changeLanguage("ve")}>Vietnamese</Button>

      </Menu.Item>
    </Menu>
  );

  const {bgrColor,textColor,itemColor} = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const showDrawer = () => {
    setCollapsed(true);
  };
  const onClose = () => {
    setCollapsed(false);
  };

  return (
    <div className="header" style={{backgroundColor:`${bgrColor}`}}>
      <div className="mobile-menu">
        <Button type="text"  icon={<MenuUnfoldOutlined style={{color:`${textColor}`}}/>} onClick={showDrawer} style={{ marginTop:'20px' }}>
        </Button>
        <Drawer placement="left" visible={collapsed} onClose={onClose} width={220}>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
          >
            <Menu.Item key="1" icon={<PieChartFilled />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerFilled />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailFilled />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreFilled />} title="Navigation Two">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Drawer>
      </div>
      <div className="header-container">
        <div className="header-container-left">
          <div className="header-container-logo">
            <img src="https://jumbo.g-axon.work/images/logo.png" alt="" />
          </div>
          <div className="header-container-input">
            <Input
              className="header-input"
              type="textarea"
              // style={{backgroundColor:`${bgrColor}`}}
              allowClear={true}
              size="large"
              placeholder={t("headerSearchInput")}
              prefix={<SearchOutlined />}
            ></Input>
            <Dropdown
              className="header-cas-btn"
              trigger={["click"]}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button style={{backgroundColor:`${itemColor}`,color:`${textColor}`}}>{t("headerCategory")}</Button>
            </Dropdown>
          </div>
        </div>
        <div className="header-container-right">
          <div className="header-login">
            <div className="login-div1"></div>
            <div className="login-div2">
              <Button type="text" className="btn-login">
                <p className="text-btn" style={{color:`${textColor}`}}>{t("headerLogin")}</p>
              </Button>
            </div>
            <div className="div-4"></div>
            <div className="login-div3">
              <Button type="text" className="btn-sign-up">
                <p className="text-btn" style={{color:`${textColor}`}}>{t("headerSignup")}</p>
              </Button>
            </div>
            <ThemeBtn/>
          </div>
          <div className="header-combo-btn">
            <Button
              className="btn mobile-search"
              type="text"
              icon={<SearchOutlined style={{ fontSize: "22px" }} />}
            ></Button>
            <Dropdown
              className="header-item-btn"
              trigger={["click"]}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button
                className="btn"
                type="text"
                icon={<BarsOutlined style={{ color:`${textColor}`, fontSize: "22px" }} />}
              ></Button>
            </Dropdown>
            <Dropdown
              className="header-item-btn"
              trigger={["click"]}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button
                className="btn"
                type="text"
                icon={<MessageFilled style={{color:`${textColor}`, fontSize: "22px" }} />}
              ></Button>
            </Dropdown>
            <Dropdown
              className="header-item-btn"
              trigger={["click"]}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button
                className="btn"
                type="text"
                icon={<BellFilled style={{color:`${textColor}`, fontSize: "22px" }} />}
              ></Button>
            </Dropdown>
            <Dropdown
              className="header-language-btn"
              trigger={["click"]}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button className="btn btn-2" type="text">
                <img
                  className="img-language"
                  src="https://jumbo.g-axon.work/images/flag/icons8-usa.png"
                  alt=""
                />
              </Button>
            </Dropdown>
            <Dropdown
              className="header-logout-btn"
              trigger={["click"]}
              overlay={menu}
              placement="bottomLeft"
            >
              <Button className="btn btn-2" type="text">
                <img
                  className="img-logout"
                  src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg"
                  alt=""
                />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <Menu
        mode="horizontal"
        theme="dark"
        className="header-menu"
      >
        <SubMenu
          key="Dashboards"
          title={t("headerDashboards")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item icon={<DollarCircleFilled />} key="Dashboards:1">
            Crypto
          </Menu.Item>
          <Menu.Item icon={<AuditOutlined />} key="Dashboards:2">
            Listing
          </Menu.Item>
          <Menu.Item icon={<TeamOutlined />} key="Dashboards:3">
            Crm
          </Menu.Item>
          <Menu.Item icon={<PieChartFilled />} key="Dashboards:4">
            Intranet
          </Menu.Item>
          <Menu.Item icon={<DingdingOutlined />} key="Dashboards:5">
            eCommerce
          </Menu.Item>
          <Menu.Item icon={<DollarOutlined />} key="Dashboards:6">
            News
          </Menu.Item>
          <Menu.Item icon={<DollarCircleFilled />} key="Dashboards:7">
            Misc
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="Components"
          title={t("headerComponents")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <SubMenu
            icon={<WindowsFilled />}
            key="Metrics"
            title="Metrics"
            theme="light"
          >
            <Menu.Item key="Metrics:1">Option 1</Menu.Item>
            <Menu.Item key="Metrics:2">Option 2</Menu.Item>
            <Menu.Item key="Metrics:3">Option 3</Menu.Item>
            <Menu.Item key="Metrics:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            icon={<WindowsOutlined />}
            key="MaterialUI"
            title="Material UI Components"
            theme="light"
          >
            <Menu.Item key="MaterialUI:1">Option 1</Menu.Item>
            <Menu.Item key="MaterialUI:2">Option 2</Menu.Item>
            <Menu.Item key="MaterialUI:3">Option 3</Menu.Item>
            <Menu.Item key="MaterialUI:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            icon={<AndroidFilled />}
            key="Coremat"
            title="Coremat Components"
            theme="light"
          >
            <Menu.Item key="Coremat:1">Option 1</Menu.Item>
            <Menu.Item key="Coremat:2">Option 2</Menu.Item>
            <Menu.Item key="Coremat:3">Option 3</Menu.Item>
            <Menu.Item key="Coremat:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            icon={<RiseOutlined />}
            key="Widgets"
            title="Widgets"
            theme="light"
          >
            <Menu.Item key="Widgets:1">Option 1</Menu.Item>
            <Menu.Item key="Widgets:2">Option 2</Menu.Item>
            <Menu.Item key="Widgets:3">Option 3</Menu.Item>
            <Menu.Item key="Widgets:4">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="Apps"
          title={t("headerApps")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item icon={<MailFilled />} key="Apps:1">
            Mail
          </Menu.Item>
          <Menu.Item icon={<CheckCircleFilled />} key="Apps:2">
            To do
          </Menu.Item>
          <Menu.Item icon={<RiseOutlined />} key="Apps:3">
            Contact
          </Menu.Item>
          <Menu.Item icon={<MessageFilled />} key="Apps:4">
            Chat
          </Menu.Item>
          <Menu.Item icon={<WindowsFilled />} key="Apps:5">
            Kanban Broad
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="Social"
          title={t("headerSocialApps")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item icon={<MehFilled />} key="Social:1">
            Profile
          </Menu.Item>
          <Menu.Item icon={<HddFilled />} key="Social:2">
            Wall App
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="Visualization"
          title={t("headerVisualization")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <SubMenu key="Chart" title="Chart" theme="light">
            <Menu.Item key="Chart:1">Option 1</Menu.Item>
            <Menu.Item key="Chart:2">Option 2</Menu.Item>
            <Menu.Item key="Chart:3">Option 3</Menu.Item>
            <Menu.Item key="Chart:4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="GoogleMaps" title="Google Maps" theme="light">
            <Menu.Item key="GoogleMaps:1">Option 1</Menu.Item>
            <Menu.Item key="GoogleMaps:2">Option 2</Menu.Item>
            <Menu.Item key="GoogleMaps:3">Option 3</Menu.Item>
            <Menu.Item key="GoogleMaps:4">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="Extras"
          title={t("headerExtras")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item key="Extras:1">Option 1</Menu.Item>
          <Menu.Item key="Extras:2">Option 2</Menu.Item>
          <Menu.Item key="Extras:3">Option 3</Menu.Item>
          <Menu.Item key="Extras:4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="Extensions"
          title={t("headerExtensions")}
          theme="light"
          icon={<CaretDownOutlined />}
        >
          <Menu.Item key="Extensions:1">Option 1</Menu.Item>
          <Menu.Item key="Extensions:2">Option 2</Menu.Item>
          <Menu.Item key="Extensions:3">Option 3</Menu.Item>
          <Menu.Item key="Extensions:4">Option 4</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Header;
