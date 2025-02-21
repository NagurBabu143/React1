import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Railway Services</h1>
                <p className="tagline">Connecting people, places, and possibilities</p>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li>
                        <a href="#services">Services</a>
                        
                    </li>
                    <li><a href="#book-tickets">Book Tickets</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="cta-buttons">
                <button className="btn login-btn">Login</button>
                <button className="btn signup-btn">Sign Up</button>
            </div>
        </header>
    );
}

export default Header;
