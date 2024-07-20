import React from "react";
import  './Header.css'
import headerImg from '../images/restauranfood.png'
import NavigateButton from "./NavigateButton";

const Header = () => {
  return (
    <header className="header">
    <div className="header-left">
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>Welcome to our restaurant. We offer the best dishes in the city. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <NavigateButton to="select-restaurant" >Reserve a Table</NavigateButton>
    </div>
    <div className="header-right">
    <img src={headerImg} alt="Restaurant food image" className="header-image"/>
    </div>
  </header>
  );
}

export default Header;
