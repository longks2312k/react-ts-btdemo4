import { Button } from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'

const Footer = () => {
    const { bgrColor, textColor, itemColor } = useContext(ThemeContext);
    return (
        <div className='footer' style={{backgroundColor: `${itemColor}`}}>
            <div className='footer-logo'>
                <img className='logo-img' src="https://jumbo.g-axon.work/images/footer-logo.png" alt="" />
                <p className='logo-title' style={{color: `${textColor}`}}>Copyright Company Name © 2022</p>
            </div>
            <div className='footer-info'>
                <Button className='btn-buy' type="primary" size='large'>BUY NOW</Button>
            </div>
        </div>
    );
};

export default Footer;