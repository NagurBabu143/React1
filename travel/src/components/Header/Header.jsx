import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
   
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1>Travel Destination </h1>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Destinations">Destinations</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li>
            <a href="#Gallery">Gallery</a>
           
          </li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li><a href="#Blog">Blog</a></li>
          <li><a href="#FAQ">FAQ</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h2>Find Your Next Adventure</h2>
        <p>Discover the best travel destinations around the world</p>
        <button className="explore-btn">Explore Now</button>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
        </form>
      </div>
      
    </header>
  );
};

export default Header;
