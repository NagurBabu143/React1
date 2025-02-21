import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [tasks, Tasks] = useState([]);
  const [newTask, NewTask] = useState('');
  const [editTaskId, EditTaskId] = useState(null);
  const [editTaskName, EditTaskName] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      Tasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      NewTask('');
    }
  };

  const deleteTask = (id) => {
    Tasks(tasks.filter((task) => task.id !== id));
  };

  const save = (id) => {
    Tasks(
      tasks.map((task) =>
        task.id === id ? { ...task, name: editTaskName } : task
      )
    );
    EditTaskId(null);
    EditTaskName('');
  };

  const Completion = (id) => {
    Tasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTask = (task) => {
    if (editTaskId === task.id) {
      return (
        <>
          <input type="text" value={editTaskName}  onChange={(e) => EditTaskName(e.target.value)} />
          <button onClick={() => save(task.id)}>Save</button>
        </>
      );
    } else {
      return (
        <>
          <span>{task.name}</span>
          <button onClick={() => { EditTaskId(task.id); EditTaskName(task.name);  }}> Edit </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      );
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <div className="add-task">
        <input type="text" value={newTask} onChange={(e) => NewTask(e.target.value)} placeholder="Add a new task..." />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <div className="task-item">
              <input type="checkbox"  checked={task.completed} onChange={() => Completion(task.id)} />
              {renderTask(task)}
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Todo;
