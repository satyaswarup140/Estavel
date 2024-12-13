import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Product Section */}
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li>StonePedia Exclusive</li>
            <li>Best Seller</li>
            <li>Premium Stones</li>
            <li>Shop by Color</li>
            <li>Shop by Category</li>
            <li>Applications</li>
            <li>Customer Review</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Blogs</li>
            <li>Help Center</li>
            <li>Request for Quotation</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Cancellation Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div className="footer-section">
          <h4>Reach Us</h4>
          <ul>
            <li>In The Press</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Feedback</li>
            <li>Partner with Us</li>
          </ul>
        </div>

        {/* User Actions Section */}
        <div className="footer-section">
          <h4>Get Started</h4>
          <ul>
            <li>Login</li>
            <li>Sign up</li>
            <li>Report Complaint</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
