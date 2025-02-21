
import React from 'react';
import './RegistrationData.css'; 

const RegistrationData = ({ data }) => {
  return (
    <div className="registration-data">
      <h2>Registered Data</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Password:</strong> {data.password}</p>
    </div>
  );
};

export default RegistrationData;
