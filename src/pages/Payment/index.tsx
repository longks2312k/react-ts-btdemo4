import React, { useContext } from 'react';
import Bills from '../../components/Bills';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'

const Payment = () => {
    const { bgrColor } = useContext(ThemeContext);
    return (
        <div style={{backgroundColor:`${bgrColor}`}}>
            <Header/>
            <Bills />
            <Footer/>
        </div>
    );
};

export default Payment;