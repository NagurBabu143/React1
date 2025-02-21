import React from 'react';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans">
      <h1>Plans</h1>
      <p>Select a plan to view details:</p>
      <ul>
        <li><a href="#double-bedroom">Double Bedroom</a></li>
        <li><a href="#single-bedroom">Single Bedroom</a></li>
        <li><a href="#three-bedroom">Three Bedroom</a></li>
        <li><a href="#studio">Studio Apartment</a></li>
      </ul>
    </div>
  );
};

export default Plans;
