import React from 'react';
import './AnimalDetails.css';

const AnimalDetails = ({ animal }) => {
  if (!animal) {
    return <p>Select an animal for details.</p>;
  }

  return (
    <div className="animal-details">
      <h2>{animal.name} Details</h2>
      <p>Emoji: {animal.emoji}</p>
      <p>Type: {animal.type}</p>
      <p>Sound: {animal.sound}</p>
      <p>Health: {animal.health}</p>
      <p>Food: {animal.food}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default AnimalDetails;