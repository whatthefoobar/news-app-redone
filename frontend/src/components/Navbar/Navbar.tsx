import { useState } from "react";
import { Link } from "react-router-dom";
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/politics">Politics</Link>
        </li>
        <li>
          <Link to="/category/science">Science</Link>
        </li>
        <li>
          <Link to="/category/world">World</Link>
        </li>
        <li>
          <Link to="/category/arts">Arts</Link>
        </li>
        <li>
          <Link to="/category/books">Books</Link>
        </li>
        <li>
          <Link to="/category/movies">Movies</Link>
        </li>
      </ul>

      <Link to="/contact" className="navbar__contact">
        Contact us
      </Link>
    </nav>
  );
};

export default Navbar;
