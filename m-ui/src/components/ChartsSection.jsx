import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
};

const ChartsSection = () => {
  return (
    <Box p={2}>
      <Bar data={data} />
    </Box>
  );
};

export default ChartsSection;
