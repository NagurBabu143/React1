import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <h1 className="logo">Event Management</h1>
                <p className="tagline">Your partner in organizing unforgettable events!</p>
            </div>
            <div className="header-extras">
                <button className="contact-button">Contact Us</button>
                <input type="text" className="search-input" placeholder="Search events..." />
               
            </div>
        </header>
    );
};

export default Header;
