import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing the best travel experiences.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Destinations">Destinations</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Blog">Blog</a></li>
            <li><a href="#FAQ">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#Facebook" className="icon">Facebook</a>
            <a href="#Twitter" className="icon">Twitter</a>
            <a href="#Instagram" className="icon">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@traveldestinationexplorer.com">info@traveldestinationexplorer.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+91 734 567 890</a></p>
        </div>
      </div>
      <p>© 2025 Travel Destination Explorer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
