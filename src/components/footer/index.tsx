import { Button } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'

const Footer = () => {
    const { textColor, itemColor } = useContext(ThemeContext);
    return (
        <div className='footer' style={{backgroundColor: `${itemColor}`}}>
            <div className='footer-logo'>
                <img className='logo-img' src="https://jumbo.g-axon.work/images/footer-logo.png" alt="" />
                <p className='logo-title' style={{color: `${textColor}`}}>Copyright Company Name © 2022</p>
            </div>
            <div className='footer-info'>
                <Button className='btn-buy' type="primary" size='large'>
                    <Link to={'/tables'}>Buy Now</Link>
                </Button>
            </div>
        </div>
    );
};

export default Footer;