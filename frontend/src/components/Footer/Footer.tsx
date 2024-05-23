import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <div className="footer">
      <div className="column">
        <strong>Today's News</strong>
        <br />
        Copyright &copy;{today.getFullYear()}
      </div>
      <div className="column">
        <h4>London</h4>
        <p>123 London Street</p>
        <p>+44 123456789</p>
      </div>
      <div className="column">
        <h4>Stockholm</h4>
        <p>456 Stockholm Street</p>
        <p>+46 987654321</p>
      </div>
    </div>
  );
};

export default Footer;
