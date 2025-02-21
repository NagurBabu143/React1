import React from "react";
import { Divider, Box, Typography } from "@mui/material";

const DividerSection = () => {
  return (
    <Box p={2}>
      <Typography variant="h6">Section 1</Typography>
      <Divider />
      <Typography variant="h6" sx={{ mt: 2 }}>Section 2</Typography>
    </Box>
  );
};

export default DividerSection;
