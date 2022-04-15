import React, { useContext, useEffect } from "react";
import { Row, Col, Button } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getProducts } from "./thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listProductsSelector } from "./slice";
import { PlusCircleFilled } from "@ant-design/icons";

const PaymentTable = () => {
  const { itemColor } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector(listProductsSelector);

  useEffect(() => {
    dispatch(getProducts(true));
    
  }, [dispatch]);

  return (
    <div className="table-payment" style={{ backgroundColor: `${itemColor}` }}>
      {loading && <div>loading...</div>}
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
              onClick={() => {
                console.log();
                
              }}
              icon={<PlusCircleFilled className="table-add-icon" />}
            ></Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default PaymentTable;
