import React, { useState } from "react";
import "./style.css";
import { useAppDispatch } from "../../../../app/hooks";
import { v4 as uuid4 } from "uuid";
import { Button, Input, Modal, Space } from "antd";
import { addPicture, remoteAll } from "../pictureSlice";
import { DeleteTwoTone, PlusCircleTwoTone, SearchOutlined } from "@ant-design/icons";
import { searchName } from "../searchSlice";

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

  const [isSearch, setIsSearch] = useState(false);
  const handleOpenSearch = () => {
    setIsSearch(!isSearch);
  };

  const [searchText, setSearchText] = useState("");
  const onSearch = (e: any) => {
    setSearchText(e.target.value);
    dispatch(searchName(e.target.value));
  };

  const handleRemoteStore = () => {
    dispatch(remoteAll());
  }

  return (
    <div>
      <div>
        <Space align="end" className="btn-add">
          {isSearch === true ? (
            <Input
              value={searchText}
              placeholder=" Search"
              className="picture-search-input"
              onChange={onSearch}
            />
          ) : (
            <></>
          )}
          <Button
            className="btn-modal"
            type="text"
            icon={<SearchOutlined className="search-icon" />}
            onClick={handleOpenSearch}
          ></Button>
          <Button
            className="btn-modal"
            type="text"
            icon={<PlusCircleTwoTone className="add-icon" />}
            onClick={handleOpenModal}
          ></Button>
          <Button
            className="btn-modal"
            type="text"
            icon={<DeleteTwoTone className="add-icon" />}
            onClick={handleRemoteStore}
          ></Button>
        </Space>
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
            <Button onClick={onAdd} className="btn-add-modal" type="primary">
              Add New Product
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalBtn;
