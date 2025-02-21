import React, { useState, useEffect } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [search, setSearch] = useState(""); 

  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data); 
      setLoading(false); 
    };

    fetchUsers();
  }, []);

  const filter = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <>
          <input type="text" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)}  style={{ marginBottom: "20px", padding: "10px", width: "300px" }}/>
          {filter.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {filter.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email} 
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found.</p> 
          )}
        </>
      )}
    </div>
  );
};

export default UserList;
