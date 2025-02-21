import { useContext } from "react";
import { EmployeesContext } from "./EmployeesProvider";
import "./EmployeesTable.css"; 
const ConsumeEmployees = () => {
    const { employees } = useContext(EmployeesContext);

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConsumeEmployees;
