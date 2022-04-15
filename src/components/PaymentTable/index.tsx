import React, { useContext, useEffect } from "react";
import { Row, Col, Button, Space } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getProducts } from "./thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listProductsSelector } from "./slice";
import { PlusCircleFilled } from "@ant-design/icons";
import { addPayment } from "./paymentSlice";

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
                onClick={() => {
                  dispatch(
                    addPayment({
                      id: item.id,
                      name: item.product_name,
                      image: item.image,
                      piece: item.piece,
                      number: 1,
                    })
                  );
                }}
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
