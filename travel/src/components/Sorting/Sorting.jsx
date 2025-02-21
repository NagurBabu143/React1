import React from "react";
import "./Sorting.css";

const Sorting = ({ setSortOption }) => {
  return (
    <select onChange={(e) => setSortOption(e.target.value)} className="sorting">
      <option value="">Sort By</option>
      <option value="name">Name</option>
      <option value="country">Country</option>
      <option value="budget">Budget</option>
    </select>
  );
};

export default Sorting;
