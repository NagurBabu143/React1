import { Box } from "@mui/material";
import React from "react";

function Heroimage() {
  return (
    <Box sx={{
        
        width:'400px',
        height:'500px'

    }}>
      
      <img src="assets/Student.jpg" alt="Student" sx={{ width: '100%' }} />



    </Box>
  );
}

export default Heroimage;
