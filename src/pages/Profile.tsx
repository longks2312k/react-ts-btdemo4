import React from 'react';
import About from '../components/container/About';
import Biography from '../components/container/biography';
import Contact from '../components/container/contact';
import Events from '../components/container/events';
import Friends from '../components/container/friends';
import Information from '../components/container/information';
import Picture from '../components/container/Picture';
import Footer from '../components/footer';
import Header from '../components/header';
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
            <Events/>
            <Footer/>
        </div>
    );
};

export default Profile;