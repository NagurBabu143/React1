// const Grandparent = () => {
//     const message = "Hello from Grandparent!";
//     return <Parent message={message} />;
//   };
  
//   const Parent = ({ message }) => {
//     return <Child message={message} />;
//   };
  
//   const Child = ({ message }) => {
//     return <h1>{message}</h1>;
//   };
//   export default Grandparent






//   import React, { createContext, useContext } from "react";

// // 1. Create Context
// const UserContext = createContext();

// function ChildComponent() {
//   // 3. Use context in a child component
//   const user = useContext(UserContext);
//   return <h2>Welcome, {user}!</h2>;
// }

// function ParentComponent() {
//   return (
//     // 2. Provide the context value
//     <UserContext.Provider value="Nagurbabu">
//       <ChildComponent />
//     </UserContext.Provider>
//   );
// }

// export default ParentComponent;







import React, { createContext, useContext } from "react";

// Create a context
const UserContext = createContext();

function ChildComponent() {
  const user = useContext(UserContext); // Get value from context
  return <h2>Welcome, {user}!</h2>;
}

function ParentComponent() {
  return (
    <UserContext.Provider value="Nagurbabu">
      <ChildComponent />
    </UserContext.Provider>
  );
}

export default ParentComponent;





// import React, { createContext, useContext, useState } from "react";

// // Create a context
// const ThemeContext = createContext();

// function ChildComponent() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div style={{ background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black", padding: "10px" }}>
//       <h2>Current Theme: {theme}</h2>
//       <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// function ParentComponent() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <ChildComponent />
//     </ThemeContext.Provider>
//   );
// }

// export default ParentComponent;



// import React, { createContext, useContext, useState } from "react";

// // Create a context
// const CountContext = createContext();

// function ChildComponent() {
//   const { count, setCount } = useContext(CountContext);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       <ChildComponent />
//     </CountContext.Provider>
//   );
// }

// export default ParentComponent;
