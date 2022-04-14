import React, { useContext, useEffect } from "react";
import { Row, Col } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getProducts } from "./thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listProductsSelector } from "./slice";

const PaymentTable = () => {
  const { itemColor } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector(listProductsSelector);

  console.log('rs',product);

  useEffect(() => {
    dispatch(getProducts(true));
  }, [dispatch]);

  return (
    <div className="table-payment" style={{ backgroundColor: `${itemColor}` }}>
      {loading && <div>loading...</div>}
      {product.map((item) =>
          <Row key={item.id} className="table-item" style={{backgroundColor: '#f4f4f7'}}>
            <Col className="" span={4}>
              <img className="table-item-img" src={item.image} alt="" />
            </Col>
            <Col className="table-item-content" span={14}>
              <h2 className="">{item.product_name}</h2>
              <p>{item.title}</p>
            </Col>
            <Col className="table-item-button" span={3}>
              <h3>{item.id}</h3>
            </Col>
            <Col className="table-item-button" span={3}>
              <h3>{item.id}</h3>
            </Col>
          </Row>
        )
      }
    </div>
  );
};

export default PaymentTable;
