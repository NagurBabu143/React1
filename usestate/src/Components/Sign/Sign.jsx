import React, { useState } from 'react';
import './Sign.css';

function Sign() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    alert(`Sign-Up Successful!\nUsername: ${username}\nEmail: ${email}`);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={Submit} className="signup-form">
        <label> Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required/>
        </label>
        <label> Email:
          <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email"  required />
        </label>
        <label> Password:
          <input  type="password"  value={password}  onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password"  required  />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Sign;
