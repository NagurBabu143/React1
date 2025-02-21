import React from "react";
import "../styles/PropertyCard.css";

const PropertyCard = ({ property, toggleFavorite }) => {
  return (
    <div className="property-card">
      <h3 className="property-title">{property.title}</h3>
      <p className="property-location">📍 Location: {property.location}</p>
      <p className="property-size">📏 Size: {property.size}</p>
      <p className="property-price">💰 Price: Rs.{property.price}</p>
      <p className="property-type">🏷️ Type: {property.type}</p>
      <button className="contact-button" onClick={() => alert("Contacting the seller...")}>
        Contact Seller
      </button>
      <button className="favorite-button" onClick={() => toggleFavorite(property)}>
        ⭐ Favorite
      </button>
    </div>
  );
};

export default PropertyCard;
