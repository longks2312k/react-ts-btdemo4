import React, { useContext } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PaymentTable from '../../components/PaymentTable';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'

const Payment = () => {
    const { bgrColor } = useContext(ThemeContext);
    return (
        <div style={{backgroundColor:`${bgrColor}`}}>
            <Header/>
            <PaymentTable/>
            <Footer/>
        </div>
    );
};

export default Payment;