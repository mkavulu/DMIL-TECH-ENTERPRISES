import React from "react";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  // Correct WhatsApp link with product name and price
  const whatsappLink = `https://wa.me/254101489416?text=${encodeURIComponent(
    `Hello Diml Tech Enterprises, I would like to order ${product.name} priced at Ksh${product.price}`
  )}`;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img src={product.image} alt={product.name} />

      <div className="card-content">
        <h3>{product.name}</h3>
        <p className="price">Ksh {product.price}</p>

        {/* WhatsApp Order button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="order-btn"
        >
          Order Now
        </a>
      </div>
    </motion.div>
  );
}

export default ProductCard;

