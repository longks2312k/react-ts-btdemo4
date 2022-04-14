import React, { useContext } from "react";
import { Space, Image, Col, Row, Button } from "antd";
import "./style.css";
import ModalBtn from "./Modalbtn";
import {  useAppDispatch, useAppSelector } from "../../../store/hooks";
import { remotePicture, searchPictureSelector } from "./pictureSlice";
import { CloseOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Picture = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(searchPictureSelector);
  const { textColor, itemColor } = useContext(ThemeContext);

  return (
    <div className="picture" style={{backgroundColor: `${itemColor}`}}>
      <Space align="baseline" className="picture-Title">
        <div className="picture-h2-title">
          <h2 style={{color: `${textColor}`}}>Picture</h2>
        </div>
        <div className="picture-combo-btn">
          <ModalBtn/>
        </div>  
      </Space>
      <div className="list-item">
        <Space align="start" size={[8, 16]} wrap className="scroll">
          {productList.map((item) => (
            <div className="picture-item" key={item.id}>
              <Row className="picture-item-header">
                <Col span={22}>
                  <h3 className="picture-name" style={{color: `${textColor}`}}>{item.name}</h3>
                </Col>
                <Col span={2}>
                  <Button
                    className="btn-delete-picture"
                    style={{color: `${textColor}`}}
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={() => {
                      dispatch(remotePicture(item.id))
                    }}
                  ></Button>
                </Col>
              </Row>
              <Image
                className="picture-item"
                placeholder={true}
                alt={item.name}
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
