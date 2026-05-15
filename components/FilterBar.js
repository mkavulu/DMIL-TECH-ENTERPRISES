import React from "react";
import products from "../data/products";


function FilterBar({ search, setSearch, category, setCategory }) {
  // Dynamically extract unique categories from products
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
