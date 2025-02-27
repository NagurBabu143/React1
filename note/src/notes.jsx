import React, { useState } from "react";
import { TextField, Grid, Button, Card, CardContent, Typography, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

function NotesData() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", text: "" });
  const [editIndex, setEditIndex] = useState(null); 

  
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = () => {
    if (!note.title.trim() || !note.text.trim()) return;

    if (editIndex !== null) {
      
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = note;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      
      setNotes([...notes, note]);
    }

    setNote({ title: "", text: "" }); 
  };

  
  const handleEdit = (index) => {
    setNote(notes[index]); 
    setEditIndex(index);
  };

 
  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <TextField 
          fullWidth label="Title" name="title" variant="outlined" margin="normal" 
          value={note.title} onChange={handleChange} 
        />
        <TextField 
          fullWidth label="Text" name="text" variant="outlined" margin="normal" multiline rows={3} 
          value={note.text} onChange={handleChange} 
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
          {editIndex !== null ? "Update" : "Submit"}
        </Button>

        {/* Display Notes */}
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {notes.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>{item.text}</Typography>
                  <IconButton color="primary" onClick={() => handleEdit(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(index)}>
                    <Delete />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NotesData;
