import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/logo.jpg" alt="Logo" className="header-logo" />
        <h1 className="header-title"> SS Real Estate </h1>
      </div>
      {/* <div className="header-center">
        <p className="header-tagline">Connecting you with your dream property</p>
      </div> */}
      <div className="header-right">
        <div className="header-search">
          <input type="text" placeholder="Search properties..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="auth-buttons">
          <button className="auth-button">Login</button>
          <button className="auth-button signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
