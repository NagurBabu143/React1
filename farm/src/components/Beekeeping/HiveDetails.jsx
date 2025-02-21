import React from 'react';
import './HiveDetails.css';

const HiveDetails = ({ hive }) => {
    return (
        <div className="hive-details">
            <h2>Hive {hive.hive_id} Details</h2>
            <p>Honey Production: {hive.honey_production} kg</p>
            <p>Colony Health: {hive.colony_health}</p>
        </div>
    );
};

export default HiveDetails;
