import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div id='Events' className="events">
            <h2>Upcoming Events</h2>
            <div className="event-list">
                <div className="event-item">
                    <img src="/images/1.jpg" alt="Event 1" className="event-image" />
                    <div className="event-details">
                        <h3>Event 1</h3>
                        <p>Date: January 25, 2025</p>
                        <p>Description: Join us for an amazing event where we will explore various topics.</p>
                        <button className="register-button">Register Now</button>
                    </div>
                </div>
                <div className="event-item">
                    <img src="/images/2.jpg" alt="Event 2" className="event-image" />
                    <div className="event-details">
                        <h3>Event 2</h3>
                        <p>Date: February 10, 2025</p>
                        <p>Description: A wonderful opportunity to network and grow your skills.</p>
                        <button className="register-button">Register Now</button>
                    </div>
                </div>
                <div className="event-item">
                    <img src="/images/3.jpg" alt="Event 3" className="event-image" />
                    <div className="event-details">
                        <h3>Event 3</h3>
                        <p>Date: March 15, 2025</p>
                        <p>Description: Participate in exciting activities and workshops.</p>
                        <button className="register-button">Register Now</button>
                    </div>
                </div>
                <div className="event-item">
                    <img src="/images/4.jpg" alt="Event 4" className="event-image" />
                    <div className="event-details">
                        <h3>Event 4</h3>
                        <p>Date: April 20, 2025</p>
                        <p>Description: Experience inspiring talks from industry leaders.</p>
                        <button className="register-button">Register Now</button>
                    </div>
                </div>
                <div className="event-item">
                    <img src="/images/6.jpg" alt="Event 5" className="event-image" />
                    <div className="event-details">
                        <h3>Event 5</h3>
                        <p>Date: May 5, 2025</p>
                        <p>Description: Join us for a weekend of fun and learning.</p>
                        <button className="register-button">Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
