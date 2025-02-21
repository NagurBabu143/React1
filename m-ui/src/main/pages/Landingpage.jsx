import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Nav/Navbar";
import Herosection from "../components/hero/Herosection";
import Accodian from "../components/Accodian";

import CardDisplay from "../components/cardsection/carddisplay";
import Maintab from "../components/Tabsection/Maintab";

const Landingpage = () => {
  return (
    <Container>
      <Box>
        <Navbar />
        <Herosection/>
        <Accodian/>
        <CardDisplay/>
       <Maintab/>
        
        

        
      </Box>
    </Container>
  );
};

export default Landingpage;
