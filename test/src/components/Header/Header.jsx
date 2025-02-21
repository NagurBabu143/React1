import React from "react";
import "./Header.css";

function Header({ onNavigate }) {
  return (
    <header className="header">
      <h1 className="logo">🐄 Dairy Farm Management</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li onClick={() => onNavigate("Dashboard")} className="nav-item">📊 Dashboard</li>
          <li onClick={() => onNavigate("Livestock")} className="nav-item">🐄 Livestock</li>
          <li onClick={() => onNavigate("MilkProduction")} className="nav-item">🥛 Milk Production</li>
          <li onClick={() => onNavigate("Sales")} className="nav-item">💰 Sales</li>
          <li onClick={() => onNavigate("Inventory")} className="nav-item">📦 Inventory</li>
          <li onClick={() => onNavigate("EmployeeManagement")} className="nav-item">👨‍🌾 Employees</li>
          <li onClick={() => onNavigate("HealthRecords")} className="nav-item">🩺 Health</li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
