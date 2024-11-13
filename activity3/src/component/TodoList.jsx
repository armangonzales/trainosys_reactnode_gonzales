import React, { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'CLEAR_TODOS':
      return [];
    default:
      return state;
  }
}

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      const newTodo = { id: Date.now(), task };
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setTask('');
    }
  };

  const clearTodos = () => {
    dispatch({ type: 'CLEAR_TODOS' });
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Delete All</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
