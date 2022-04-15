import React, { useContext } from "react";
import { Row, Col, Button } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPaymentSelector, remotePayment, upNumberPayment, reduceNumberPayment } from "../PaymentTable/paymentSlice";
import { CloseOutlined, MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";

const Bills = () => {
  const { itemColor } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const payment = useAppSelector(getPaymentSelector);

  const totalMoney = payment.reduce((acc, ele) => acc + Number(ele.piece) * ele.number , 0)
  const totalItem = payment.reduce((acc, ele) => acc + ele.number, 0)

  return (
    <div className="bill-payment" style={{ backgroundColor: `${itemColor}` }}>
      <Row>
        <h1 style={{marginRight:20}}>Tổng sản phẩm: {totalItem}</h1>
        <h1>Tổng tiền: {totalMoney}đ</h1>
      </Row>
      {payment.map((item) => (
        <Row
          key={item.id}
          className="table-item"
          style={{ backgroundColor: "#f4f4f7" }}
        >
          <Col className="" span={7}>
            <img src={item.image} className="payment-item-image" alt="anh" />
          </Col>
          <Col className="table-item-content" span={11}>
            <h1>{item.name}</h1>
            <h2>Giá: {item.piece}đ</h2>
          </Col>
          <Col className="table-item-button" span={5}>
            <Col style={{ height: "40%"}}>
              <Button
                className="bill-add-btn"
                type="text"
                onClick={() => {
                  dispatch(upNumberPayment(item.id))
                }}
                icon={<PlusCircleFilled className="bill-add-icon" />}
              ></Button>
            </Col>
            <Col style={{ height: "20%"}}>
              <h1>Số lượng: {item.number}</h1>
            </Col>
            <Col style={{ height: "40%"}}>
            <Button
                className="bill-add-btn"
                type="text"
                onClick={() => {
                  dispatch(reduceNumberPayment(item.id))
                }}
                icon={<MinusCircleFilled className="bill-add-icon" />}
              ></Button>
            </Col>
          </Col>
          <Col className="" span={1}>
          <Button
                className="bill-close-btn"
                type="text"
                onClick={() => {
                  dispatch(remotePayment(item.id));
                }}
                icon={<CloseOutlined className="bill-close-icon" />}
              ></Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Bills;
