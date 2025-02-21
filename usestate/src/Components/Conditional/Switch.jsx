import React, { useState } from 'react';
import './Switch.css'
function Switch() {
    const [status, setStatus] = useState('guest');

    const render = () => {
        switch (status) {
            case 'guest':
                return <button onClick={() => 
                    setStatus('admin')}>Login</button>;
            case 'user':
                return <h1>Welcome, Shaik NagurBabu!</h1>;
            case 'admin':
                return <h1>Admin Dashboard</h1>;
            default:
                return null;
        }
    };

    return <div>{render()}</div>;
}

export default Switch;
