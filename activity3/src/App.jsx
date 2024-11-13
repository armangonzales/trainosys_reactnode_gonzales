import React from 'react';
import Counter from './component/Counter';
import MousePosition from './component/MousePosition';
import RandomColor from './component/RandomColor';
import FetchData from './component/FetchData';
import TodoList from './component/TodoList';
import Form from './component/Form';
import ShoppingCart from './component/ShoppingCart';
import LightSwitch from './component/LightSwitch';
import ColorPicker from './component/ColorPicker';
import TodoLists from './component/TodoLists';

const App = () => {
  return (
    <div>
      <Counter />
      <MousePosition />
      <RandomColor />
      <FetchData />
      <TodoList />
      <Form />
      <ShoppingCart />
      <LightSwitch />
      <ColorPicker />
      <TodoLists />
   </div>
    
  );

}

export default App;
