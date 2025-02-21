import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id='Contact' className="contact">
            <div className="contact-content">
                <div className="contact-image">
                    <img src="/images/contact-image.jpg" alt="Contact Us" />
                </div>
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to us!</p>
                    <form>
                        <label>Name:</label>
                        <input type="text" placeholder="Your Name" required />
                        
                        <label>Email:</label>
                        <input type="email" placeholder="Your Email" required />
                        
                        <label>Message:</label>
                        <textarea placeholder="Your Message" required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
