// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";


import "./styles/style.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />

          {/* Page routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
