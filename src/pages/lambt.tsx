import { Button, Col, Row, Space } from "antd";
import Item from "antd/lib/list/Item";
import React, { useCallback, useState } from "react";

const obj1 = {
    0: {
        id: 1,
        name: 'dog',
        type: 'vatnuoi',
    },
    1: {
        id: 2,
        name: 'cat',
        type: 'vatnuoi',
    },
    2: {
        id: 3,
        name: 'car',
        type: 'phongtien',
    },
};

console.log(obj1);


const obj2 = [
    {
        id: 1,
        username: 'name1',
        item: [
            {id: 1, status: 1,name:'item1'},
            {id: 2, status: 2,name:'item2'}
        ]
    },
    {
        id: 2,
        username: 'name2',
        item: [
            {id: 1, status: 3,name:'item11'},
            {id: 2, status: 1,name:'item12'}
        ]
    },
    {
        id: 1,
        username: 'name1',
        item: [
            {id: 1, status: 2,name:'item21'},
            {id: 2, status: 3,name:'item22'}
        ]
    },
];


console.log(obj2);


function Baitap() {
    const [reset, setReset] = useState(1)
    console.log(reset);
    
    const onItemClick = useCallback((e) => {
        if (e.status <3) {
            e.status += 1;
        } else {
            e.status = 1;
        }
        setReset(reset + 1);
        // console.log(obj2);
    },[reset])

    return (
      <div style={{padding: 40}}>
        <Space wrap>
            {obj2.map((item,index) => (
                <Col key={index} style={{height: 300, width: 360, backgroundColor: 'greenyellow',margin: 10,padding: 20}}>
                    <h1>{item.username}</h1>
                    {item.item.map((e) => (
                        <Row key={e.id}>
                            <h2>Status: {e.status}</h2>
                            <Button style={{marginLeft:10}} type="primary" onClick={() => onItemClick(e)}>
                               Change Status Item {e.id}
                            </Button>
                        </Row>
                    ))}
                    
                </Col>
            ))}
        </Space>
        <Button style={{marginLeft:10}} type="primary" onClick={() => {
            const array1 = Object.values(obj1)
            array1.map((e) => {
                if(e.type === 'vatnuoi') {
                    Object.assign(e ,{piece: "tren 100k"});
                }
                else if (e.type === 'phongtien') {
                    Object.assign(e ,{piece: "tren 100m"});
                }
                return e
              });
            console.log(array1);
        }}>
          obj2 Click
        </Button>
      </div>
    );
  }
  
  export default Baitap;