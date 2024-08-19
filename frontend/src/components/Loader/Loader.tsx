import React from "react";
import "./Loader.css"; // Import the CSS for custom styling
import spinner from "../../assets/images/spinner.gif"; // Adjust the path based on your folder structure

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
