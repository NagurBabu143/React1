import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import LivestockList from './components/Livestock/LivestockList';
import LivestockDetails from './components/Livestock/LivestockDetails';
import ProductionTracker from './components/Production/ProductionTracker';
import ProductionDetails from './components/Production/ProductionDetails';
import BeekeepingTracker from './components/Beekeeping/BeekeepingTracker';
import BeekeepingDetails from './components/Beekeeping/BeekeepingDetails';
import ProductList from './components/Products/ProductList';
import ProductDetails from './components/Products/ProductDetails';
import SalesTracker from './components/Sales/SalesTracker';
import SalesSummary from './components/Sales/SalesSummary';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <Dashboard />
                    <LivestockList />
                    <LivestockDetails />
                    <ProductionTracker />
                    <ProductionDetails />
                    <BeekeepingTracker />
                    <BeekeepingDetails />
                    <ProductList />
                    <ProductDetails />
                    <SalesTracker />
                    <SalesSummary />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
