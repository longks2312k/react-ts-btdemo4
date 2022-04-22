import {
  ContainerFilled,
  FireFilled,
  ReadFilled,
  SwitcherFilled,
  TagsFilled,
} from "@ant-design/icons";
import { Space } from "antd";
import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import '../../../translations/i18n'
import "./style.css";

const About = () => {
  const { textColor, itemColor } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <Space className="about" style={{backgroundColor: `${itemColor}` }}>
      <div className="about-title">
        <div className="about-name">
          <h2 style={{color: `${textColor}`}}>{t("about")}</h2>
        </div>
      </div>
      <div className="about-content">
        <Space wrap>
          <div className="about-item">
            <div className="about-icon">
              <SwitcherFilled style={{color: `${textColor}`}} className="about-item-icon" />
            </div>
            <div className="about-item-title">
              <p className="about-item-p" style={{color: `${textColor}`}}>{t("aboutWorkat")}</p>
              <p className="about-item-p2" style={{color: `${textColor}`}}>G-axon Tech Pvt. Ltd.</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <ContainerFilled className="about-item-icon" style={{color: `${textColor}`}}/>
            </div>
            <div className="about-item-title">
              <p className="about-item-p" style={{color: `${textColor}`}}>{t("aboutBirthday")}</p>
              <p className="about-item-p2" style={{color: `${textColor}`}}>Oct 25, 1994</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <ReadFilled className="about-item-icon" style={{color: `${textColor}`}}/>
            </div>
            <div className="about-item-title">
              <p className="about-item-p" style={{color: `${textColor}`}}>{t("aboutWentTo")}</p>
              <p className="about-item-p2" style={{color: `${textColor}`}}>{t("aboutWentToTitle")}</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <FireFilled className="about-item-icon" style={{color: `${textColor}`}}/>
            </div>
            <div className="about-item-title">
              <p className="about-item-p" style={{color: `${textColor}`}}>{t("aboutLiveIn")}</p>
              <p className="about-item-p2" style={{color: `${textColor}`}}>{t("aboutLiveInTitle")}</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <TagsFilled className="about-item-icon" style={{color: `${textColor}`}}/>
            </div>
            <div className="about-item-title">
              <p className="about-item-p" style={{color: `${textColor}`}}>{t("aboutFriends")}</p>
              <p className="about-item-p2" style={{color: `${textColor}`}}  >Long, Minh, Hung</p>
            </div>
          </div>
        </Space>
      </div>
    </Space>
  );
};

export default About;
