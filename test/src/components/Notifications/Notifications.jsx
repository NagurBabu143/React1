import React, { useState } from "react";
import "./Notifications.css";

function Notifications() {
  // State for notifications
  const [alerts, setAlerts] = useState([
    { id: 1, type: "Health", message: "🐄 Cow #12 needs medical attention.", color: "#ff4d4d" },
    { id: 2, type: "Sales", message: "💰 10 liters of milk sold today.", color: "#28a745" },
    { id: 3, type: "Operations", message: "🛠 Equipment maintenance scheduled.", color: "#ffc107" },
    { id: 4, type: "General", message: "🚨 Farm security system updated.", color: "#007bff" }
  ]);

  // Function to add a new alert
  const addAlert = () => {
    const newAlert = { 
      id: alerts.length + 1, 
      type: "General", 
      message: "📢 New farm policy update!", 
      color: "#6610f2"
    };
    setAlerts([...alerts, newAlert]);
  };

  // Function to remove an alert
  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">🔔 Notifications</h2>
      <p className="notifications-description">
        Stay updated with important alerts regarding livestock health, sales, and farm operations.
      </p>

      {/* Notification List */}
      <div className="notifications-list">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className="notification-item" 
              style={{ borderLeftColor: alert.color }}
              onClick={() => removeAlert(alert.id)}
            >
              <span className="notification-type">{alert.type}:</span> {alert.message}
              <span className="close-btn">❌</span>
            </div>
          ))
        ) : (
          <p className="no-alerts">🎉 No new notifications!</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="buttons-container">
        <button className="add-alert-btn" onClick={addAlert}>
          ➕ Add Alert
        </button>
        <button className="clear-alerts-btn" onClick={() => setAlerts([])}>
          🗑️ Clear All
        </button>
      </div>
    </div>
  );
}

export default Notifications;
