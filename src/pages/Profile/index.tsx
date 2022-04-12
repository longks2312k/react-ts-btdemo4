import React, { useContext } from 'react';
import About from '../../components/container/About';
import Biography from '../../components/container/biography';
import Contact from '../../components/container/contact';
import Events from '../../components/container/events';
import Friends from '../../components/container/friends';
import Information from '../../components/container/information';
import Picture from '../../components/container/Picture';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { ThemeContext } from '../../contexts/ThemeContext';
import './style.css'

const Profile = () => {
    const {bgrColor} = useContext(ThemeContext);
    return (
        <div className='bgr-color' style={{backgroundColor: `${bgrColor}`}}>
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