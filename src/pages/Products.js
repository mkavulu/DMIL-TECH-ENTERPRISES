import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

function Products({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Filter products by search + category
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || product.category === category;
    return matchSearch && matchCategory;
  });

  // Group products by category
  const groupedProducts = filteredProducts.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  return (
    <div className="container">
      <h2>Our Products</h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Render grouped products */}
      {Object.keys(groupedProducts).map((cat) => (
        <div key={cat} className="category-section">
          <h3 className="category-heading">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h3>
          <div className="products-grid">
            {groupedProducts[cat].map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
