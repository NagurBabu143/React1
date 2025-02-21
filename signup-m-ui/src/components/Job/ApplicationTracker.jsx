import React from "react";
import { Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import "./../styles/ApplicationTracker.css";

function ApplicationTracker({ appliedJobs }) {
  return (
    <Container>
      <Typography variant="h4" className="tracker-title">My Applications</Typography>
      <List>
        {appliedJobs.map((job, index) => (
          <ListItem key={index} className="tracker-item">
            <ListItemText 
              primary={job.title} 
              secondary={`${job.company} - ${job.location} (Applied by ${job.applicant.name})`} 
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ApplicationTracker;
