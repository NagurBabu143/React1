import React from "react";
import "./Rail.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import About from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import BookTickets from "../components/BookTickets/BookTickets";
import TrainSchedule from "../components/TrainSchedule/TrainSchedule";
import Contact from "../components/Contact/Contact";

function Rail() {
    return (
        <div className="Rail">
            <Header />
            <Home />
            <About />
            <Services />
            <BookTickets />
            <TrainSchedule />
            <Contact />
            <Footer />
        </div>
    );
}

export default Rail;
