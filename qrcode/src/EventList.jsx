import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [qrData, setQrData] = useState("");

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        const qrContent = data.map(event => `${event.name}: ${event.location}`).join(" | ");
        setQrData(qrContent);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <h2>Event Details</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.name}</strong>: {event.location}
          </li>
        ))}
      </ul>
      <h3>QR Code for Events</h3>
      <QRCodeCanvas value={qrData} size={200} />
    </div>
  );
};

export default EventList;
