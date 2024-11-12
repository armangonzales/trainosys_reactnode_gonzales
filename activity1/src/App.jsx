import React, { useState } from 'react';
import './App.css'; 

function App() {
  return (
    <>
      <form>
        <div>
          <label>
            First Name:
            <input type="text" name="firstName" />
          </label>
        </div>
        
        <div>
          <label>
            Last Name:
            <input type="text" name="lastName" />
          </label>
        </div>
        
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        
        <div>
          <button>Submit</button>
        </div>
      </form>

      {/* Products */}
      <div>
        <h2>Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <img src={product.image} alt={product.name} />
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
}

const products = [
  {
    name: 'Earthen Bottle',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1730305948811-a40b70800118?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Nomad Tumbler',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1731100062072-3904a79ff817?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Focus Paper Refill',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1730722005859-f93a79460bae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1730545160269-5f54484782da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Focus Card Tray',
    price: 6400,
    image: 'https://images.unsplash.com/photo-1730292423126-077dd3750a46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Focus Multi-Pack',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1730854477274-2dde8d8cf600?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Brass Scissors',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1728399195158-ff7184e6dcf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Focus Carry Pouch',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1731121594258-55d6a67e77df?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default App;
