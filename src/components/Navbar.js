// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";   // hamburger + close icons


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="logo">Diml Tech Enterprises</div>

        {/* Hamburger / Close icon */}
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/privacy" onClick={() => setIsOpen(false)}>Privacy Policy</Link></li>
        </ul>

        {/* Contact info (desktop only) */}
        <div className="nav-contact">
          <span>📞 +254710165356</span>
          <span>📞 +101489416</span>
          <span>📧 dmiltechenterprises@gmail.com</span>
          <a
            href="https://wa.me/254101489416"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




