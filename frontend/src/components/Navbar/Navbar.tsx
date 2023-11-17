import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Initialize state to manage the menu's visibility
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Tn.News
      </Link>

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
        <li>Politics</li>
        <li>Science</li>
        <li>World</li>
        <li>Arts</li>
        <li>Books</li>
        <li>Movies</li>
        <li>Business</li>
      </ul>
      <button className="navbar__contact">Contact us</button>
    </nav>
  );
};

export default Navbar;
