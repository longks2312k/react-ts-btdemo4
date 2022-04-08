import React from 'react';
import { Space, Image } from 'antd';
import './style.css'
import ModalBtn from '../Modalbtn';
import { useAppSelector } from '../../../app/hooks';
import { selectPicture } from './pictureSlice';



const Picture = () => {
    const productList = useAppSelector(selectPicture)

    return (
        <div className='picture'>
            <div className="picture-Title">
                <h2>Picture</h2>
                <ModalBtn/>
            </div>
            <div className='list-item'>
                <Space align='start' size={[8, 16]} wrap className='scroll'>
                    {productList.map((item)=>(
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
        </div>
    );
};

export default Picture;