import React from "react";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  // Build WhatsApp link with product name
  const whatsappLink = `https://wa.me/101489416?text=Hello%20Diml%20Tech%20Enterprises,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20priced%20at%20Ksh${product.price}`;

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
