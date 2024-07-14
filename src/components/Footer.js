import React from "react";
import footerlogo from '../images/footer-logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={footerlogo} alt="Litlle lemon logo" className="footer-logo"/>
        <div className="doormat-navigation">
          <h6>Doormat Navigation</h6>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orederOnline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="contact">
          <h6>Contact</h6>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>email</li>
          </ul>
        </div>
        <div className="social-media">
          <h6>Social Media Links</h6>
          <ul>
            <li>The link to the Facebook icon goes here</li>
            <li>The link to the Instagram icon goes here</li>
            <li>The link to the Twitter icon goes here</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;