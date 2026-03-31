import React from "react";
import HeroSection from "../components/Hero";  // merged header + hero
import Products from "./Products";

function Home({ addToCart }) {
  return (
    <div>
      <HeroSection />   {/* hero only on homepage */}
      <Products addToCart={addToCart} />  {/* products grid below */}
    </div>
  );
}

export default Home;

