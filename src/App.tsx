import React from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Items from './components/items/Items';

function App() {
  return (
    <div className="App">
      <Items />
      <Cart />
    </div>
  );
}

export default App;
