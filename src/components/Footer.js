import React from "react";
import footerlogo from '../images/footer-logo.png';
import './Footer.css'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={footerlogo} alt="Litlle lemon logo" className="footer-logo"/>
        <div className="doormat-navigation">
          <h4>Doormat Navigation</h4>
          <ul>
          <li><Link to="/" className="doormat-navigation-link">Home</Link></li>
            <li><Link to="/about" className="doormat-navigation-link">About</Link></li>
            <li><Link to="/menu" className="doormat-navigation-link">Menu</Link></li>
            <li><Link to="/select-restaurant" className="doormat-navigation-link">Reservations</Link></li>
            <li><Link to="/orderOnline" className="doormat-navigation-link">Order Online</Link></li>
            <li><Link to="/login" className="doormat-navigation-link">Login</Link></li>
          </ul>
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <ul>
            <li>1234 North Clark Street, Chicago, IL 60610</li>
            <li>(312) 555-1234</li>
            <li>littlelemon@littlelemon.com</li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Social Media Links</h4>
          <a href="https://www.facebook.com" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;