import React, { useContext } from "react";
import "./style.css";
import { Space } from "antd";
import { MailOutlined, LinkOutlined, PhoneOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../../contexts/ThemeContext";
const Contact = () => {
  const { textColor, itemColor } = useContext(ThemeContext);
  return (
    <div className="contact" style={{backgroundColor: `${itemColor}`}}>
      <div className="Contact-Title">
        <h2 style={{color: `${textColor}`}}>Contact</h2>
      </div>
      <div className="Contact-Item">
        <Space className="icon-mail-item">
          <MailOutlined className="mail-icon" />
        </Space>
        <div className="item-div">
          <h3 style={{color: `${textColor}`}} className="item-title">Email</h3>
          <p className="mail" style={{color: `${textColor}`}}>
            <a href="mailto:domnicharris@example.com">
              domnicharris@example.com
            </a>
          </p>
        </div>
      </div>
      <div className="Contact-Item">
        <Space className="icon-link-item">
          <LinkOutlined className="link-icon" />
        </Space>
        <div className="item-div">
          <h3 className="item-title" style={{color: `${textColor}`}}>Web Page</h3>
          <p className="mail" style={{color: `${textColor}`}}>
            <a href="https://www.domnic.com/">www.domnic.com</a>
          </p>
        </div>
      </div>
      <div className="Contact-Item">
        <Space className="icon-phone-item">
          <PhoneOutlined className="phone-icon" />
        </Space>
        <div className="item-div">
          <h3 className="item-title" style={{color: `${textColor}`}}>Phone</h3>
          <p className="mail" style={{color: `${textColor}`}}>+1-987(454)987</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
