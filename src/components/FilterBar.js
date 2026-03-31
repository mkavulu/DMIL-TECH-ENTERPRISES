import React from "react";

function FilterBar({ search, setSearch, category, setCategory }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="headphones">Headphones</option>
        <option value="smartwatch">Smart Watches</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
  );
}

export default FilterBar;