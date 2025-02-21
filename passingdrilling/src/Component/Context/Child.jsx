import React, { useContext } from 'react';
import UserContext from './context'; 

function Child() {
  const { name, updateName } = useContext(UserContext);

  const handleNameChange = (event) => {
    updateName(event.target.value);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name from Context: {name}</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}

export default Child;