import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import "./SignUp.css";

const SignUp = ({ onNavigate }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const Change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    alert("Sign Up Successful!");
  };

  return (
    <Container className="signup-container" maxWidth="sm">
      <Paper className="signup-paper" elevation={3}>
        <Typography variant="h5">Sign Up</Typography>
        <form onSubmit={Submit}>
          <TextField fullWidth label="Name" name="name" onChange={Change} margin="normal" required />
          <TextField fullWidth label="Email" name="email" type="email" onChange={Change} margin="normal" required />
          <TextField fullWidth label="Password" name="password" type="password" onChange={Change} margin="normal" required />
          <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
        </form>
        <Button onClick={onNavigate} color="secondary">Already have an account? Sign In</Button>
      </Paper>
    </Container>
  );
};

export default SignUp;
