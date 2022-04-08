import React, { useState } from "react";
import { Space, Image, Input } from "antd";
import "./style.css";
import ModalBtn from "../Modalbtn";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { searchPictureSelector } from "./pictureSlice";
import { searchName } from "./searchSlice";

const { Search } = Input;

const Picture = () => {
  const productList = useAppSelector(searchPictureSelector);
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState("");
  const onSearch = (e: any) => {
    setSearchText(e.target.value);
    dispatch(searchName(e.target.value));
  };

  return (
    <div className="picture">
      <div className="picture-Title">
        <h2>Picture</h2>
        <Search
          value={searchText}
          placeholder="input search text"
          className="search-input"
          onChange={onSearch}
          enterButton
        />
        <ModalBtn />
      </div>
      <div className="list-item">
        <Space align="start" size={[8, 16]} wrap className="scroll">
          {productList.map((item) => (
            <Image
              key={item.id}
              className="picture-item"
              placeholder={true}
              alt={item.name}
              preview={false}
              src={item.src}
            ></Image>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Picture;
