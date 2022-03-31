import React from 'react';
import { Col, Row } from 'antd';
import './Picture.css'

const Picture = () => {
    return (
        <div className='picture'>
            <div className="picture-Title">
                <h2>Picture</h2>
            </div>
            <Row className='list-item'>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
            </Row>
            {/* <Row className='list-item'>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
            </Row>
            <Row className='list-item'>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
                <img className='picture-item' src='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'>
                    
                </img>
            </Row> */}
        </div>
    );
};

export default Picture;