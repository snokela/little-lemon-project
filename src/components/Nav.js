import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#orederOnline">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;