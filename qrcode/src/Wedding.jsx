import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const WeddingQRCode = () => {
    const qrContent = `Wedding Invitation:\nGroom: Shaik Nagurbabu\nBride: Shaik Khasimbi\n\nEvent Details:\nJandalu: Medikonduru, Guntur, 3-213, Near Government Hospital\nNikah: Nulakapeta, Mangalagiri Mandal, AP, Near Masjid Backside\nValima: Medikonduru, Guntur, 3-213, Near Government Hospital`;

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Wedding Invitation QR Code</h2>
            <QRCodeCanvas value={qrContent} size={256} />
        </div>
    );
};

export default WeddingQRCode;
