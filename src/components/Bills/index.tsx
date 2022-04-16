import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useAppDispatch } from "../../store/hooks";
import {  PaymentState } from "../PaymentTable/paymentSlice";
import { CloseOutlined, MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";

const Bills = () => {
  const { itemColor } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  // const payment = useAppSelector(getPaymentSelector);

  const [payment, setPayment] = useState<Array<PaymentState>>([])
  const [reset ,setReset] = useState(1);
  useEffect(() => {
    const localStore = localStorage.getItem("addToCart");
    if (localStore) {
      setPayment(JSON.parse(localStore));
    }
  },[reset])

  // ham tinh tong
  const totalMoney = payment.reduce((acc, ele) => acc + Number(ele.piece) * ele.count , 0)
  const totalItem = payment.reduce((acc, ele) => acc + ele.count, 0)

  // tang sp
  const upNumberPayment = (item: PaymentState) => {
    const findIndex = payment.findIndex((e: PaymentState) => e.id === item.id)
    if (findIndex > -1) {
      payment.map((e: PaymentState) => {
        if(e.id === item.id) {
          e.count += 1;
        }
        return e
      });
      localStorage.setItem("addToCart", JSON.stringify(payment));
    }
    setReset(reset + 1);
  }

  // giam sp
  const reduceNumberPayment = (item: PaymentState) => {
    const findIndex = payment.findIndex((e: PaymentState) => e.id === item.id)
    if (findIndex > -1) {
      payment.map((e: PaymentState) => {
        if(e.id === item.id) {
          if(e.count > 1) {
            e.count -= 1;
          }
        }
        return e
      });
      localStorage.setItem("addToCart", JSON.stringify(payment));
    }
    setReset(reset + 1);
  }

  // xoa sp
  const remotePayment = (item: PaymentState) => {
    const findIndex = payment.findIndex((e: PaymentState) => e.id === item.id)
    if (findIndex > -1) {
      const newPayment = payment.filter((e: PaymentState) => e.id !== item.id);
      localStorage.setItem("addToCart", JSON.stringify(newPayment));
    }
    setReset(reset + 1);
  }

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
                onClick={() => upNumberPayment(item)}
                icon={<PlusCircleFilled className="bill-add-icon" />}
              ></Button>
            </Col>
            <Col style={{ height: "20%"}}>
              <h1>Số lượng: {item.count}</h1>
            </Col>
            <Col style={{ height: "40%"}}>
            <Button
                className="bill-add-btn"
                type="text"
                onClick={() => reduceNumberPayment(item)}
                icon={<MinusCircleFilled className="bill-add-icon" />}
              ></Button>
            </Col>
          </Col>
          <Col className="" span={1}>
          <Button
                className="bill-close-btn"
                type="text"
                onClick={() => remotePayment(item)}
                icon={<CloseOutlined className="bill-close-icon" />}
              ></Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Bills;
