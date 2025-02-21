import React, { useState } from 'react';

function To() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1); 
        setTasks(updatedTasks); 
    };

    return (
        <div className="Todo-List">
            <h2>TO DO LIST 📜</h2>
            <div>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Enter New Task"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>ADD TASK</button>

                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={() => removeTask(index)}>REMOVE TASK</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default To;
