import React, { useState } from 'react';

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (event) => {
    event.preventDefault(); 
    
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(''); 
    }
  };

  const deleteTodo = (index) => {
    
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      {/* Input field for new todo */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>

      {/* Render list of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
