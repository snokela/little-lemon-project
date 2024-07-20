import React from "react";
import navlogo from '../images/nav-logo.png';
import  './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <img src={navlogo} alt="Little Lemon Logo" className="nav-logo"/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><Link to="/select-restaurant">Reservations</Link></li>
          <li><a href="#orederOnline">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;