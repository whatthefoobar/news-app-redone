import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavbarT = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="flex justify-between items-center p-2 md:px-10 bg-white shadow-lg">
      <div className="flex-1 flex justify-start">
        <Link
          to="/"
          className="text-2xl font-bold pr-2 border-r-2 border-gray-600 mr-2"
        >
          Tn.News
        </Link>
      </div>
      <button
        className={`md:hidden ${isMenuVisible ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-gray-800 my-1"></div>
        <div className="w-6 h-0.5 bg-gray-800 my-1"></div>
        <div className="w-6 h-0.5 bg-gray-800 my-1"></div>
      </button>
      <ul
        className={`fixed top-16 left-0 w-full bg-white md:bg-transparent md:relative md:flex md:items-center md:gap-4 md:flex-1 justify-center ${
          isMenuVisible ? "flex flex-col items-center" : "hidden"
        }`}
      >
        <li
          className={`p-2 ${
            splitLocation[2] === "" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className={`p-2 ${
            splitLocation[1] === "politics" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/category/politics"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            Politics
          </NavLink>
        </li>
        <li
          className={`p-2 ${
            splitLocation[1] === "science" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/category/science"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            Science
          </NavLink>
        </li>
        <li
          className={`p-2 ${
            splitLocation[1] === "world" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/category/world"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            World
          </NavLink>
        </li>
        <li
          className={`p-2 ${
            splitLocation[1] === "arts" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/category/arts"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            Arts
          </NavLink>
        </li>
        <li
          className={`p-2 ${
            splitLocation[1] === "books" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/category/books"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            Books
          </NavLink>
        </li>
        <li
          className={`p-2 ${
            splitLocation[1] === "movies" ? "text-black" : "text-gray-600"
          }`}
        >
          <NavLink
            to="/category/movies"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-600"
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <div className="flex-1 flex justify-end">
        <NavLink
          to="/contact"
          className="bg-transparent border border-black text-black px-4 py-2 text-lg transition duration-300 hover:bg-orange-400"
        >
          Contact us
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarT;
