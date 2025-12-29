import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleEdit} className="save-button">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
