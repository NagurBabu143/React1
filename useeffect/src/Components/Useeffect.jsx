

//  Syntax

// useEffect(() => {
//   // Effect logic here
//   return () => {
//     // Cleanup logic here (optional)
//   };
// }, [dependencies]);



// Explanation
// Effect Logic: The function inside useEffect contains the side effect logic.
// Cleanup Logic: The function returned from the effect is run during cleanup (e.g., component unmounting or before the effect runs again).
// Dependencies Array: This array specifies when the effect should run:
// [] - Run only once after the component mounts.
// [dependencies] - Run when any dependency changes.
// No array - Run on every render.




// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)







import React, { useEffect,useState } from 'react';
import './Useeffect.css'

function Useeffect() {


  // useEffect(() => {
  //   alert("useeffect");
  //   console.log(" useeffect");
  // }, []); 
  
  // return <div>Check the console for messages.</div>;




  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(`Count has changed: ${count}`);
  //   alert(`Count: ${count}`);
  // }, [count]);

  // return (
  //   <div className="counter-container">
  //     <h2 className="count-display">Count: {count}</h2>
  //     <div className="button-group">
  //       <button className="btn increment" onClick={() => setCount(count + 1)}>  Increment </button>
  //       <button className="btn decrement" onClick={() => setCount(count - 1)}> Decrement</button>
  //     </div>
  //   </div>
  // );



const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Message updated: ${message}`);
  }, [message]);

  return (
    <div className="useeffect-container">
      <h2>Count: {count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <br />
      <input type="text" className="message-input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a message" />
    </div>
  );




}

export default Useeffect;


