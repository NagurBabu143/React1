import { Button, Container, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";

function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser?.email === email && storedUser?.password === password) {
      alert("Sign In Successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Sign In</Typography>
      <Box component="form" onSubmit={Submit} display="flex" flexDirection="column" gap={2}>
        <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained">Sign In</Button>
      </Box>
    </Container>
  );
}

export default SigninForm;
