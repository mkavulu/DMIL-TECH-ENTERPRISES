// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);

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

          {/* Contacts dropdown */}
          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setContactsOpen(!contactsOpen)}
            >
              Contacts
            </button>
            <ul className={`dropdown-menu ${contactsOpen ? "show" : ""}`}>
              <li>📞 +254710165356</li>
              <li>📞 +101489416</li>
              <li>📧 dmiltechenterprises@gmail.com</li>
            </ul>
          </li>

          {/* WhatsApp link inline */}
          <li>
            <a
              href="https://wa.me/254101489416"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Connect on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
