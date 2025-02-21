import React from "react";
import "./Filters.css";

const Filters = ({ category, setCategory, priceRange, setPriceRange }) => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
          <option value="Footwear">Footwear</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="price-range">Price Range:</label>
        <input id="price-range" type="range" min="0" max="1000" value={priceRange[1]} onChange={(e) => setPriceRange([0, Number(e.target.value)])}/>
        <span>Rs.{priceRange[0]} - Rs.{priceRange[1]}</span>
      </div>
    </div>
  );
};

export default Filters;
