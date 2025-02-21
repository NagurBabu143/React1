import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import '../styles/styles.css';
function DateFilter({ records }) {
  const [date, setDate] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  const filterByDate = () => {
    const result = records.filter((rec) => rec.date === date);
    setFilteredRecords(result);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Typography variant="h6">Filter By Date</Typography>
      <TextField
        type="date"
        variant="outlined"
        onChange={(e) => setDate(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={filterByDate} sx={{ mt: 1 }}>
        Filter
      </Button>
      {filteredRecords.length > 0 && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {filteredRecords.length} Record(s) Found
        </Typography>
      )}
    </Box>
  );
}

export default DateFilter;
