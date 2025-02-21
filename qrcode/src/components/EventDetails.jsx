import React from "react";

const EventDetails = ({ event }) => {
  return (
    <div className="event-details">
      <h2>Wedding Details</h2>
      <p><strong>👤 Groom:</strong> {event.groom}</p>
      <p><strong>👰 Bride:</strong> {event.bride}</p>
      <h3>Events:</h3>
      {event.events.map((e, index) => (
        <div key={index} className="event-box">
          <h3>{e.title}</h3>
          <p><strong>📅 Date:</strong> {e.date}</p>
          <p><strong>⏰ Time:</strong> {e.time}</p>
          <p><strong>📍 Location:</strong> {e.location}</p>
          <p><strong>🏠 Address:</strong> {e.address}</p>
          <a href={e.mapLink} target="_blank" rel="noopener noreferrer">📍 View on Google Maps</a>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
