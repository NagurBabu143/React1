// import Child from "./Child";

// const Parent = () =>{
//     let Name = "HI Parent"
//     return(
//         <div>
//             <Child Data={Name}/>

//         </div>
//     );
// };
// export default Parent


import Child from "./Child";
const Arr=()=>{
    const item=["a","b"]
    return(
        <div>
            <p>Array</p>
            <Child Data={item}/>
        </div>
    );
};
export default Arr