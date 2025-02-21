import React from "react";
import DestinationCard from "../DestinationCard/DestinationCard";
import "./DestinationList.css";

const DestinationList = ({ destinations }) => {
  return (
    <div className="destination-list">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationList;
