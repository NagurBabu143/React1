import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <FormControlLabel control={<Switch onChange={toggleDarkMode} />} label="Dark Mode" />
  );
};

export default DarkModeToggle;
