import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import "./SignIn.css";

const SignIn = ({ onNavigate }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const Change = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container className="signin-container" maxWidth="sm">
      <Paper className="signin-paper" elevation={3}>
        <Typography variant="h5">Sign In</Typography>
        <form onSubmit={Submit}>
          <TextField fullWidth label="Email" name="email" type="email" onChange={Change} margin="normal" required />
          <TextField fullWidth label="Password" name="password" type="password" onChange={Change} margin="normal" required />
          <Button type="submit" variant="contained" color="primary" fullWidth>Sign In</Button>
        </form>
        <Button onClick={onNavigate} color="secondary">Don't have an account? Sign Up</Button>
      </Paper>
    </Container>
  );
};

export default SignIn;
