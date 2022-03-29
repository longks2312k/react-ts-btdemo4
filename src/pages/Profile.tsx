import { Button } from 'antd';
import React from 'react';
import Contact from '../components/container/contact/Contact';
import Friends from '../components/container/friends/Friends';
import Information from '../components/container/information/information';
import Picture from '../components/container/Picture/Picture';
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
        </div>
    );
};

export default Profile;