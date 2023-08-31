import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  return <div className="footer">Copyright &copy;{today.getFullYear()}</div>;
};

export default Footer;
