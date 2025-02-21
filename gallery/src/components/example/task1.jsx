import { useContext } from "react";
import { data } from "./task";


const Task1 = () => {
    const text = useContext(data);
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default Task1;
