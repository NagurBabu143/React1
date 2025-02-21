
import React, { useState } from 'react';
import RegistrationData from './RegistrationData';
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setSubmittedData(formData);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' }); 
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={Submit}>
        <input type="text" name="name" value={formData.name} onChange={Change} placeholder="Full Name" required />
        <input type="email" name="email" value={formData.email} onChange={Change}   placeholder="Email" required />
        <input type="password"name="password"  value={formData.password} onChange={Change} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={Change} placeholder="Confirm Password" required />
        <button type="submit">Register</button>
      </form>
      {submittedData && <RegistrationData data={submittedData} />}
    </div>
  );
};

export default RegistrationForm;
