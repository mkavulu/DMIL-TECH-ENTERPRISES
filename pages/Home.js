// src/pages/Home.js
import React from "react";
import HeroSection from "../components/Hero";   // merged header + hero
import Products from "./Products";
import ScrollToTop from "../components/ScrollToTop"; // floating arrow

function Home({ addToCart }) {
  return (
    <div>
      {/* Hero only on homepage */}
      <HeroSection />

      {/* Products grid below with anchor for smooth scroll */}
      <div id="products-section">
        <Products addToCart={addToCart} />
      </div>

      {/* Floating arrow that appears when scrolling down */}
      <ScrollToTop />
    </div>
  );
}

export default Home;
