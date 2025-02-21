import React, { useState, useEffect } from "react";

function Fetch1() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [load]);

  return (
    <div>
      <button onClick={() => setLoad(true)}>Fetch Users</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch1;
