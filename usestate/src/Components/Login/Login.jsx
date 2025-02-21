import React, { useState } from 'react';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Submit = (e) => {
    e.preventDefault(); 
    alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>User Login</h1>
      <form onSubmit={Submit} className="login-form">
        <label> Email: <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your email"  required />
        </label>
        <label> Password: <input type="password"  value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
