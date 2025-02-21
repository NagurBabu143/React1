import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>About Railway Services</h3>
                    <p>
                        We aim to provide a seamless, reliable, and customer-friendly railway service, making your journeys comfortable and stress-free.
                    </p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#book-tickets">Book Tickets</a></li>
                        <li><a href="#schedule">Train Schedule</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Info</h3>
                    <p>Email: <a href="mailto:support@railwayservices.com">support@railwayservices.com</a></p>
                    <p>Phone: <a href="tel:18001234567">1800-123-4567</a></p>
                    <p>Address: 123 Railway St, Train City, TS 12345</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Railway Services. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
