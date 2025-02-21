import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // Use QRCodeCanvas instead of QRCode

const QRCodeGenerator = () => {
  const qrValue = "https://yourwebsite.com/events"; // Replace with your actual event page URL

  return (
    <div>
      <h2>Scan QR Code for Marriage Events</h2>
      <QRCodeCanvas value={qrValue} size={200} />
    </div>
  );
};

export default QRCodeGenerator;
