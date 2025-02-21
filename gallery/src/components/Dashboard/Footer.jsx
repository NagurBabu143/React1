import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Categories">Categories</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p>Email: support@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Gallery Dashboard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
