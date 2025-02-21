import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", address: "", message: "" });
  };

  return (
    <Container maxWidth="sm" className="contact-form-container">
      <Typography variant="h4" gutterBottom className="form-title">
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom className="form-description">
        We would love to hear from you! Please fill out the form below.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="Address"
          name="address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Box display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Send Message
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;
