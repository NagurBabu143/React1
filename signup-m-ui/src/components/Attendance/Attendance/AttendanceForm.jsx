import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import '../styles/styles.css';
function AttendanceForm({ onAddAttendance, onUpdateAttendance }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [loginTime, setLoginTime] = useState(null);

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Please enter your name before logging in.");
      return;
    }

    const loginTime = new Date();
    setLoginTime(loginTime);
    setIsLoggedIn(true);

    // Add record immediately when logging in
    onAddAttendance({
      name,
      loginTime: loginTime.toLocaleTimeString(),
      logoutTime: "Pending...",
      totalHours: "Pending...",
      date: new Date().toLocaleDateString(),
    });
  };

  const handleLogout = () => {
    if (!loginTime) return;

    const logoutTime = new Date();
    setIsLoggedIn(false);

    // Calculate total hours
    const totalHours = ((logoutTime - loginTime) / (1000 * 60 * 60)).toFixed(2);

    // Update the existing record
    onUpdateAttendance({
      name,
      logoutTime: logoutTime.toLocaleTimeString(),
      totalHours,
    });

    // Reset state
    setName("");
    setLoginTime(null);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <TextField
        label="Enter Your Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoggedIn}
      />
      {!isLoggedIn ? (
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Box>
  );
}

export default AttendanceForm;
