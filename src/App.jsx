// Import necessary modules from React and icons
import React, { useState } from "react"; // useState is used for state management

// Importing icons from react-icons library
import { FaList } from "react-icons/fa6";        // Icon for 'All' tasks
import { MdChecklist } from "react-icons/md";    // Icon for 'Completed' tasks
import { FaListCheck } from "react-icons/fa6";   // Icon for 'Active' tasks

// Import the external CSS file
import "./App.css";

const App = () => {
  // Declare a state variable 'task' to store the value of the input field
  const [task, setTask] = useState("");

  // Declare a state variable 'tasks' to store the list of task objects
  const [tasks, setTasks] = useState([]);

  // Function to handle the addition of a new task
  const handleAdd = () => {
    // If the input is not empty after trimming white spaces
    if (task.trim() !== "") {
      // Add the new task to the 'tasks' array with a unique ID (using timestamp)
      setTasks([...tasks, { id: Date.now(), text: task }]);
      // Clear the input field after adding
      setTask("");
    }
  };

  // Function to handle deletion of a task by its ID
  const handleDelete = (id) => {
    // Filter out the task with the matching ID and update the state
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      {/* Main box containing the To-Do List */}
      <div className="todo-box">

        {/* App Title with a clock emoji */}
        <h1>
          <span className="clock-icon">🕒</span> My To-Do List
        </h1>

        {/* Input area to type a new task and add it */}
        <div className="input-group">
          <input
            type="text"
            placeholder="New Task"         // Placeholder text inside input
            value={task}                   // Value bound to 'task' state
            onChange={(e) => setTask(e.target.value)} // Updates state on typing
          />
          {/* Add button to trigger handleAdd function */}
          <button onClick={handleAdd}>+ Add</button>
        </div>

        {/* Task filter options (All / Active / Completed) — UI only */}
        <div className="filters">
          <span className="active"><FaList /> All</span>
          <span><FaListCheck /> Active</span>
          <span><MdChecklist /> Completed</span>
        </div>

        {/* Render the list of tasks dynamically */}
        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t.id} className="task-item">
              {/* Checkbox (not functional yet, just for UI) */}
              <input type="checkbox" />

              {/* Display task text */}
              <span>{t.text}</span>

              {/* Delete button for each task */}
              <button className="delete-btn" onClick={() => handleDelete(t.id)}>
                🗑️ {/* Trash emoji as delete icon */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// Export the App component to be used in other files (like main.jsx)
export default App;
