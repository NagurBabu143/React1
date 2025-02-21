import React, { useState } from 'react';
import './If.css';
function If() {
    const [Log, setLog] = useState(false);

    if (Log) {
        return <h1>Welcome back, Shaik NagurBabu!</h1>;
    } else {
        return <button onClick={() => 
            setLog(true)}>Login</button>;
    }
}

export default If;
