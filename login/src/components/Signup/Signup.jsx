import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful!");
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}  /> <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;


