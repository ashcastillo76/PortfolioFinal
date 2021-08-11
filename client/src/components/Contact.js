import React, { useState } from "react";
import { Form, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="formBodyContainer" onSubmit={handleSubmit}>
      <Row>
        <h2 className="hireTitle">Hire Me</h2>
      </Row>
      <Row>
        <p className="hireParagraph">“People are not your most important asset. The right people are.” -Jim Collins</p>
      </Row>
      <div>
        <label className="nameLabel" htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label className="emailLabel" htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label className="message" htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button className="contactSubmit" type="submit">{status}</button>
    </form>
  );
};

export default Contact;