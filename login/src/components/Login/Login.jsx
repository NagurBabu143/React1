import React, { useState } from "react";

const Login = ({ Login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const DataLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      Login(true);
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div id="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password"  placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}  />
      <br />
      <button onClick={DataLogin}>Login</button>
    </div>
  );
};

export default Login;
