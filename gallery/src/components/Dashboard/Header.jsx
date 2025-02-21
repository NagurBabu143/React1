import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" />
                <h1>Gallery Dashboard</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Categories">Categories</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
            </nav>

            <div className="header-right">
                <input type="text" placeholder="Search..." className="search-bar" />
                <div className="profile">
                    <span className="username">Hello, User</span>
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
