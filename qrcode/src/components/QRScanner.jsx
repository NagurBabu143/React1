import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";  // ✅ Corrected Import
import EventDetails from "./EventDetails";

const QRScanner = () => {
  const [eventData, setEventData] = useState(null);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEventData(data.shaik_wedding));
  }, []);

  const handleScan = (result) => {
    if (result?.text && eventData) {
      setScannedData(eventData);
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
  };

  return (
    <div className="scanner-container">
      <h2>Scan QR Code for Marriage Event Details</h2>
      <QrReader
        onResult={handleScan}
        constraints={{ facingMode: "environment" }}
        scanDelay={300}
        containerStyle={{ width: "300px", margin: "auto" }}
        onError={handleError}
      />
      {scannedData && <EventDetails event={scannedData} />}
    </div>
  );
};

export default QRScanner;
