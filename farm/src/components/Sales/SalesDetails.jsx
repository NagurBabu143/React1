import React from 'react';
import './SalesDetails.css';

const SalesDetails = ({ sale }) => {
    return (
        <div className="sales-details">
            <h2>Sale ID: {sale.id} Details</h2>
            <p>Product: {sale.product}</p>
            <p>Amount: ${sale.amount}</p>
            <p>Date: {sale.date}</p>
        </div>
    );
};

export default SalesDetails;
