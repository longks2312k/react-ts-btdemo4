import { Col, Row, Space } from 'antd';
import React from 'react';
import './Friends.css'

const Friends = () => {
    return (
        <div className='friend'>
            <div className="friend-Title">
                <h2>Friends</h2>
            </div>
            <Space wrap className='list-item'>
                <Col className='friend-item image-1'>
                    <div className='margin-top'>
                        <div className='item-tick'>
                            <div className='item-tick-is'></div>
                        </div>
                    </div>
                    <p className='friend-name'>Annie</p>
                </Col>
                <Col className='friend-item image-2'>
                    <div className='margin-top'>
                        <div className='item-tick'>
                            <div className='item-tick-is'></div>
                        </div>
                    </div>
                    <p className='friend-name'>Lisa</p>
                </Col>
                <Col className='friend-item image-3'>
                    <div className='margin-top'>
                        <div className='item-tick'>
                            <div className='item-tick-is'></div>
                        </div>
                    </div>
                    <p className='friend-name'>Mai</p>
                </Col>
                <Col className='friend-item image-4'>
                    <div className='margin-top'>
                        <div className='item-tick'>
                            <div className='item-tick-is'></div>
                        </div>
                    </div>
                    <p className='friend-name'>Yam</p>
                </Col>
                <Col className='friend-item image-5'>
                    <div className='margin-top'>
                        <div className='item-tick'>
                            <div className='item-tick-is'></div>
                        </div>
                    </div>
                    <p className='friend-name'>Jinx</p>
                </Col>
                <Col className='friend-item image-6'>
                    <div className='margin-top'>
                        <div className='item-tick'>
                            <div className='item-tick-is'></div>
                        </div>
                    </div>
                    <p className='friend-name'>Linda</p>
                </Col>
            </Space>
            <Row className='list-item'>
                
            </Row>
        </div>
    );
};

export default Friends;