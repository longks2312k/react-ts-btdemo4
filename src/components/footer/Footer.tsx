import { Button } from 'antd';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img className='logo-img' src="https://jumbo.g-axon.work/images/footer-logo.png" alt="" />
                <p className='logo-title'>Copyright Company Name © 2022</p>
            </div>
            <div className='footer-info'>
                <Button className='btn-buy' type="primary" size='large'>BUY NOW</Button>
            </div>
        </div>
    );
};

export default Footer;