import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-item">
          <img src="/images/client1.jpg" alt="Client 1" className="client-image" />
          <blockquote>
            "Best real estate service I have ever experienced! The team was professional and attentive to my needs."
          </blockquote>
          <p className="client-name">— John Doe</p>
        </div>
        <div className="testimonial-item">
          <img src="/images/client2.jpg" alt="Client 2" className="client-image" />
          <blockquote>
            "I found my dream home thanks to their dedicated support. Highly recommend!"
          </blockquote>
          <p className="client-name">— Jane Smith</p>
        </div>
        <div className="testimonial-item">
          <img src="/images/client3.jpg" alt="Client 3" className="client-image" />
          <blockquote>
            "Exceptional service from start to finish. I felt valued and understood throughout the process."
          </blockquote>
          <p className="client-name">— Emily Johnson</p>
        </div>
        <div className="testimonial-item">
          <img src="/images/client4.jpg" alt="Client 4" className="client-image" />
          <blockquote>
            "They went above and beyond to ensure I was satisfied with my purchase. Fantastic experience!"
          </blockquote>
          <p className="client-name">— Michael Brown</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
