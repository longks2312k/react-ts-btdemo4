import React from "react";
import { Space, Image, Col, Row, Button } from "antd";
import "./style.css";
import ModalBtn from "./Modalbtn";
import {  useAppDispatch, useAppSelector } from "../../../app/hooks";
import { remotePicture, searchPictureSelector } from "./pictureSlice";
import { CloseOutlined } from "@ant-design/icons";

const Picture = () => {
  const dispatch = useAppDispatch();
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
              <Row className="picture-item-header">
                <Col span={22}>
                  <h3 className="picture-name">{item.name}</h3>
                </Col>
                <Col span={2}>
                  <Button
                    className="btn-delete-picture"
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
