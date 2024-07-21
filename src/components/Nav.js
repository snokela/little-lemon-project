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
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/menu" className="link">Menu</Link></li>
          <li><Link to="/select-restaurant" className="link">Reservations</Link></li>
          <li><Link to="/orederOnline" className="link">Order Online</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;