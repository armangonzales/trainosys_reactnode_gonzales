import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return {
        ...state, 
        email: action.payload,
      };
    case 'UPDATE_NAME':
      return {
        ...state, 
        name: action.payload,
      };
    case 'RESET_FORM':
      return {
        ...state,
        name: '',
        email: ''
      };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (e) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value });
  };

  const handleNameChange = (e) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div>
      <h3>Form</h3>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={handleEmailChange}
      />
      <button onClick={resetForm}>Reset</button>
      <div>
        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
      </div>
    </div>
  );
};

export default Form;
