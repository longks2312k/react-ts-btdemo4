import React, { useContext, useEffect, useState } from "react";
import { Table, Radio, Divider, Row, Col } from "antd";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getProducts } from "./thunk";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { listProductsSelector } from "./slice";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Image",
    dataIndex: "Image",
    render: (image: string) => <img src={`${image}`} />,
  },
  {
    title: "Date",
    dataIndex: "Date",
    render: (date: number) => <a>{date}</a>,
  },
];

interface DataType {
  key: React.Key;
  name: string;
  date: number;
  image: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    date: 1649907330,
    image:
      "https://thuthuattienich.com/wp-content/uploads/2017/02/anh-dai-dien-facebook-doc-3.jpg",
  },
  {
    key: "2",
    name: "Jim Green",
    date: 1649907330,
    image:
      "https://thuthuattienich.com/wp-content/uploads/2017/02/anh-dai-dien-facebook-doc-3.jpg",
  },
  {
    key: "3",
    name: "Joe Black",
    date: 1649907330,
    image:
      "https://thuthuattienich.com/wp-content/uploads/2017/02/anh-dai-dien-facebook-doc-3.jpg",
  },
  {
    key: "4",
    name: "Disabled User",
    date: 1649907330,
    image:
      "https://thuthuattienich.com/wp-content/uploads/2017/02/anh-dai-dien-facebook-doc-3.jpg",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    // disabled: record.name === 'Disabled User', // Column configuration not to be checked
    // name: record.name,
  }),
};

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
      {/* <Divider />
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      /> */}
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
