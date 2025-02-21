import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  // State for user details
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, Cityville",
    bio: "Passionate farmer and entrepreneur.",
  });

  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("/images/default-profile.png");
  const [theme, setTheme] = useState("light"); // Light/Dark Mode

  // Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Password Change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle Profile Image Change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Toggle Light/Dark Theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Calculate Profile Completion %
  const profileCompletion = () => {
    const fields = Object.values(user);
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    return Math.round((filledFields / fields.length) * 100);
  };

  return (
    <div className={`profile-container ${theme}`}>
      <h2 className="profile-title">👤 Profile</h2>
      <p className="profile-description">
        Manage your profile, security settings, and preferences.
      </p>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* Profile Completion Progress */}
      <div className="profile-progress">
        <span>Profile Completion: {profileCompletion()}%</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${profileCompletion()}%` }}></div>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="profile-image-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="image-upload" />
      </div>

      {/* Profile Info Form */}
      <div className="profile-info">
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="text" name="phone" value={user.phone} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={user.address} onChange={handleChange} />

        <label>Bio:</label>
        <textarea name="bio" value={user.bio} onChange={handleChange}></textarea>
      </div>

      {/* Password Change Section */}
      <div className="password-section">
        <label>Change Password:</label>
        <input type="password" placeholder="Enter new password" value={password} onChange={handlePasswordChange} />
      </div>

      {/* Action Buttons */}
      <div className="profile-buttons">
        <button className="save-btn">💾 Save Changes</button>
        <button className="logout-btn">🚪 Logout</button>
      </div>
    </div>
  );
}

export default Profile;
