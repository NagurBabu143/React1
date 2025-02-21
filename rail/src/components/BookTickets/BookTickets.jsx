import React, { useState } from "react";
import "./BookTickets.css";

function BookTickets() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!from || !to || !date) {
            setError("Please fill in all fields.");
        } else {
            setError("");
        
            alert(`Searching trains from ${from} to ${to} on ${date}`);
        }
    };

    return (
        <section id="book-tickets" className="book-tickets">
            <h2>Book Your Tickets</h2>
            <form className="ticket-form" onSubmit={handleSubmit}>
                <input  type="text"  placeholder="From"  className="form-input"  value={from}  onChange={(e) => setFrom(e.target.value)}  />
                <input type="text"  placeholder="To"  className="form-input"  value={to} onChange={(e) => setTo(e.target.value)}  />
                <input type="date" className="form-input" value={date} onChange={(e) => setDate(e.target.value)} />
                 <p className="error-message">{error}</p>
                <button type="submit" className="search-button">Search Trains</button>
            </form>
        </section>
    );
}

export default BookTickets;
