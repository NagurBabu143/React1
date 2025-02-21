import React from 'react';

const Filter = ({ setSelectedCategory, setPriceRange }) => {
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

 

  return (
    <div className="filter">
      <h3>Filter Products</h3>
      
    
      <label htmlFor="category-select">Category:</label>
      <select id="category-select" onChange={handleCategoryChange}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home Appliances">Home Appliances</option>
        <option value="Gardening">Gardening</option>
        
      </select>

     
      <label htmlFor="price-slider">Price Slider:</label>
      <input 
        type="range" 
        id="price-slider" 
        min="0" 
        max="100" 
        step="1" 
        onChange={(e) => {
          const min = Number(e.target.value);
          const max = 100; 
          setPriceRange([min, max]);
        }} 
      />
      <span>Selected Price: 0 - 100</span>
    </div>
  );
};

export default Filter;
