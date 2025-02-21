import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", p: 4, color: "white", textAlign: "center" }}>
      <Typography variant="h4">Welcome to My Website</Typography>
    </Box>
  );
};

export default Banner;
