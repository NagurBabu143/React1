
import React, { useEffect } from 'react';
import './Child.css'; 

const Child = ({ items }) => {
  useEffect(() => {
    console.log('Child  received items:', items);
  }, [items]);

  return (
    <div className="child">
      <h2>Child </h2>
      <h3>Items List:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
