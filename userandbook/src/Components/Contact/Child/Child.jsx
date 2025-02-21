import React from "react";
import "./Child.css";

const Child = ({ contacts }) => {
  return (
    <div className="grid">
      {contacts.map((contact, index) => (
        <div key={index} className="grid-item">
          <h2>{contact.name}</h2>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Child;
