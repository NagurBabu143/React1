import { Button, Container, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";

function SignupForm() {
  const [user, setUser] = useState({
    firstname: "",
    secondname: "",
    email: "",
    password: "",
    reenterpassword: "",
  });

  const Change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();
  
    sessionStorage.setItem("user", JSON.stringify(user));
    alert("Sign Up Successful!");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <Box component="form" onSubmit={Submit} display="flex" flexDirection="column" gap={2}>
        <TextField  label="First Name" variant="outlined"  name="firstname"  value={user.firstname}  onChange={Change}  />
        <TextField  label="Second Name"  variant="outlined"  name="secondname"  value={user.secondname}  onChange={Change} />
        <TextField label="Email"  variant="outlined"  name="email"  value={user.email}  onChange={Change} />
        <TextField  label="Password"  type="password"  variant="outlined"  name="password"  value={user.password}  onChange={Change}  />
        <TextField  label="Re-enter Password"  type="password"  variant="outlined" name="reenterpassword" value={user.reenterpassword} onChange={Change} />
        <Button type="submit" variant="contained" color="primary">Signup</Button>
      </Box>
    </Container>
  );
}

export default SignupForm;
