import React, { useState } from 'react';
import UserContext from './context'; 
import Child from './Child';

function Parent() {
  const [name, setName] = useState("Khasim");

  const updateName = (newName) => {
    setName(newName);
  };

  const contextValue = { name, updateName };

  return (
    <UserContext.Provider value={contextValue}>
      <div>
        <h2>Parent Component</h2>
        <p>Name from Parent: {name}</p>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default Parent;