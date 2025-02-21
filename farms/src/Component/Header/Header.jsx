import React from "react";
import "./Header.css";

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <h1>Farm Management</h1>
      <nav>
        <ul>
          <li onClick={() => setCurrentPage("dashboard")}>Dashboard</li>
          <li onClick={() => setCurrentPage("crops")}>Crops</li>
          <li onClick={() => setCurrentPage("livestock")}>Livestock</li>
          <li onClick={() => setCurrentPage("equipment")}>Equipment</li>
          <li onClick={() => setCurrentPage("tasks")}>Tasks</li>
          <li onClick={() => setCurrentPage("finance")}>Finance</li>
          <li onClick={() => setCurrentPage("inventory")}>Inventory</li>
          <li onClick={() => setCurrentPage("users")}>Users</li>
          <li onClick={() => setCurrentPage("login")}>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;