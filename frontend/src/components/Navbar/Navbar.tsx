import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

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
        <li className={splitLocation[2] === "" ? "active" : ""}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={splitLocation[1] === "politics" ? "active" : ""}>
          <NavLink to="/category/politics">Politics</NavLink>
        </li>
        <li className={splitLocation[1] === "science" ? "active" : ""}>
          <NavLink to="/category/science">Science</NavLink>
        </li>
        <li className={splitLocation[1] === "world" ? "active" : ""}>
          <NavLink to="/category/world">World</NavLink>
        </li>
        <li className={splitLocation[1] === "arts" ? "active" : ""}>
          <NavLink to="/category/arts">Arts</NavLink>
        </li>
        <li className={splitLocation[1] === "books" ? "active" : ""}>
          <NavLink to="/category/books">Books</NavLink>
        </li>
        <li className={splitLocation[1] === "movies" ? "active" : ""}>
          <NavLink to="/category/movies">Movies</NavLink>
        </li>
      </ul>

      <NavLink to="/contact" className="navbar__contact">
        Contact us
      </NavLink>
    </nav>
  );
};

export default Navbar;
