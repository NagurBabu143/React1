import React from "react";
import "./Animal.css";

function Animal({ animal }) {
  return (
    <div className="animal-card">
      <h3>{animal.name}</h3>
      <p>Type: {animal.type}</p>
      <p>Age: {animal.age} years</p>
    </div>
  );
}

export default Animal;
