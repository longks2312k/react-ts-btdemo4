import { Col, Row, Space,} from 'antd';
import React from 'react';
import './style.css'

interface Product{
    id: number
    src?: string
    name: string
}
const productList = [
    {
        id: 1,
        src:'',
        name: 'Linh'
    },
    {
        id: 2,
        src:'',
        name: 'Lan'
    },
    {
        id: 3,
        src:'',
        name: 'Phuong'
    },
    {
        id: 4,
        src:'',
        name: 'Huong'
    },
    {
        id: 5,
        src:'',
        name: 'Thao'
    },
    {
        id: 6,
        src:'',
        name: 'Ly'
    },
]

const Friends = () => {
    return (
        <div className='friend'>
            <div className="friend-Title">
                <h2>Friends</h2>
            </div>
            <Space wrap className='list-item'>
                {productList.map((item: Product)=>(
                    <Col key={item.id} className='friend-item image-1'>
                        <div className='margin-top'>
                            <div className='item-tick'>
                                <div className='item-tick-is'></div>
                            </div>
                        </div>
                        <p className='friend-name'>{item.name}</p>
                    </Col>
                ))}
            </Space>
            <Row className='list-item'>
                
            </Row>
        </div>
    );
};

export default Friends;