import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // Initialize state to manage the menu's visibility
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Lo.News</div>
      <button
        className={`navbar__burger ${isMenuVisible ? "open" : ""}`}
        id="navbarBurger"
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul
        className={`navbar__menu ${isMenuVisible ? "active" : ""}`}
        id="navbarMenu"
      >
        <li>Home</li>
        <li>Reviews</li>
        <li>Daily News</li>
        <li>Features</li>
      </ul>
      <button className="navbar__contact">Contact</button>
    </nav>
  );
};

export default Navbar;
