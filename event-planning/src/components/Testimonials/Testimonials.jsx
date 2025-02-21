import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div id='Testimonials' className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-list">
                <div className="testimonial-item">
                    <p>"Great service, highly recommend!"</p>
                    <p className="client-name"> Client A</p>
                </div>
                <div className="testimonial-item">
                    <p>"Our event was a huge success!"</p>
                    <p className="client-name"> Client B</p>
                </div>
                <div className="testimonial-item">
                    <p>"Professional and attentive to our needs."</p>
                    <p className="client-name"> Client C</p>
                </div>
                <div className="testimonial-item">
                    <p>"Amazing attention to detail and organization!"</p>
                    <p className="client-name"> Client D</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
