import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
      <Typography variant="body2">© 2025 My Website. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
