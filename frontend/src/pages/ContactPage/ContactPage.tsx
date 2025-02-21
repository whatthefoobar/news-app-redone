import { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("Full Name:", fullName);
    // console.log("Email:", email);
    // console.log("Message:", message);

    // Send data to the backend
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Error sending message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact-page">
      {isSubmitted ? (
        <h2>Thank you for your message!</h2>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <div className="form-field">
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <textarea
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="contact-button" type="submit">
            Contact Us
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
