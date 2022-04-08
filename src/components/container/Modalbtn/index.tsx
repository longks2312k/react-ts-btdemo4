import React, { useState } from "react";
import "./style.css";
import { useAppDispatch } from "../../../app/hooks";
import { v4 as uuid4 } from "uuid"
import { Button, Input, Modal } from "antd";
import { addPicture } from "../Picture/pictureSlice";

const ModalBtn = () => {
  const [source, setSource] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  //Add
  const onAdd = () => {
    dispatch(
      addPicture({
        id: uuid4(),
        src: source,
        name: name,
      })
    );
    setIsModalVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div>
        <div className="btn-add">
          <Button
            className="btn-modal"
            type="primary"
            onClick={handleOpenModal}
          >
            Add New Picture
          </Button>
        </div>
        <Modal
          title="Add New Product"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <div className="input-text">
            <Input
              onChange={(e) => setSource(e.target.value)}
              placeholder="Picture source"
              type="text"
              className="ant-input"
            />
          </div>
          <div className="input-text">
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Picture Name"
              type="text"
              className="ant-input"
            />
          </div>
          <div className="div-button">
            <Button onClick={onAdd} className="btn-modal" type="primary">
              Add New Product
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalBtn;
