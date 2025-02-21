import React from "react";
import "./Properties.css";

function Properties() {
  return (
    <section className="properties" id="properties">
      <h2>Our Properties</h2>
      <p>Discover a variety of properties tailored to your needs.</p>
      <div className="properties-container">
        <div className="property-item">
          <img src="/images/luxury-villa.jpg" alt="Luxury Villa" className="property-image" />
          <h3>Luxury Villa</h3>
          <p>A stunning luxury villa with panoramic views and modern amenities.</p>
        </div>
        <div className="property-item">
          <img src="/images/modern-apartment.jpg" alt="Modern Apartment" className="property-image" />
          <h3>Modern Apartment</h3>
          <p>Stylish apartment located in the heart of the city, close to all amenities.</p>
        </div>
        <div className="property-item">
          <img src="/images/beach-house.jpg" alt="Beach House" className="property-image" />
          <h3>Beach House</h3>
          <p>Beautiful beach house perfect for vacations or permanent living by the sea.</p>
        </div>
        <div className="property-item">
          <img src="/images/eco-home.jpg" alt="Eco-Friendly Home" className="property-image" />
          <h3>Eco-Friendly Home</h3>
          <p>Designed with sustainability in mind, featuring solar panels and green spaces.</p>
        </div>
        <div className="property-item">
          <img src="/images/country-cottage.jpg" alt="Country Cottage" className="property-image" />
          <h3>Country Cottage</h3>
          <p>A charming cottage surrounded by nature, ideal for peaceful living.</p>
        </div>
        <div className="property-item">
          <img src="/images/luxury-condo.jpg" alt="Luxury Condo" className="property-image" />
          <h3>Luxury Condo</h3>
          <p>Elegant condo with high-end finishes and access to exclusive amenities.</p>
        </div>
      </div>
    </section>
  );
}

export default Properties;
