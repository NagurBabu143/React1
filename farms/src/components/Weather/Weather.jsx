import React from "react";
import "./Weather.css";

function Weather({ weatherData }) {
  return (
    <div className="weather">
      <h2>Weather</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Condition: {weatherData.condition}</p>
    </div>
  );
}

export default Weather;