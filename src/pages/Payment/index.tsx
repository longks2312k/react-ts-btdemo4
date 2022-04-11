import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PaymentTable from '../../components/PaymentTable';
import './style.css'

const Payment = () => {
    return (
        <>
            <Header/>
            <PaymentTable/>
            <Footer/>
        </>
    );
};

export default Payment;