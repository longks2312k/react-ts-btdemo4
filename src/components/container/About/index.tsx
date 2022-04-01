import { ContainerFilled, FireFilled, ReadFilled, SwitcherFilled, TagsFilled } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-title"></div>
      <div className="about-content">
        <Space wrap>
          <div className="about-item">
            <div className="about-icon">
              <SwitcherFilled className="about-item-icon" />
            </div>
            <div className="about-item-title">
              <p className="about-item-p">Work at</p>
              <p className="about-item-p2">G-axon Tech Pvt. Ltd.</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <ContainerFilled className="about-item-icon" />
            </div>
            <div className="about-item-title">
              <p className="about-item-p">Birthday</p>
              <p className="about-item-p2">Oct 25, 1994</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <ReadFilled className="about-item-icon" />
            </div>
            <div className="about-item-title">
              <p className="about-item-p">Went to</p>
              <p className="about-item-p2">Oxford University</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <FireFilled className="about-item-icon" />
            </div>
            <div className="about-item-title">
              <p className="about-item-p">Lives in</p>
              <p className="about-item-p2">Switzerland</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-icon">
              <TagsFilled className="about-item-icon" />
            </div>
            <div className="about-item-title">
              <p className="about-item-p">3 Friends Members</p>
              <p className="about-item-p2">Long, Minh, Hung</p>
            </div>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default About;
