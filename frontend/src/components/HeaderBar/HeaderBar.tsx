import "./HeaderBar.css";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeaderBar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.SyntheticEvent) => {
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="headerbar">
      <form className="headerbar__searchbar" onSubmit={handleSearch}>
        <button type="submit">
          <BiSearch />
        </button>
        <input
          type="text"
          placeholder="SEARCH..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {/* <ul className="headerbar__list">
        <li>Politics</li>
        <li>Science</li>
        <li>World</li>
        <li>Arts</li>
        <li>Books</li>
        <li>Movies</li>
        <li>Business</li>
      </ul> */}
    </nav>
  );
};

export default HeaderBar;
