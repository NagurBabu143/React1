import React from "react";
// import EmployeesProvider from "./components/example/EmployeesProvider";
// import ConsumeEmployees from "./components/example/ConsumeEmployees";
// import ProductsProvider from "./components/example/ProductsProvider";
// import ConsumeProducts from "./components/example/ConsumeProducts";
// import { Task } from "./components/example/task";
// import Task1 from "./components/example/task1";
//import ThemeProvider from "./components/example/Provider";
//import Consume from "./components/example/Consume";
import { GalleryProvider } from "./components/Gallery/GalleryContext";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <GalleryProvider>
        <Dashboard />
    </GalleryProvider>
    // <ThemeProvider>
    //   <Consume/>
    // </ThemeProvider>
    // <Task>
    //   <Task1 />
    // </Task>
    // <EmployeesProvider>
    //   <ConsumeEmployees/>
    // </EmployeesProvider>
    // <ProductsProvider>
    //   <ConsumeProducts/>
    // </ProductsProvider>
  );
};

export default App;
