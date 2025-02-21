import React from "react";
import { Card, CardContent, Typography, Button, Grid, Container } from "@mui/material";
import "./../styles/JobList.css";

const jobData = [
  { id: 1, title: "Software Engineer", company: "Google", location: "California" },
  { id: 2, title: "Frontend Developer", company: "Facebook", location: "New York" },
  { id: 3, title: "Data Scientist", company: "Amazon", location: "Seattle" },
];

function JobList({ onApply }) {
  return (
    <Container>
      <Typography variant="h4" className="job-title">Available Jobs</Typography>
      <Grid container spacing={2}>
        {jobData.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card className="job-card">
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography>{job.company}</Typography>
                <Typography>{job.location}</Typography>
                <Button variant="contained" color="primary" onClick={() => onApply(job)}>
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default JobList;
