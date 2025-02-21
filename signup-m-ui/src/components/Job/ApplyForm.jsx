import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";
import "./../styles/ApplyForm.css";

function ApplyForm({ open, handleClose, job, onApply }) {
  const [applicant, setApplicant] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onApply({ ...job, applicant });
    setApplicant({ name: "", email: "" });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Apply for {job?.title}</DialogTitle>
      <DialogContent>
        <TextField label="Full Name" name="name" fullWidth margin="dense" onChange={handleChange} />
        <TextField label="Email" name="email" fullWidth margin="dense" onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ApplyForm;
