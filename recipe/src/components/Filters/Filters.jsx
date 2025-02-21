import "./Filters.css";

const Filters = ({ filterOptions, setFilterOptions,resetFilters  }) => {
  return (
    <div className="filters">
      <label>Type:</label>
      <select
        value={filterOptions.vegetarian}
        onChange={(e) => setFilterOptions({ ...filterOptions, vegetarian: e.target.value })}
      >
        <option value="all">All</option>
        <option value="veg">Vegetarian</option>
        <option value="non-veg">Non-Vegetarian</option>
      </select>

      <label>Max Time (min):</label>
      <input
        type="number"
        value={filterOptions.maxTime}
        onChange={(e) => setFilterOptions({ ...filterOptions, maxTime: Number(e.target.value) })}
      />
       <button className="reset-btn" onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
