import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Home />
            <Events />
            <About />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
