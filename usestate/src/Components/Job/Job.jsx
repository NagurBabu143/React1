import React, { useState } from 'react';
import './Job.css';

function Job() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Application Submitted!\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}`
    );
  };

  return (
    <div className="application-container">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit} className="application-form">
        <label> Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" required />
        </label>
        <label> Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        </label>
        <label> Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required/>
        </label>
        <label> Position Applied For:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Enter the position" required />
        </label>
        <label> Upload Resume:
          <input type="file" value={resume} onChange={(e) => setResume(e.target.files[0])}  required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Job;
