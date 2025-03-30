import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  // Handle the change in the input field
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Add a new ToDo to the list
  const handleAddTask = () => {
    if (inputText.trim()) {
      setTodos([...todos, inputText]);
      setInputText(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>

      {/* Input and Add Task Button */}
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* ToDoList component renders the ToDo items */}
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
