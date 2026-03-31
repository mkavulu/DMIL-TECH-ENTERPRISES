import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer"; // footer component
import "./styles/style.css";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cart" element={<Cart />} />



        </Routes>

        <Footer /> {/* footer always at bottom */}
      </div>
    </Router>
  );
}

export default App;

