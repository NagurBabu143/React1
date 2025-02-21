import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <img src="/images/property-buying.jpg" alt="Property Buying" className="service-image" />
          <h3>Property Buying</h3>
          <p>We assist you in finding the perfect property that meets your needs and budget.</p>
        </div>
        <div className="service-item">
          <img src="/images/property-selling.jpg" alt="Property Selling" className="service-image" />
          <h3>Property Selling</h3>
          <p>Our team helps you get the best price for your property with expert marketing strategies.</p>
        </div>
        <div className="service-item">
          <img src="/images/consultation.jpg" alt="Consultation" className="service-image" />
          <h3>Consultation</h3>
          <p>We provide professional advice to help you make informed decisions in real estate.</p>
        </div>
        <div className="service-item">
          <img src="/images/rental-services.jpg" alt="Rental Services" className="service-image" />
          <h3>Rental Services</h3>
          <p>Our team assists you in finding and managing rental properties effectively.</p>
        </div>
        <div className="service-item">
          <img src="/images/property-management.jpg" alt="Property Management" className="service-image" />
          <h3>Property Management</h3>
          <p>We offer full-service property management for hassle-free ownership.</p>
        </div>
        <div className="service-item">
          <img src="/images/market-analysis.jpg" alt="Market Analysis" className="service-image" />
          <h3>Market Analysis</h3>
          <p>We analyze market trends to provide insights for better investment decisions.</p>
        </div>
        <div className="service-item">
          <img src="/images/interior-design.jpg" alt="Interior Design" className="service-image" />
          <h3>Interior Design</h3>
          <p>Our experts create beautiful and functional spaces tailored to your style.</p>
        </div>
        <div className="service-item">
          <img src="/images/legal-services.jpg" alt="Legal Services" className="service-image" />
          <h3>Legal Services</h3>
          <p>We provide legal assistance for property transactions to ensure a smooth process.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
