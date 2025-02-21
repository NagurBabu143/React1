import React from "react";
import "./Listings.css";

function Listings() {
  return (
    <section className="listings" id="listings">
      <h2>Property Listings</h2>
      <div className="listings-grid">
        <div className="listing-item">
          <img src="/images/luxury-villa.jpg" alt="Luxury Villa" className="listing-image" />
          <h3>Luxury Villa</h3>
          <p>4 Bedrooms, 3 Bathrooms, Pool</p>
          <p className="price">Rs.1,500,000</p>
        </div>
        <div className="listing-item">
          <img src="/images/modern-apartment.jpg" alt="Modern Apartment" className="listing-image" />
          <h3>Modern Apartment</h3>
          <p>2 Bedrooms, 2 Bathrooms, City View</p>
          <p className="price">Rs.750,000</p>
        </div>
        <div className="listing-item">
          <img src="/images/beach-house.jpg" alt="Beach House" className="listing-image" />
          <h3>Beach House</h3>
          <p>3 Bedrooms, 2 Bathrooms, Oceanfront</p>
          <p className="price">Rs.1,200,000</p>
        </div>
        <div className="listing-item">
          <img src="/images/country-home.jpg" alt="Country Home" className="listing-image" />
          <h3>Country Home</h3>
          <p>3 Bedrooms, 2 Bathrooms, Large Garden</p>
          <p className="price">Rs.900,000</p>
        </div>
        <div className="listing-item">
          <img src="/images/loft-apartment.jpg" alt="Loft Apartment" className="listing-image" />
          <h3>Loft Apartment</h3>
          <p>1 Bedroom, 1 Bathroom, Industrial Style</p>
          <p className="price">Rs.550,000</p>
        </div>
      </div>
    </section>
  );
}

export default Listings;
