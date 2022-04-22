import React, { useContext } from "react";
import "./style.css";
import { Space } from "antd";
import { MailOutlined, LinkOutlined, PhoneOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import '../../../translations/i18n'

const Contact = () => {
  const { textColor, itemColor } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="contact" style={{backgroundColor: `${itemColor}`}}>
      <div className="Contact-Title">
        <h2 style={{color: `${textColor}`}}>{t("contact")}</h2>
      </div>
      <div className="Contact-Item">
        <Space className="icon-mail-item">
          <MailOutlined className="mail-icon" />
        </Space>
        <div className="item-div">
          <h3 style={{color: `${textColor}`}} className="item-title">{t("contactEmail")}</h3>
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
          <h3 className="item-title" style={{color: `${textColor}`}}>{t("contactWeb")}</h3>
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
          <h3 className="item-title" style={{color: `${textColor}`}}>{t("contactPhone")}</h3>
          <p className="mail" style={{color: `${textColor}`}}>+1-987(454)987</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
