import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Grid, Typography, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import "./Notes.css";


const Notes = () => {
  const [list, setList] = useState([]);
  const [note, setNote] = useState({ title: "", text: "" });
  const [editIdx, setEditIdx] = useState(null);

  const change = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const save = () => {
    if (!note.title.trim() || !note.text.trim()) return;
    const updatedList = [...list];

    editIdx !== null ? (updatedList[editIdx] = note) : updatedList.push(note);

    setList(updatedList);
    setNote({ title: "", text: "" });
    setEditIdx(null);
  };

  const edit = (idx) => {
    setNote(list[idx]);
    setEditIdx(idx);
  };

  const remove = (idx) => {
    setList(list.filter((_, i) => i !== idx));
  };

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label="Title" name="title" value={note.title} onChange={change} margin="normal" />
        <TextField fullWidth label="Text" name="text" multiline rows={3} value={note.text} onChange={change} margin="normal" />
        <Button variant="contained" onClick={save} fullWidth sx={{ mt: 1 }}>
          {editIdx !== null ? "Update" : "Add"}
        </Button>
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {list.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ minHeight: 150 }}>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>{item.text}</Typography>
                  <IconButton onClick={() => edit(idx)} color="primary"><Edit /></IconButton>
                  <IconButton onClick={() => remove(idx)} color="error"><Delete /></IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Notes;