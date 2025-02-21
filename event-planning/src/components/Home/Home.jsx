import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div id='Home' className="home">
            <h2>Welcome to Our Event Management Website</h2>
            <p>We help you organize and manage your events efficiently.</p>

            <div className="hero-section">
                <img src="/images/event.jpg" alt="Event" className="hero-image" />
                <div className="hero-text">
                    <h3>Your Event, Our Passion</h3>
                    <p>Experience seamless event planning from start to finish.</p>
                </div>
            </div>

            <div className="services">
                <h3>Our Services</h3>
                <div className="service-item">
                    <img src="/images/service.jpg" alt="Service" className="service-image" />
                    <div className="service-description">
                        <h4>Event Planning</h4>
                        <p>We provide comprehensive planning services for all types of events.</p>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <h3>What Our Clients Say</h3>
                <div className="testimonial-item">
                    <img src="/images/testimonial.jpg" alt="Client" className="testimonial-image" />
                    <div className="testimonial-text">
                        <p>"This team made our event unforgettable! Highly recommended."</p>
                        <h5> Happy Client</h5>
                    </div>
                </div>
            </div>

            <div className="call-to-action">
                <h3>Ready to Plan Your Next Event?</h3>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default Home;
