import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <p>For any inquiries, please reach out to us through the following methods:</p>
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>support@railwayservices.com</p>
                </div>
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>900-123-4567</p>
                </div>
                <div className="contact-item">
                    <h3>Address</h3>
                    <p>123 Railway St, Train City, TS 12345</p>
                </div>
            </div>
            <form className="contact-form">
                <h3>Send Us a Message</h3>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
