import React, { useState, useEffect } from "react";

const EventDetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error("Error loading event data:", error));
  }, []);

  return (
    <div>
      <h2>Marriage Events</h2>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.name}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventDetails;
