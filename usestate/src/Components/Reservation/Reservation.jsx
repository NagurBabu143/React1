import React, { useState } from 'react';
import './Reservation.css';

function Reservation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const Submit = (e) => {
    e.preventDefault();
    alert(
      `Reservation Confirmed!\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`
    );
  };

  return (
    <div className="reservation-container">
      <h1>Table Reservation</h1>
      <form onSubmit={Submit} className="reservation-form">
        <label> Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required  />
        </label>
        <label> Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        </label>
        <label> Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label> Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required  />
        </label>
        <label> Number of Guests:
          <input type="number"  value={guests}  onChange={(e) => setGuests(e.target.value)} min="1" max="20" required />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reservation;
