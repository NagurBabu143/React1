import React, { useState, useContext, createContext } from "react";

const NotificationContext = createContext();

const Notifications = () => {
  const [message, setMessage] = useState("");

  return (
    <NotificationContext.Provider value={{ message, setMessage }}>
      <Notification />
      <Actions />
    </NotificationContext.Provider>
  );
};

const Notification = () => {
  const { message } = useContext(NotificationContext);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {message && <h2>{message}</h2>}
    </div>
  );
};

const Actions = () => {
  const { setMessage } = useContext(NotificationContext);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <button onClick={() => setMessage("Hello Shaik.NagurBabu!")}>Show</button>
      <button onClick={() => setMessage("")} style={{ marginLeft: "10px" }}>
        Hide
      </button>
    </div>
  );
};

export default Notifications;
