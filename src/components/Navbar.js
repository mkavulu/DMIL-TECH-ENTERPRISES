import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <div className="logo">Diml Tech Enterprises</div>

        {/* nav-links pushed to far right */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Contact info */}
        <div className="nav-contact">
          <span>📞 +254710165356</span>
          <span>📞 +101489416</span>
          <span>📧 dmiltechenterprises@gmail.com</span>
          <a
            href="https://web.whatsapp.com/send?phone=254101489416"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


