import React from "react";
import "../styles/style.css";
import Footer from "../components/Footer";

function Services() {
  return (
    <div className="services-page app-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Professional IT solutions tailored to your needs</p>
      </section>

      <div className="services-container">
        <section>
          <h2> Computer Services</h2>
          <p>
            We provide expert computer repair, maintenance, and setup services
            to keep your systems running smoothly.
          </p>
        </section>

        <section>
          <h2> Networking Services</h2>
          <p>
            From small offices to enterprise setups, we design and install
            reliable networks, including cabling, routers, and switches.
          </p>
        </section>

        <section>
          <h2> Server Installation & Setup</h2>
          <p>
            Our team specializes in server installation, configuration, and
            optimization to ensure secure and efficient operations.
          </p>
        </section>

        <section>
          <h2> CCTV Installation</h2>
          <p>
            We install and configure CCTV systems for homes, offices, and
            businesses, ensuring reliable security monitoring and peace of mind.
          </p>
        </section>

        <a
          href="https://wa.me/254101489416?text=Hello%20Diml%20Tech%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="order-btn"
        >
          Contact Us on WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Services;

