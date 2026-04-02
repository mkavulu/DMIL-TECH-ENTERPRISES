import React from "react";
import { motion } from "framer-motion";
import headerImage from "../assets/header.jpg"; // your photo

function HeroSection() {
  return (
    <div className="hero-section">
      {/* Background photo */}
      <img src={headerImage} alt="Header" className="hero-bg" />

      {/* Overlay with animated text */}
      <div className="hero-overlay">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Diml Tech Enterprises
        </motion.h2>

        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Modern gadgets. Affordable prices. Trusted quality.
        </motion.h4>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
}

export default HeroSection;
