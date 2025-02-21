
import React from "react";
import PropertyList from "./components/PropertyList";
import ContactForm from "./components/ContactForm";
import "./App.css"; 

import DataTable from "./table";
import ExpandableRowsTable from "./table1";
import CardsWithMediaAndIcons from "./card";


const App = () => {
  return (
    <div className="App">
      <PropertyList />
      <ContactForm />
      <DataTable/>
      <ExpandableRowsTable/>
      <CardsWithMediaAndIcons/>
    </div>
  );
};

export default App;
