import React from "react";
import { useLocation } from "react-router-dom";
import  './Header.css'
import headerImg from '../images/restauranfood.png'
import NavigateButton from "./NavigateButton";

const Header = () => {
  const location = useLocation();

  const headerContent = {
    "/": {
      title: "Little Lemon",
      subtitle: "Chicago",
      description: "Welcome to Little Lemon, a Mediterranean oasis in the heart of the city! Our restaurant offers authentic Mediterranean delights made from fresh, high-quality ingredients. Here, you can enjoy a variety of flavors, including delicious seafood, grilled meats, vegetarian dishes, fresh salads, and traditional pastries. Our relaxing and cozy environment captures the essence of the Mediterranean coast, and our friendly staff ensures your visit is memorable. Whether you're here for a romantic dinner, a family meal, or lunch with friends, Little Lemon is the perfect choice. Welcome to enjoy the best Mediterranean flavors in the middle of the city!",
      buttonText: "Reserve a Table"
    },
    "/about": {
      title: "Little Lemon",
      subtitle: "Chicago",
      description: "Learn more about Little Lemon. Our story, our values and our team.",
      buttonText: "Reserve a Table"
    },
    "/menu": {
      title: "Little Lemon",
      subtitle: "Chicago",
      description: "Discover our delicious dishes. From appetizers to desserts, we have something for everyone.",
      buttonText: "Reserve a Table"
    },
    "/select-restaurant": {
      title: "Select Occasion and Restaurant",
      subtitle: "",
      description: "Choose your preferred Little Lemon location and occasion before proceeding to fill in your reservation details. Enjoy a tailored dining experience just for you.",
      // buttonText: "Book Now"
    },
    "/orderOnline": {
      title: "Little Lemon",
      subtitle: "Chicago",
      description: "Enjoy our delicious dishes from the comfort of your home. Order online now.",
      // buttonText: "Order Now"
    },
    "/login": {
      title: "Little Lemon",
      subtitle: "Chicago",
      description: "Access your account to manage reservations and orders.",
      // buttonText: "Login"
    },
    "/booking": {
      title: "Reserve a Table",
      subtitle: "",
      description: "Enter your reservation details to complete your booking.",
      // buttonText: "Book Now"
    },
    "/confirmation": {
      title: "Reservation Confirmation",
      subtitle: "",
      description: "Your booking has been confirmed. We look forward to seeing you!"
    }
  };

  const currentPath = location.pathname
  const content = headerContent[currentPath] || headerContent["/"]

  return (
    <header className="header">
    <div className="header-left">
      <h1>{content.title}</h1>
      <h3>{content.subtitle}</h3>
      <p>{content.description}</p>
      {content.buttonText && (
      <NavigateButton to="select-restaurant" >{content.buttonText}</NavigateButton>
    )}
    </div>
    <div className="header-right">
    <img src={headerImg} alt="Restaurant food image" className="header-image"/>
    </div>
  </header>
  );
}

export default Header;
