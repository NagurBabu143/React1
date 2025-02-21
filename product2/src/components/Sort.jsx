import React from "react";

const Sort = ({ products, setFilteredProducts }) => {
  const handleSortChange = (e) => {
    const sortType = e.target.value;
    const sortedProducts = [...products].sort((a, b) => {
      if (sortType === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortType === "price") {
        return a.price - b.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="sort">
      <h3>Sort</h3>
      <select onChange={handleSortChange}>
        <option value="">None</option>
        <option value="name"> Name</option>
        <option value="price"> Price</option>
      </select>
    </div>
  );
};

export default Sort;
