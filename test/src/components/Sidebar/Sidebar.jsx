import React from "react";
import "./Sidebar.css";

function Sidebar({ onNavigate }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onNavigate("Dashboard")}>📊 Dashboard</li>
        <li onClick={() => onNavigate("Livestock")}>🐄 Livestock</li>
        <li onClick={() => onNavigate("MilkProduction")}>🥛 Milk Production</li>
        <li onClick={() => onNavigate("Sales")}>💰 Sales</li>
        <li onClick={() => onNavigate("Inventory")}>📦 Inventory</li>
        <li onClick={() => onNavigate("EmployeeManagement")}>👨‍🌾 Employees</li>
        <li onClick={() => onNavigate("HealthRecords")}>🩺 Health Records</li>
        <li onClick={() => onNavigate("Reports")} className="nav-item">📑 Reports</li>
          <li onClick={() => onNavigate("Expenses")} className="nav-item">💸 Expenses</li>
          <li onClick={() => onNavigate("Settings")} className="nav-item">⚙️ Settings</li>
          <li onClick={() => onNavigate("Notifications")} className="nav-item">🔔 Notifications</li>
          <li onClick={() => onNavigate("Profile")} className="nav-item">👤 Profile</li>
          <li onClick={() => onNavigate("Logout")} className="nav-item logout">🚪 Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
