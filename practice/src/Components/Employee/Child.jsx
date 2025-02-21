import React from 'react';
import GrandChild from './GrandChild';

const Child = ({ employee }) => {
  return (
    <div className="child-container">
      <h2>{employee.name}</h2>
      <p>{employee.position}</p>
      <GrandChild department={employee.department} />
    </div>
  );
};

export default Child;
