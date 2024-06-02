import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-field">
          <input type="text" id="fullName" placeholder="Full Name" required />
        </div>
        <div className="form-field">
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-field">
          <textarea id="message" placeholder="Message" required></textarea>
        </div>
        <button className="contact-button" type="submit">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
