import React from "react";
import "./Home.css";

function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h2>Welcome to Railway Services</h2>
                <p className="subtitle">
                    Discover a seamless travel experience with our efficient and reliable railway services. Book your tickets, check train schedules, and explore exciting destinations.
                </p>
                <ul className="features">
                    <li>Fast and Easy Online Booking</li>
                    <li>Real-Time Train Schedule Updates</li>
                    <li>Affordable Tour Packages</li>
                    <li>24/7 Customer Support</li>
                </ul>
                <div className="cta-buttons">
                    <button className="btn explore-btn">Explore Services</button>
                    <button className="btn book-btn">Book Tickets Now</button>
                </div>
            </div>
            <div className="home-image">
                <img src="/images/train-travel.jpg" alt="Train Travel" />
                <div className="image-overlay">
                    <p>Experience the Journey of a Lifetime</p>
                </div>
            </div>
        </section>
    );
}

export default Home;
