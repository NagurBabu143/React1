import React from "react";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";

const MainContent = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Website
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple webpage created using React and Material-UI.
      </Typography>

      <Card sx={{ maxWidth: 400, margin: "auto", padding: "1rem" }}>
        <CardContent>
          <Typography variant="h5">Material UI Card</Typography>
          <Typography variant="body2" color="textSecondary">
            This is an example of a Material-UI Card component.
          </Typography>
        </CardContent>
      </Card>

      <Button variant="contained" color="primary" sx={{ marginTop: "1rem" }}>
        Get Started
      </Button>
    </Container>
  );
};

export default MainContent;
