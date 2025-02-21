import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Dairy Farm Management</h3>
        <p>Efficiently manage your dairy farm with ease.</p>
        <p>&copy; 2025 Dairy Farm Management. All rights reserved.</p>
        <p>Developed by <strong>Shaik Nagurbabu</strong></p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="Dashboard">Dashboard</a></li>
          <li><a href="Livestock">Livestock</a></li>
          <li><a href="Milk Production">Milk Production</a></li>
          <li><a href="Sales">Sales</a></li>
          <li><a href="Inventory">Inventory</a></li>
          <li><a href="Health Records">Health Records</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>📍 Address: 123 Dairy Street, Hyderabad, India</p>
        <p>📧 Email: support@dairyfarm.com</p>
        <p>📞 Phone: +91 98765 43210</p>
      </div>

      <div className="footer-section social">
        <h3>Follow Us</h3>
        <a href="Facebook"><img src="/images/facebook.png" alt="Facebook" /></a>
        <a href="Twitter"><img src="/images/twitter.png" alt="Twitter" /></a>
        <a href="LinkedIn"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
      </div>
    </footer>
  );
}

export default Footer;
