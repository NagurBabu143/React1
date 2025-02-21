import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div id='Services' className="services">
            <h2>Our Services</h2>
            <p>We offer a wide range of event management services to make your events successful.</p>
            <div className="service-list">
                <div className="service-item">
                    <h3>Event Planning</h3>
                    <p>Comprehensive planning services from concept to execution.</p>
                </div>
                <div className="service-item">
                    <h3>Venue Selection</h3>
                    <p>Assistance in selecting the perfect venue for your event.</p>
                </div>
                <div className="service-item">
                    <h3>Event Promotion</h3>
                    <p>Effective strategies to promote your event and attract attendees.</p>
                </div>
                <div className="service-item">
                    <h3>Logistics Management</h3>
                    <p>Handling all logistical aspects, including catering and transportation.</p>
                </div>
                <div className="service-item">
                    <h3>On-Site Coordination</h3>
                    <p>Ensuring everything runs smoothly on the day of the event.</p>
                </div>
                <div className="service-item">
                    <h3>Vendor Management</h3>
                    <p>Coordinating with vendors to ensure quality service delivery.</p>
                </div>
                <div className="service-item">
                    <h3>Post-Event Analysis</h3>
                    <p>Evaluating the event's success and gathering feedback for improvement.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
