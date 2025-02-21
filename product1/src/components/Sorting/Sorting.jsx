import React from "react";
import "./Sorting.css";

const Sorting = ({ setSortOption }) => {
  return (
    <div className="sorting">
      <h2>Sort By</h2>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default Sorting;
