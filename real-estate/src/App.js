import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar"; 
import Listings from "./components/Listings/Listings";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Properties from "./components/Properties/Properties";
import Contact from "./components/Contact/Contact";
// import Help from "./components/Help/Help";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar /> 
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <Listings />
        </main>
      </div>
      <div className="data">
        <Services />
        <Properties />
        <AboutUs />
        <Testimonials />
        <Contact />
        {/* <Help /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
