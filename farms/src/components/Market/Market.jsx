import React from "react";
import "./Market.css";

function Market({ marketData }) {
  return (
    <div className="market">
      <h2>Market</h2>
      <p>Grain Price: ${marketData.grainPrice} per ton</p>
      <p>Livestock Price Index: {marketData.livestockPrice}</p>
    </div>
  );
}

export default Market;