import React, { useState } from "react";
import "./Text.css";

const Text = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (N) => {
    N.preventDefault();

    
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email");
      return;
    }

   
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (age < 1 || age > 120) {
      setError("Please enter a valid age between 1 and 120");
      return;
    }

    
    if (!gender) {
      setError("Please select your gender");
      return;
    }

  

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Newsletter Subscription:", newsletter);
    console.log("Favorite Color:", color);
    
    alert(`Email: ${email}\nPassword: ${password}\nUsername: ${username}\nAge: ${age}\nGender: ${gender}\nNewsletter Subscription: ${newsletter}\nFavorite Color: ${color}`);
    
    setError("");
    setEmail("");
    setPassword("");
    setUsername("");
    setAge("");
    setGender("");
    setNewsletter(false);
    setColor("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input type="text" value={email} onChange={(N) => setEmail(N.target.value)} className="form-input" required/>
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(N) => setPassword(N.target.value)} className="form-input" required/>
      </div>

      <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(N) => setUsername(N.target.value)} className="form-input" required />
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input type="number" value={age} onChange={(N) => setAge(N.target.value)} className="form-input" required />
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <div>
          <label>
            <input type="radio" value="Male" checked={gender === "Male"} onChange={(N) => setGender(N.target.value)} required/>
            Male
          </label>
          <label>
            <input type="radio" value="Female" checked={gender === "Female"} onChange={(N) => setGender(N.target.value)} required />
            Female
          </label>
          <label>
            <input type="radio"  value="Other" checked={gender === "Other"} onChange={(N) => setGender(N.target.value)} required />
            Other
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>
          <input type="checkbox"  checked={newsletter} onChange={(N) => setNewsletter(N.target.checked)} required/>
          Subscribe to newsletter
        </label>
      </div>

      <div className="form-group">
        <label>Favorite Color:</label>
        <select value={color} onChange={(N) => setColor(N.target.value)} className="form-input">
          <option value="">Select a color</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
        </select>
      </div>

      <p className="error-message">{error}</p>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Text;
