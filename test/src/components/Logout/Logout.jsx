import React from "react";
import "./Logout.css";

function Logout() {
  const handleLogout = () => {
    alert("You have been logged out.");
    // Add logout logic here
  };

  return (
    <div className="logout">
      <h2>🚪 Logout</h2>
      <button onClick={handleLogout} className="logout-btn">Confirm Logout</button>
    </div>
  );
}

export default Logout;
