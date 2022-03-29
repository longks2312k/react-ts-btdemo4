import React from 'react';
import './Friends.css'

const Friends = () => {
    return (
        <div className='friend'>
            <div className="friend-Title">
                <h2>Friends</h2>
            </div>
            <div className='list-item'>
                <div className='friend-item'>
                    <div className='margin-top'></div>
                    <p className='friend-name'>Annie</p>
                </div>
                <div className='friend-item'>
                    <div className='margin-top'></div>
                    <p className='friend-name'>Lisa</p>
                </div>
                <div className='friend-item'>
                    <div className='margin-top'></div>
                    <p className='friend-name'>Mai</p>
                </div>
            </div>
            <div className='list-item'>
                <div className='friend-item'>
                    <div className='margin-top'></div>
                    <p className='friend-name'>Yam</p>
                </div>
                <div className='friend-item'>
                    <div className='margin-top'></div>
                    <p className='friend-name'>Jinx</p>
                </div>
                <div className='friend-item'>
                    <div className='margin-top'></div>
                    <p className='friend-name'>Linda</p>
                </div>
            </div>
        </div>
    );
};

export default Friends;