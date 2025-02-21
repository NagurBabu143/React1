import React, { useState } from "react";

function Button() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const Next = () => setStep(step + 1);
  const Back = () => setStep(step - 1);
  const Change = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Info</h2>
          <input name="name" placeholder="Name"value={formData.name} onChange={Change} />
          <button onClick={Next}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Contact Info</h2>
          <input name="email" placeholder="Email" value={formData.email} onChange={Change} />
          <button onClick={Back}>Back</button>
          <button onClick={Next}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Address</h2>
          <input name="address" placeholder="Address" value={formData.address} onChange={Change} />
          <button onClick={Back}>Back</button>
          <button onClick={() => alert(JSON.stringify(formData))}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Button;
