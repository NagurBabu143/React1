
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-top">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>
          Shaik NagurBabu's Dashboard is a premier solution for monitoring performance and managing business insights.
        </p>
      </div>
      <div className="footer-newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email"  aria-label="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#facebook" className="social-icon">📘</a>
          <a href="#twitter" className="social-icon">🐦</a>
          <a href="#linkedin" className="social-icon">🔗</a>
          <a href="#instagram" className="social-icon">📸</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Shaik NagurBabu. All rights reserved.</p>
      <div className="footer-links">
        <a href="#terms">Terms of Service</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#support">Support</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
