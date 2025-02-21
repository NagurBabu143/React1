import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  // State Variables
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);
  const [accountVisibility, setAccountVisibility] = useState(true);

  // Handlers
  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const toggleNotifications = () => setNotifications(!notifications);
  const toggleTwoFactor = () => setTwoFactor(!twoFactor);
  const toggleAccountVisibility = () => setAccountVisibility(!accountVisibility);

  const handleSaveChanges = () => {
    alert("✅ Settings saved successfully!");
  };

  const handleBackup = () => alert("📂 Data Backup Successful!");

  const handleReset = () => {
    if (window.confirm("⚠️ Are you sure you want to reset all settings?")) {
      setTheme("light");
      setLanguage("English");
      setNotifications(true);
      setTwoFactor(false);
      setAccountVisibility(true);
      setUsername("JohnDoe");
      setEmail("johndoe@example.com");
      setPassword("");
      alert("🔄 Settings Reset!");
    }
  };

  return (
    <div className={`settings-container ${theme}`}>
      <h2 className="settings-title">⚙️ Settings</h2>
      <p className="settings-description">
        Customize your account preferences, privacy, security, and system settings.
      </p>

      {/* Theme & Language */}
      <div className="settings-section">
        <h3>🎨 Appearance</h3>
        <div className="settings-item">
          <label>Theme:</label>
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">☀️ Light Mode</option>
            <option value="dark">🌙 Dark Mode</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Language:</label>
          <select value={language} onChange={handleLanguageChange}>
            <option value="English">🇬🇧 English</option>
            <option value="Spanish">🇪🇸 Spanish</option>
            <option value="French">🇫🇷 French</option>
            <option value="German">🇩🇪 German</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h3>🔔 Notifications</h3>
        <div className="settings-item">
          <label>Email Notifications:</label>
          <button className={`toggle-btn ${notifications ? "enabled" : "disabled"}`} onClick={toggleNotifications}>
            {notifications ? "ON ✅" : "OFF ❌"}
          </button>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="settings-section">
        <h3>👤 Profile Settings</h3>
        <div className="settings-item">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="settings-item">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      {/* Security Settings */}
      <div className="settings-section">
        <h3>🔒 Security</h3>
        <div className="settings-item">
          <label>Change Password:</label>
          <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="settings-item">
          <label>Two-Factor Authentication:</label>
          <button className={`toggle-btn ${twoFactor ? "enabled" : "disabled"}`} onClick={toggleTwoFactor}>
            {twoFactor ? "Enabled ✅" : "Disabled ❌"}
          </button>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="settings-section">
        <h3>🔏 Privacy</h3>
        <div className="settings-item">
          <label>Account Visibility:</label>
          <button className={`toggle-btn ${accountVisibility ? "enabled" : "disabled"}`} onClick={toggleAccountVisibility}>
            {accountVisibility ? "Public 🌍" : "Private 🔒"}
          </button>
        </div>
      </div>

      {/* Data Management */}
      <div className="settings-section">
        <h3>📂 Data Management</h3>
        <button className="backup-btn" onClick={handleBackup}>📤 Export Data</button>
        <button className="delete-btn" onClick={() => alert("❌ Account Deleted!")}>🚨 Delete Account</button>
      </div>

      {/* Actions */}
      <div className="settings-actions">
        <button className="save-btn" onClick={handleSaveChanges}>💾 Save Changes</button>
        <button className="reset-btn" onClick={handleReset}>⚠️ Reset Settings</button>
      </div>
    </div>
  );
}

export default Settings;
