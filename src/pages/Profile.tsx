import { Button } from 'antd';
import React from 'react';
import About from '../components/container/About/About';
import Biography from '../components/container/biography/Biography';
import Contact from '../components/container/contact/Contact';
import Friends from '../components/container/friends/Friends';
import Information from '../components/container/information/information';
import Picture from '../components/container/Picture/Picture';
import Footer from '../components/footer/Footer';
import Header from '../components/header/header';
import './profile.css'

const Profile = () => {
    return (
        <div className='bgr-color'>
            <Header/>
            <Information/>
            <Contact/>
            <Friends/>
            <Picture/>
            <About/>
            <Biography/>
            <Footer/>
        </div>
    );
};

export default Profile;