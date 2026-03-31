import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";

function Products({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="container">
      <h2>Our Products</h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;