import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Diml Tech Enterprises. All rights reserved.</p>
        
        <div className="footer-links">
          <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
            About Us
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>
            Contact
          </Link>
          <Link to="/privacy" className={location.pathname === "/privacy" ? "active-link" : ""}>
            Privacy Policy
          </Link>
        </div>

        <div className="footer-contact">
          <span>📧 <a href="mailto:dmiltechenterprises@gmail.com">dmiltechenterprises@gmail.com</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

