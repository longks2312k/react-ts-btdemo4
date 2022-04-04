import React from 'react';
import { Space, Image } from 'antd';
import './style.css'
import ModalBtn from '../Modalbtn';

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
        src:'https://vaithuhayho.com/wp-content/uploads/2021/03/anh-gai-dep-61.jpg',
        name: ''
    },
    {
        id: 3,
        src:'https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-2.jpg',
        name: ''
    },
    {
        id: 4,
        src:'https://freenice.net/wp-content/uploads/2021/09/Hinh-anh-gai-xinh-deo-kinh-1.jpg',
        name: ''
    },
    {
        id: 5,
        src:'https://tophinhanh.com/wp-content/uploads/2022/01/58_anh-gai-xinh-de-thuong-2k1-2k4-2k5-2k7-cute-nhat-564x375.jpg',
        name: ''
    },
    {
        id: 6,
        src:'https://haycafe.vn/wp-content/uploads/2022/02/Tai-anh-gai-xinh-Viet-Nam-de-thuong.jpg',
        name: ''
    },
    {
        id: 7,
        src:'https://bigdata-vn.com/wp-content/uploads/2021/10/1634768075_418_Hinh-anh-gai-xinh-de-thuong-cute-va-dang-yeu.jpg',
        name: ''
    },
    {
        id: 8,
        src:'https://i.pinimg.com/564x/f7/a5/48/f7a5489830eef765b2ba8bc77f66e25d.jpg',
        name: ''
    },
    {
        id: 9,
        src:'https://1.bigdata-vn.com/wp-content/uploads/2021/12/Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg',
        name: ''
    },
]

const Picture = () => {
    return (
        <div className='picture'>
            <div className="picture-Title">
                <h2>Picture</h2>
                <ModalBtn/>
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