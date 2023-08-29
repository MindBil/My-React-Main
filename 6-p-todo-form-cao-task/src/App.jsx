import { useState } from 'react';
import './App.css'; // Create this CSS file for styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    
    setTasks([...tasks, taskName]);
    setTaskName('');
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>You have 3 Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <span>{task}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
