import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; 2025 Event Management. All rights reserved.</p>
                    <p>Follow us on:</p>
                    <div className="social-icons">
                        <a href="#Facebook" className="social-icon">Facebook</a>
                        <a href="#Twitter" className="social-icon">Twitter</a>
                        <a href="#Instagram" className="social-icon">Instagram</a>
                    </div>
                </div>
                <div className="footer-center">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Events">Events</a></li>
                        <li><a href="#About Us">About Us</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Testimonials">Testimonials</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Contact Us</h3>
                    <p>Email: info@eventmanagement.com</p>
                    <p>Phone: (923) 456-7890</p>
                    <div className="newsletter">
                        <h3>Subscribe to our Newsletter</h3>
                        <input type="email" placeholder="Your email" />
                        <button type="submit" className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-faq">
                <h3>FAQs</h3>
                <p><strong>Q:</strong> How can I book an event? <br /><strong>A:</strong> You can contact us via the contact form or call us directly.</p>
                <p><strong>Q:</strong> What services do you offer? <br /><strong>A:</strong> We offer event planning, venue selection, and event promotion.</p>
            </div>
        </footer>
    );
};

export default Footer;
