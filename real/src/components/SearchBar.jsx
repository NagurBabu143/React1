import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ setFilter }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search properties..."
        onChange={(e) => setFilter(e.target.value)}
        className="search-input"
      />
      <button className="search-button">🔍</button>
    </div>
  );
};

export default SearchBar;
