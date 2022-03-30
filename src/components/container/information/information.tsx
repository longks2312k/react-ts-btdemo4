import React from 'react';
import './information.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Information = () => {
    return (
        <div className='info'>
            <div className='info-avatar'>
                <img className='avatar-img' src='https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg'/>
                <div className='profile-name'>
                    <h2 className='name'>Marry Brown</h2>
                    <p className='from'>Florida, USA</p>
                </div>
            </div>
            <div className='info-item'>
                <div className='like-follow'>
                    <div style={{flex:1}}></div>
                    <div style={{flex:1}} className='center'>
                        <h3 className='info-h3'>2k+</h3>
                        <p className='follower'>Follower</p>
                    </div>
                    <div style={{backgroundColor:'rgb(207, 199, 199, 0.5)',width:'1.2px',marginTop:'10px'}}></div>
                    <div style={{flex:1}} className='center'>
                        <h3 className='info-h3'>117</h3>
                        <p className='following'>Following</p>
                    </div>
                    <div style={{backgroundColor:'rgb(207, 199, 199, 0.5)',width:'1.2px',marginTop:'10px'}}></div>
                    <div style={{flex:1}} className='center'>
                        <h3 className='info-h3'>327</h3>
                        <p className='friends'>Friends</p>
                    </div>
                </div>
                <div className='info-tab-bar'>
                    <Tabs defaultActiveKey="1" className='tab-bar-style' type='line' tabBarStyle={{backgroundColor:'rgb(49 62 114)'}}>
                        <TabPane tab="TimeLine" key="1">
                        </TabPane>
                        <TabPane tab="About" key="2">
                        </TabPane>
                        <TabPane tab="Photo" key="3">
                        </TabPane>
                        <TabPane tab="Friends" key="4">
                        </TabPane>
                        <TabPane tab="More" key="5">
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Information;