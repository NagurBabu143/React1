// function Map(){
//     const fruits = ["Apple", "Banana", "Cherry"];

//   return (
//     <ol>
//       {fruits.map(fruit => (
//         <li>{fruit}</li>
//       ))}
//     </ol>
//   );
// }
// export default Map



const Map = ()=>{
    const Names= ["Shaik","Babu","Nagur"]
    return(
        <ul>
            {Names.map((Name,index)=>(
                <li key={index}>{Name}</li>
            ))}
        </ul>
    );
};
export default Map