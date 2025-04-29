import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Blog Platform</h3>
          <p className="footer-description">
          Express your ideas. Inspire minds. Connect globally.
          </p>
          <p className="copyright">
             © 2025 Aditya’s Blog.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <span>
              alex.thompson99@gmail.com
              </span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 8493688206</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Madison Avenue, New York, NY, USA</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="3x"/>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="3x"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
