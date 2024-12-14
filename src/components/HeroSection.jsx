import React from "react";
import heroImage from "../assets/hero-bg.png"; 
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`, 
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Stonepedia</h1>
        <p>Your ultimate destination for premium quality stones.</p>
        <button className="hero-button">Explore Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
