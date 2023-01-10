import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartContext } from './CartContext';
import Cart from './pages/Cart';
import Home from './pages/Home';


function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {}
  })
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <CartContext.Provider value={{ cart, setCart }}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <footer className='blockName'>made with ❤️  by umesh</footer>
    </CartContext.Provider>

  );
}

export default App;
