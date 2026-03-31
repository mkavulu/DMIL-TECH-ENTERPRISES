import React from "react";
import headerImage from "../assets/header.jpg";

function Header() {
  return (
    <div className="header">
      <img src={headerImage} alt="Header" className="header-image" />
      <div className="header-overlay">
        <h1>Welcome to Diml Tech Enterprises</h1>
        <p>Modern gadgets. Affordable prices. Trusted quality.</p>
      </div>
    </div>
  );
}

export default Header;
