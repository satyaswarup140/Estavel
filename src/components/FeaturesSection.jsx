import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features">
      <h2 className="features-title">Why StonePedia?</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/path/to/icon1.png" alt="Quality Control" />
          <h3>Rigorous Quality Control</h3>
          <p>Multi-level inspections ensure every stone meets high standards.</p>
        </div>
        <div className="feature-item">
          <img src="/path/to/icon2.png" alt="Certified Suppliers" />
          <h3>Certified Suppliers & Compliance</h3>
          <p>Our suppliers comply with international standards.</p>
        </div>
        <div className="feature-item">
          <img src="/path/to/icon3.png" alt="Expert Guidance" />
          <h3>Expert Guidance and Support</h3>
          <p>StonePedia’s specialists provide expert advice tailored to you.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
