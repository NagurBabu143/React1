import React from "react";
import "./Filters.css";

const Filters = ({ setBudgetFilter, setSeasonFilter }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setBudgetFilter(e.target.value)} className="filter-select">
        <option value="">Select Budget</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select onChange={(e) => setSeasonFilter(e.target.value)} className="filter-select">
        <option value="">Select Season</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
      </select>
    </div>
  );
};

export default Filters;
