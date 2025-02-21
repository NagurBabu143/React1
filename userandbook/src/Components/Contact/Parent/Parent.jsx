import React from "react";
import "./Parent.css";
import Child from "../Child/Child";

const Parent = () => {
  const contacts = [
    { 
        name: "Nagur ",
        phone: "923-456-7890", 
        email: "Nagur@Gmail.com"
     },

    {
         name: "Babu ", 
         phone: "987-654-3210", 
         email: "Babu@Gmail.com"
    },
    { 
        name: "Shaik ", 
        phone: "856-789-0123", 
        email: "Shaik@Gmail.com" 
    },
    { 
        name: "NagurBabu", 
        phone: "954-321-0987", 
        email: "NagurBabu@Gmail.com" 
    },
    { 
        name: "ShaikBabu ", 
        phone: "621-654-9870", 
        email: "ShaikBabu@Gmail.com" 
    },
  ];

  return (
    <div className="parent">
      <h1>Contact List</h1>
      <Child contacts={contacts} />
    </div>
  );
};

export default Parent;
