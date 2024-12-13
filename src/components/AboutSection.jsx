import React from "react";
import "../styles/about.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Stonepedia</h2>
        <p>
          Stonepedia is dedicated to providing the finest quality stones for all your
          architectural and decorative needs. With years of experience, we ensure
          the best selection and customer service.
        </p>
        <button className="about-button">Learn More</button>
      </div>
      <img
        src="/images/about-image.jpg" /* Replace with an actual image in public/images */
        alt="About Stonepedia"
        className="about-image"
      />
    </section>
  );
};

export default AboutSection;
