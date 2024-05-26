import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo, index }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => { if (e.key === 'Enter') handleUpdate(); }}
        />
      ) : (
        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(true)}>Update</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;