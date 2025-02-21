import React from "react";
import "./DestinationCard.css";

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p><strong>🌍 Country:</strong> {destination.country}</p>
        <p><strong>🌤️ Best Season:</strong> {destination.bestSeason}</p>
        <p><strong>💰 Budget:</strong> {destination.budget}</p>
        <p>{destination.description}</p>
        <button className="details-btn">View Details</button>
      </div>
    </div>
  );
};

export default DestinationCard;
