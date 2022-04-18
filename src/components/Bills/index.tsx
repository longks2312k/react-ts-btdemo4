import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { Row, Col, Button, Space } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { PaymentState } from "../PaymentTable/paymentSlice";
import {
  CloseOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

const Bills = () => {
  const { itemColor, textColor } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const [payment, setPayment] = useState<Array<PaymentState>>([]);
  const [reset, setReset] = useState(0)

  //get list sp từ localStorage
  useEffect(() => {
    const localStore = localStorage.getItem("addToCart");
    if (localStore) {
      setPayment(JSON.parse(localStore));
    }
  }, [reset]);

  // hàm tính tổng
  const totalMoney = payment.reduce(
    (acc, ele) => acc + Number(ele.piece) * ele.count,
    0
  );
  const totalItem = payment.reduce((acc, ele) => acc + ele.count, 0);

  // tăng giảm sp
  const changeNumberPayment = (item: PaymentState, type: string) => {
    const findIndex = payment.findIndex((e: PaymentState) => e.id === item.id);
    if (findIndex > -1) {
      if (type === "increase") {
        if (payment[findIndex].id === item.id) {
          payment[findIndex].count += 1;
        }
      } else {
        if (payment[findIndex].id === item.id) {
          if (payment[findIndex].count > 1) {
            payment[findIndex].count -= 1;
          }
        }
      }
      localStorage.setItem("addToCart", JSON.stringify(payment));
    }
    setReset(reset +1);
  };

  // xóa sp
  const remotePayment = (item: PaymentState) => {
    const findIndex = payment.findIndex((e: PaymentState) => e.id === item.id);
    if (findIndex > -1) {
      const newPayment = payment.filter((e: PaymentState) => e.id !== item.id);
      localStorage.setItem("addToCart", JSON.stringify(newPayment));
    }
    setReset(reset +1);
  };

  // xóa toàn bộ sp
  const remoteAllPayment = () => {
    localStorage.removeItem("addToCart");
    setPayment([]);
  };

  return (
    <div className="bill-payment" style={{ backgroundColor: `${itemColor}` }}>
      <Row>
        <Col span={18}>
          <h1 style={{ marginRight: 20 }}>Tổng sản phẩm: {totalItem}</h1>
          <h1>Tổng tiền: {totalMoney}đ</h1>
        </Col>
        <Col span={6}>
          <Space wrap>
            {!totalMoney ? (
              <Button type="primary" className="bill-remote-btn">
                <Link to={"/"}>Back to Home</Link>
              </Button>
            ) : (
              <Button
                type="primary"
                className="bill-remote-btn"
                onClick={remoteAllPayment}
              >
                Remote All
              </Button>
            )}
            <Button type="primary" className="bill-remote-btn">
              Add Bill
            </Button>
          </Space>
        </Col>
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
            <h1 style={{ color: `${textColor}` }}>{item.name}</h1>
            <h2 style={{ color: `${textColor}` }}>Giá: {item.piece}đ</h2>
          </Col>
          <Col className="table-item-button" span={5}>
            <Col style={{ height: "40%" }}>
              <Button
                className="bill-add-btn"
                type="text"
                onClick={() => {
                  changeNumberPayment(item, "increase");
                }}
                icon={<PlusCircleFilled className="bill-add-icon" />}
              ></Button>
            </Col>
            <Col style={{ height: "20%" }}>
              <h1>Số lượng: {item.count}</h1>
            </Col>
            <Col style={{ height: "40%" }}>
              <Button
                className="bill-add-btn"
                type="text"
                onClick={() => {
                  changeNumberPayment(item, "decrease");
                }}
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
