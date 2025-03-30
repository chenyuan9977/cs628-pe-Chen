import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, setTodos }) {
  // Handle deleting a ToDo item
  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          task={todo}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
