import React from "react";
import navlogo from '../images/nav-logo.png';

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <img src={navlogo} alt="Little Lemon Logo" className="nav-logo"/>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#orederOnline">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;