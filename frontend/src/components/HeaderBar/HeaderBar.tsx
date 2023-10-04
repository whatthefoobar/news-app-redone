import "./HeaderBar.css";
import { BiSearch } from "react-icons/bi";

const HeaderBar = () => {
  return (
    <nav className="headerbar">
      <div className="headerbar__searchbar">
        <button>
          <BiSearch />
        </button>
        <input type="text" placeholder="SEARCH..." />
      </div>
      <ul className="headerbar__list">
        <li>Academic</li>
        <li>Environment</li>
        <li>sports</li>
        <li>Politics</li>
        <li>Arts</li>
        <li>Finance</li>
      </ul>
    </nav>
  );
};

export default HeaderBar;
