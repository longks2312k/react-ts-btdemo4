import React from "react";
import { Space, Image } from "antd";
import "./style.css";
import ModalBtn from "./Modalbtn";
import {  useAppSelector } from "../../../app/hooks";
import { searchPictureSelector } from "./pictureSlice";

const Picture = () => {
  const productList = useAppSelector(searchPictureSelector);

  return (
    <div className="picture">
      <Space align="baseline" className="picture-Title">
        <div className="picture-h2-title">
          <h2>Picture</h2>
        </div>
        <div className="picture-combo-btn">
          <ModalBtn/>
        </div>  
      </Space>
      <div className="list-item">
        <Space align="start" size={[8, 16]} wrap className="scroll">
          {productList.map((item) => (
            <div className="picture-item" key={item.id}>
              <h3 className="picture-name">{item.name}</h3>
              <Image
                className="picture-item"
                placeholder={true}
                alt={item.name}
                preview={false}
                src={item.src}
              ></Image>
            </div>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Picture;
