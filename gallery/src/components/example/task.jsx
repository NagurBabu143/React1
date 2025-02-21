import { createContext } from "react";
import Task1 from "./task1";

export const data = createContext();

export const Task = () => {
    const text = "Hello. Shaik NagurBabu...";
    return (
        <data.Provider value={text}>
            <Task1/>
        </data.Provider>
    );
};
