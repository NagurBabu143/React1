import React, { useState, useEffect } from "react";
import Animal from "../Animal/Animal";
import Field from "../Field/Field";
import Weather from "../Weather/Weather";
import Market from "../Market/Market";
import Feed from "../Feed/Feed";
import "./Farm.css";

function Farm() {
  const [farmData, setFarmData] = useState({ animals: [], fields: [], weather: {}, market: {}, feed: [] });

  useEffect(() => {
    fetch("/farm_data.json")
      .then((response) => response.json())
      .then((data) => setFarmData(data));
  }, []);

  return (
    <div className="farm">
      <h1>Farm Overview</h1>
      <div className="animal-list">
        {farmData.animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
      <Field fieldData={farmData.fields} />
      <Weather weatherData={farmData.weather} />
      <Market marketData={farmData.market} />
      <Feed feedData={farmData.feed} />
    </div>
  );
}

export default Farm;