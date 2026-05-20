import React from "react";
import bannerImage from "../assets/about-banner.jpg"; // place your banner image in assets

function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Banner */}
      <div className="about-hero">
        <img src={bannerImage} alt="About Us Banner" className="about-hero-img" />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Modern gadgets. Affordable prices. Trusted quality.</p>
        </div>
      </div>

      {/* Content */}
      <div className="about-container">
        <section className="intro">
          <p>
            Welcome to <strong>Diml Tech Enterprises</strong> — your trusted partner
            for modern gadgets, affordable prices, and unmatched quality.
          </p>
        </section>

        <section className="who-we-are">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to bringing you the latest
            technology at prices that make sense. From laptops and desktops to
            smart accessories, servers, HDD,SSD, RAM and printers, we carefully select every product to ensure
            reliability, performance, and value.
          </p>
        </section>

        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <ul>
            <li> Affordable prices without compromising quality</li>
            <li> Wide range of trusted brands and gadgets</li>
            <li> Personalized customer support and fast response</li>
            <li> Easy ordering via WhatsApp for convenience</li>
          </ul>
        </section>

        <section className="order-now">
          <h2>Order With Ease</h2>
          <p>
            Ready to upgrade your tech? Connect with us directly on WhatsApp and
            place your order instantly.
          </p>
          <a
            href="https://wa.me/101489416?text=Hello%20Diml%20Tech%20Enterprises,%20I%20would%20like%20to%20order%20a%20product."
            target="_blank"
            rel="noopener noreferrer"
            className="order-btn"
          >
            Order Now on WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
