import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback!\nName: ${name}\nRating: ${rating}\nComments: ${comments}`);
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <form onSubmit={Submit} className="feedback-form">
        <label> Name:
          <input type="text"  value={name}  onChange={(e) => setName(e.target.value)}  placeholder="Enter your name" required />
        </label>
        <label> Rating:
          <select value={rating} onChange={(e) => setRating(e.target.value)} required>
            <option value="">Select rating</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </label>
        <label> Comments:
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Write your comments here"  required />
        </label>
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default Feedback;
