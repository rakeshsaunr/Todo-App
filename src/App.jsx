import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, task.trim()]);
    setTask(""); // Clear input field
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Handle Enter key for adding tasks
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button className="delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="empty-message">No tasks added yet!</p>
        )}
      </ul>
    </div>
  );
};

export default App;
