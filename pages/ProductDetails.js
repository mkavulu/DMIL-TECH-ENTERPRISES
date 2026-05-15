import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <img src={product.image} alt={product.name} width="400" />

        <div>
          <h1>{product.name}</h1>
          <h2 style={{ color: "#007bff" }}>${product.price}</h2>

          <p>
            High quality product from Diml Tech Enterprises. Designed for durability
            and performance.
          </p>

          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;