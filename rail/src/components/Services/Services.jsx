import React from "react";
import "./Services.css";

function Services() {
    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <p>
                At Railway Services, we offer a wide range of services designed to make your travel experience as smooth and enjoyable as possible.
            </p>
            <div className="service-container">
                <div className="service-item">
                    <h3>Online Ticket Booking</h3>
                    <p>Book your tickets conveniently from the comfort of your home.</p>
                </div>
                <div className="service-item">
                    <h3>Train Schedules</h3>
                    <p>Check real-time train schedules and track your train.</p>
                </div>
                <div className="service-item">
                    <h3>Customer Support</h3>
                    <p>Our support team is available 24/7 to assist you with any inquiries.</p>
                </div>
                <div className="service-item">
                    <h3>Loyalty Program</h3>
                    <p>Join our loyalty program to earn points and enjoy exclusive benefits.</p>
                </div>
                <div className="service-item">
                    <h3>Travel Insurance</h3>
                    <p>Protect your journey with our comprehensive travel insurance plans.</p>
                </div>
                <div className="service-item">
                    <h3>Real-Time Train Tracking</h3>
                    <p>Stay updated with real-time tracking of your train's location.</p>
                </div>
                <div className="service-item">
                    <h3>In-Train Catering Services</h3>
                    <p>Enjoy delicious meals and snacks available on board during your journey.</p>
                </div>
                <div className="service-item">
                    <h3>Group Travel Discounts</h3>
                    <p>Book for groups and enjoy special discounts on ticket prices.</p>
                </div>
            </div>
            <div className="service-details">
                <h3>Why Choose Us?</h3>
                <p>
                    We prioritize your convenience and satisfaction, offering reliable services that cater to all your travel needs. Our dedicated team is always ready to assist you.
                </p>
            </div>
        </section>
    );
}

export default Services;
