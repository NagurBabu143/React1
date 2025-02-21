import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchQuery(value);
  };

  const clearSearch = () => {
    setInputValue("");
    setSearchQuery("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        value={inputValue}
        onChange={handleSearchChange}
      />
      <button className="search-btn" onClick={() => setSearchQuery(inputValue)}>
        🔍
      </button>
      {inputValue && (
        <button className="clear-btn" onClick={clearSearch}>
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchBar;
