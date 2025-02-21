import React, { useState } from "react";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import Gallery from "../Gallery/Gallery";
import Footer from "../Dashboard/Footer";
import "./Dashboard.css";

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-content">
                <Sidebar setSelectedCategory={setSelectedCategory} />
                <div className="gallery-section">
                    <Gallery selectedCategory={selectedCategory} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
