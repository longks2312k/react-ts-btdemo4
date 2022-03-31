import { ArrowRightOutlined, CalendarOutlined, StarFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import './Events.css'

const Events = () => {
    return (
        <div className='events'>
            <div className='event-title'>
                <h2>Events</h2>
            </div>
            <p className='event-little-title'>What Kiley is up to</p>
            <div className='event-item'>
                <img className='event-img' src='https://jumbo.g-axon.work/images/event1.jpg'></img>
                <div className='event-info'>
                    <Button type='text' className='event-type'>
                        <h3 className='event-type-title'>Musical Concert</h3>
                    </Button>
                    <h2>Sundance Film Festival</h2>
                    <div className='event-location'>
                        <StarFilled style={{fontSize: '20px',color:'gray'}}/>
                        <p className='event-location-title'>Downsview Park, Toronto, Canada</p>
                    </div>
                </div>
                <div className='event-time'>
                    <div className='flex-ev'></div>
                    <div className='flex-ev'>
                        <CalendarOutlined className='event-date' />
                        <p className='date-p'>Feb 11, 2020</p>
                    </div>
                    <div className='flex-ev'>
                        <p className='check-p'>CHECK IN DETAIL</p>
                        <ArrowRightOutlined className='btn-check'/>
                    </div>
                </div>
            </div>
            <div className='under-line'></div>
            <div className='event-item'>
                <img className='event-img' src='https://jumbo.g-axon.work/images/event2.jpg'></img>
                <div className='event-info'>
                    <Button type='text' className='event-type'>
                        <h3 className='event-type-title'>Magic Show</h3>
                    </Button>
                    <h2>Underwater Musical Festival</h2>
                    <div className='event-location'>
                        <StarFilled style={{fontSize: '20px',color:'gray'}}/>
                        <p className='event-location-title'>Downsview Park, Toronto, Canada</p>
                    </div>
                </div>
                <div className='event-time'>
                    <div className='flex-ev'></div>
                    <div className='flex-ev'>
                        <CalendarOutlined className='event-date' />
                        <p className='date-p'>Feb 11, 2020</p>
                    </div>
                    <div className='flex-ev'>
                        <p className='check-p'>CHECK IN DETAIL</p>
                        <ArrowRightOutlined className='btn-check'/>
                    </div>
                </div>
            </div>
            <div className='under-line'></div>
            <div className='event-item'>
                <img className='event-img' src='https://jumbo.g-axon.work/images/event3.jpg'></img>
                <div className='event-info'>
                    <Button type='text' className='event-type'>
                        <h3 className='event-type-title'>Musical Concert</h3>
                    </Button>
                    <h2>Village Feast Fac</h2>
                    <div className='event-location'>
                        <StarFilled style={{fontSize: '20px',color:'gray'}}/>
                        <p className='event-location-title'>Downsview Park, Toronto, Canada</p>
                    </div>
                </div>
                <div className='event-time'>
                    <div className='flex-ev'></div>
                    <div className='flex-ev'>
                        <CalendarOutlined className='event-date' />
                        <p className='date-p'>Feb 11, 2020</p>
                    </div>
                    <div className='flex-ev'>
                        <p className='check-p'>CHECK IN DETAIL</p>
                        <ArrowRightOutlined className='btn-check'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;