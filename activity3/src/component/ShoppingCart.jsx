import React, { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]; 
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload); 
    case 'EMPTY_CART':
      return []; 
    default:
      return state;
  }
}

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(reducer, initialState);

  // Event handler to add an item to the cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Event handler to remove an item from the cart
  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      
      {/* Displaying items in the cart */}
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Add item buttons (example) */}
      <button onClick={() => addToCart({ id: Date.now(), name: 'Item A', price: 10 })}>
        Add Item A - $10
      </button>
      <button onClick={() => addToCart({ id: Date.now(), name: 'Item B', price: 20 })}>
        Add Item B - $20
      </button>

      {/* Button to empty the cart */}
      <button onClick={emptyCart}>Empty Cart</button>

      {/* Display cart summary */}
      <h4>Total Items: {cart.length}</h4>
      <h4>Total Price: ${cart.reduce((total, item) => total + item.price, 0)}</h4>
    </div>
  );
};

export default ShoppingCart;
