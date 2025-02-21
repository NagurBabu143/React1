import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Button } from "@mui/material";

export default function ColorTabs() {
  const [value, setValue] = useState("one");

  const handleChange = (_event, newValue) => setValue(newValue);

  const tabs = [
    { 
      value: "one", 
      label: "Item One", 
      content: (
        <>
          <Typography variant="h6">Content for Item One</Typography>
          <Typography>This section contains more details about Item One.</Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Learn More</Button>
        </>
      ) 
    },
    { 
      value: "two", 
      label: "Item Two", 
      content: (
        <>
          <Typography variant="h6">Content for Item Two</Typography>
          <Typography>Here you can find more information about Item Two.</Typography>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </>
      ) 
    },
    { 
      value: "three", 
      label: "Item Three", 
      content: (
        <>
          <Typography variant="h6">Content for Item Three</Typography>
          <Typography>Explore details and features of Item Three.</Typography>
          <img src="/images/sample.jpg" alt="Sample" width="200" style={{ marginTop: 10 }} />
        </>
      ) 
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
        {tabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>

      {tabs.map(
        (tab) => value === tab.value && (
          <Box key={tab.value} sx={{ p: 3 }}>
            {tab.content}
          </Box>
        )
      )}
    </Box>
  );
}
