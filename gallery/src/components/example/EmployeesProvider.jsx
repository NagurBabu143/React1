import { createContext, useState } from "react";
import ConsumeEmployees from "./ConsumeEmployees";

export const EmployeesContext = createContext();

const EmployeesProvider = () => {
    const [employees] = useState([
        { id: 1, name: "Shaik", position: "Software Engineer", salary: "Rs.80,000" },
        { id: 2, name: "babu", position: "Project Manager", salary: "Rs.95,000" },
        { id: 3, name: "Nagur", position: "UI/UX Designer", salary: "Rs.75,000" },
        { id: 4, name: "Shaik Nagurbabu", position: "QA Engineer", salary: "Rs.70,000" },
    ]);

    return (
        <EmployeesContext.Provider value={{ employees }}>
            <ConsumeEmployees/>
        </EmployeesContext.Provider>
    );
};

export default EmployeesProvider;
