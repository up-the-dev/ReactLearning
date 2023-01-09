import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartContext } from './CartContext';
import Cart from './pages/Cart';
import Home from './pages/Home';


function App() {
  const [cartItems, setCartItems] = useState({});
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>

  );
}

export default App;
