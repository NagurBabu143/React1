import React, { useState } from "react";
import "./EmployeeManagement.css";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Nagur", role: "Farm Supervisor", status: "Active" },
    { id: 2, name: "Babu", role: "Milk Collection", status: "Active" },
    { id: 3, name: "Shaik NagurBabu", role: "Feed Manager", status: "On Leave" },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: "", role: "" });

  const addEmployee = () => {
    if (newEmployee.name && newEmployee.role) {
      setEmployees([
        ...employees,
        {
          id: employees.length + 1,
          name: newEmployee.name,
          role: newEmployee.role,
          status: "Active",
        },
      ]);
      setNewEmployee({ name: "", role: "" });
    }
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateStatus = (id, newStatus) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? { ...employee, status: newStatus } : employee
      )
    );
  };

  return (
    <div className="employee-management">
      <h2>👨‍🌾 Employee Management</h2>
      <p>Manage all farm workers, their roles, and work status efficiently.</p>

     
      <div className="employee-list">
        <h3>📋 Employee Roster</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>
                  <select
                    value={employee.status}
                    onChange={(e) => updateStatus(employee.id, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button className="remove-btn" onClick={() => removeEmployee(employee.id)}>❌ Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="add-employee">
        <h3>➕ Add New Employee</h3>
        <input
          type="text"
          placeholder="Enter Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Role"
          value={newEmployee.role}
          onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default EmployeeManagement;
