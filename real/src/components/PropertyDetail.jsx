import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/PropertyDetail.css";

const PropertyDetail = () => {
  const location = useLocation();
  const { property } = location.state;

  return (
    <div className="property-detail">
      <h2 className="property-title">{property.title}</h2>
      <p className="property-price"><strong>Price:</strong> Rs.{property.price}</p>
      <p className="property-location"><strong>Location:</strong> {property.location}</p>
      <p className="property-size"><strong>Size:</strong> {property.size}</p>
      <p className="property-type"><strong>Type:</strong> {property.type}</p>
      <p className="property-description">
        <strong>Description:</strong> A beautiful property located in {property.location}. This property features spacious rooms, modern amenities, and a stunning view that makes it perfect for anyone looking for a comfortable living space.
      </p>
      <button className="contact-button">Contact Seller</button>
    </div>
  );
};

export default PropertyDetail;
