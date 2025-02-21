import React from 'react';
import Child from './Child';
import './styles.css'; 
const Parent = () => {
  const employees = [
    { name: 'Alice Johnson', position: 'Software Engineer', department: 'Development' },
    { name: 'Bob Smith', position: 'Product Manager', department: 'Product' },
    { name: 'Charlie Brown', position: 'Designer', department: 'Design' },
    { name: 'Daisy Wilson', position: 'QA Engineer', department: 'Quality Assurance' },
  ];

  return (
    <div className="parent-container">
      <h1>Employee Directory</h1>
      {employees.map((employee, index) => (
        <Child key={index} employee={employee} />
      ))}
    </div>
  );
};

export default Parent;
