// // import { useState,useEffect } from "react";
// // const Set = () => {
// //     const [counter, setCounter] = useState(0);
  
// //     useEffect(() => {
// //       const s = setInterval(() => {
// //         setCounter(c => c + 1);
// //       }, 1000);
  
// //       return () => clearInterval(s);
// //     }, [counter]);
  
// //     return (
// //       <div style={{textAlign: 'center'}}>
// //         <h1>Counter: {counter}</h1>
// //       </div>
// //     );
// // }
// // export default Set;





// import React, { useState, useEffect } from 'react';

// function Set() {
//   const [message, setMessage] = useState(''); 

//   useEffect(() => {
    
//     setTimeout(() => {
//       setMessage('Hello, Shaik NagurBabu!');
//     }, 2000); 
//   }, []); 

//   return (
//     <div>
//       <h2>Message:</h2>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Set;




import React, { useState, useEffect } from 'react';

const Set = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000)
  }, []);

  return <h1>{message}</h1>
};

export default Set;