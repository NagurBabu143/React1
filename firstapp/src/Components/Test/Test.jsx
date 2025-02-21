
import './Test.css';
import Hello from '../Hello/Hello';
const Test = () => {
    return (
        <div className="test">
            <Hello/>
            <h1>Hello from Test Component!</h1>
            <p>This is the Test component with its own CSS.</p>
        </div>
    );
};

export default Test;
