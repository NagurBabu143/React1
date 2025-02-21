// Syntax:

// const [state, setState] = useState(initialValue);

// state: The current value of the state.
// setState: A function used to update the state.
// initialValue: The initial value of the state.

// How it Works:
// useState initializes the state with the provided initialValue.
// To update the state, you call the setState function with the new value.
// React re-renders the component whenever the state changes, reflecting the updated state.



import React, {  useState } from 'react';

function USE() {
  const [count, setCount] = useState(0);
 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default USE;



// import React, { useState } from 'react';

// function USE() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log('Current Count:', count + 1);
//   };
//   const handle = () => {
//     setCount(count - 1);
//     console.log('Current Count:', count - 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increase</button>
//       <button onClick={handle}>Decrease</button>
//     </div>
//   );
// }

// export default USE;

