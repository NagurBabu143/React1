import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./QRCodeGenerator.css"; // For styling

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div className="qr-container">
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="qr-input"
      />
      {text && (
        <div className="qr-code">
          <QRCode value={text} size={200} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
