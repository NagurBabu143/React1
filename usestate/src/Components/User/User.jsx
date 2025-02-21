import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Nagur", age: 25 });

  return (
    <div>
      <h1>User </h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, name: "Shaik NagurBabu" })}>Change Name</button>
      <button onClick={() => setUser({ ...user, age: 23 })}>Change Age</button>
    </div>
  );
}

export default User;
