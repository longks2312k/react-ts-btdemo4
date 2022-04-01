import React from 'react';
import { Space, Image } from 'antd';
import './style.css'

interface Product{
    id: number
    src: string
    name?: string
}
const productList = [
    {
        id: 1,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 2,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 3,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 4,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 5,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 6,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 7,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 8,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
    {
        id: 9,
        src:'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
        name: ''
    },
]

const Picture = () => {
    return (
        <div className='picture'>
            <div className="picture-Title">
                <h2>Picture</h2>
            </div>
            <Space wrap className='list-item scroll'>
                {productList.map((item: Product)=>(
                    <Image
                        key={item.id}
                        className='picture-item'
                        placeholder={true}
                        alt={item.name}
                        preview={false}
                        src={item.src}>
                    </Image>
                ))}
            </Space>
        </div>
    );
};

export default Picture;