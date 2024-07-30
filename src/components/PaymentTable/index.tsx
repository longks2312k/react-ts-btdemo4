import React, { useContext, useEffect } from "react";
import { Row, Col, Button, Space } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import {  getProducts } from "./thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listProductsSelector } from "./slice";
import { PlusCircleFilled } from "@ant-design/icons";
import { BillsArray, ProductResponse } from "../../types";

const PaymentTable = () => {
  const { itemColor } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector(listProductsSelector);

  useEffect(() => {
    dispatch(getProducts(true));
  }, [dispatch]);

  const addClick = (item: ProductResponse) => {
    const array = {
      id: item.id,
      name: item.product_name,
      piece: item.piece,
      image: item.image,
      count: 1,
    };
    const array2 = localStorage.getItem("addToCart");
    if (!array2) {
      localStorage.setItem("addToCart", JSON.stringify([array]));
    } else {
      const array3 = JSON.parse(array2);
      const findIndex = array3.findIndex((e: BillsArray) => e.id === item.id)
      if( findIndex === -1 ) {
        array3.push(array)
      } else {
        // tăng count
        array3.map((e: BillsArray) => {
          if(e.id === item.id) {
            e.count += 1;
          }
          return e
        });
      }
      localStorage.setItem("addToCart", JSON.stringify(array3));
    }
    alert(`Đã thêm ${item.product_name} vào giỏ hàng!`)
  }

  return (
    <div className="table-payment" style={{ backgroundColor: `${itemColor}` }}>
      {loading && <div>loading...</div>}
      <Space className="table-scroll">
        {product.map((item) => (
          <Row
            key={item.id}
            className="table-item"
            style={{ backgroundColor: "#f4f4f7" }}
          >
            <Col className="" span={4}>
              <img className="table-item-img" src={item.image} alt="" />
            </Col>
            <Col className="table-item-content" span={16}>
              <h2 className="">
                {item.product_name} - Giá: {item.piece}đ
              </h2>
              <p>{item.title}</p>
            </Col>
            <Col className="table-item-button" span={4}>
              <Button
                className="table-add-btn"
                type="text"
                onClick={() => addClick(item)}
                icon={<PlusCircleFilled className="table-add-icon" />}
              ></Button>
            </Col>
          </Row>
        ))}
      </Space>
    </div>
  );
};

export default PaymentTable;
