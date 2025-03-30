import React from 'react';

function ToDoItem({ task, index, handleDeleteTask }) {
  return (
    <li>
      {task}
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
