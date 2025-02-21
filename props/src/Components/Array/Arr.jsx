
// import Data from "./Obj";
// function Arr() {
//   const users = [
//     { id: 1, name: "Shaik Nagurbabu", age: 25, location: "India" },
//     { id: 2, name: "John Doe", age: 30, location: "USA" },
//   ];

//   return (
//     <div>
//       {users.map((user) => (
//         <Data key={user.id} {...user}/>
//       ))}
//     </div>
//   );
// }

// export default Arr;


import Data from "./Obj";

function Arr() {
  const users = [
    { id: 1, name: "Shaik Nagurbabu", age: 25, location: "India" },
    { id: 2, name: "John Doe", age: 30, location: "USA" },
  ];

  return (
    <div>
      {users.map((user) => (
        <Data 
          key={user.id} 
          name={user.name} 
          age={user.age} 
          location={user.location} 
        />
      ))}
    </div>
  );
}

export default Arr;
