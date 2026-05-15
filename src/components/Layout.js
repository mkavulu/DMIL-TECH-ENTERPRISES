// src/components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop /> {/* arrow visible on all pages */}
    </div>
  );
}

export default Layout;

