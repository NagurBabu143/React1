import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardsSection = () => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body2">Card description goes here.</Typography>
      </CardContent>
    </Card>
  );
};

export default CardsSection;
