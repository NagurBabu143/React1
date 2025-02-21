
import Child from '../Child/Child';
import './Parent.css';
const Parent = () => {
    const user = {
      name: "Shaik NagurBabu",
      age: 20,
      address: "3-213, Guntur",
      msg:"All Data Stord in Parent",
    };
  
    return (
      <div className="parent">
        <h1>User</h1>
        <p>{user.msg}</p>
        <Child name={user.name} age={user.age} address={user.address} />
      </div>
    );
  };
  
  export default Parent;