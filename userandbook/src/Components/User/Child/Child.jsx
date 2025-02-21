
import GrandChild from '../GrandChild/GrandChild';
import './Child.css'
const Child = ({ name, age, address }) => {
    return (
      <div className="child">
        <h2>Child </h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <GrandChild address={address} />
      </div>
    );
  };
  
  export default Child;