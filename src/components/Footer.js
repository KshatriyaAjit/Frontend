import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/img/branding/wave-logo.svg';
 // Import the updated CSS file

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Column 1: Logo */}
        <div className="footer-column">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="footer-logo"
            />
          </Link>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-column">
          <address>
            8014 Edith Blvd NE,<br />
            Albuquerque, New York, United States
          </address>
          <a href="tel:+15057922430" className="footer-link">
            <FaPhoneAlt /> (505) 792-2430
          </a>
          <a href="mailto:demo@yourdomain.com" className="footer-link">
            <FaEnvelope /> demo@yourdomain.com
          </a>
        </div>

        {/* Column 3: Learn More Links */}
        <div className="footer-column">
          <h4>Learn More</h4>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/advertise" className="footer-link">Advertise</Link>
          <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div className="footer-column">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter to get our news & discounts delivered to you.</p>
          <form className="newsletter-form">
            <div className="email-input-container">
              <FaEnvelope className="email-icon" />
              <input
                type="email"
                placeholder="Email Address"
                className="email-input"
              />
            </div>
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


