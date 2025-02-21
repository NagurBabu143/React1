import React from "react";
import "../styles/FilterSection.css";

const FilterSection = ({ setTypeFilter }) => {
  return (
    <div className="filter-section">
      <h3 className="filter-title">Filter Properties</h3>
      <select className="filter-select" onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="For Sale">For Sale</option>
        <option value="For Rent">For Rent</option>
      </select>
    </div>
  );
};

export default FilterSection;
