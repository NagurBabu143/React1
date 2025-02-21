import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; 2025 Real Estate Website. All rights reserved.</p>
          <p>Developed by Nagurbabu</p>
        </div>

        <div className="footer-links-container">
          <div className="about-section">
            <h3>About Us</h3>
            <p>
              We are committed to helping you find your dream home with ease
              and efficiency. Our expert team is here to assist you every step
              of the way.
            </p>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
          </div>

          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
