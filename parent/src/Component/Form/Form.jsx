import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Submit = (N) => {
    
    N.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    
    console.log("Email:", email);
    
    console.log("Password:", password);

    alert(`Email: ${email}\nPassword: ${password}`);
    
  };

  return (
    <form className="form" onSubmit={Submit}>
        
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(N) => setEmail(N.target.value)} className="form-input"/>
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(N) => setPassword(N.target.value)} className="form-input"/>
      </div>

      <p className="error-message">{error}</p>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;
