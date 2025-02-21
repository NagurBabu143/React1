import React from "react";
import "./Field.css";

function Field({ fieldData }) {
  return (
    <div className="field">
      <h2>Fields</h2>
      {fieldData.map((field) => (
        <div key={field.id} className="field-item">
          <p>Type: {field.type}</p>
          <p>Size: {field.size} acres</p>
        </div>
      ))}
    </div>
  );
}

export default Field;