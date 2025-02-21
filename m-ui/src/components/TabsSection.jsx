import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const TabsSection = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>
      <Box p={2}>
        {value === 0 ? <Typography>Content for Tab 1</Typography> : <Typography>Content for Tab 2</Typography>}
      </Box>
    </Box>
  );
};

export default TabsSection;
