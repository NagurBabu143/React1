import React, { useState } from "react";
import "./TrainSchedule.css";

const scheduleData = [
    { train: "Express Train A", time: "09:00 AM", status: "On Time" },
    { train: "Local Train B", time: "09:30 AM", status: "Delayed" },
    { train: "Intercity Train C", time: "10:00 AM", status: "On Time" },
    { train: "Express Train D", time: "10:30 AM", status: "On Time" },
];

function TrainSchedule() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredSchedule = scheduleData.filter(train =>
        train.train.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="schedule" className="train-schedule">
            <h2>Train Schedule</h2>
            <p>Check train timings and availability here.</p>
            <input
                type="text"
                placeholder="Search for a train..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Train</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSchedule.length > 0 ? (
                        filteredSchedule.map((train, index) => (
                            <tr key={index} className="table-row">
                                <td>{train.train}</td>
                                <td>{train.time}</td>
                                <td className={train.status === "On Time" ? "status-on-time" : "status-delayed"}>
                                    {train.status}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-results">No trains found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default TrainSchedule;
