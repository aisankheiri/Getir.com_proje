import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Getir from './Routes/Getir/Getir';
import GetirYemek from './Routes/GetirYemek/GetirYemek';
import GetirSu from './Routes/GetirSu/GetirSu';
import GetirCarsi from './Routes/GetirCarsi/GetirCarsi';
import GetirBuyuk from './Routes/GetirBuyuk/GetirBuyuk';
import { useEffect, useState } from 'react';
import Cart from "./Components/Cart/Cart";
import getirdata from "./Back/Getir/getirdata";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { productItems } = getirdata;
  const { categories } = getirdata;

  useEffect(()=>{
    const cartItems = localStorage.getItem("cartItems")
    setCartItems(JSON.parse(cartItems))
  },[])//ilk render da calismasi icin ,[] koyuldu

  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  })

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Getir categories={categories} productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/yemek" element={<GetirYemek  />} />
          <Route path="/buyuk" element={<GetirBuyuk />} />
          <Route path="/su" element={<GetirSu />} />
          <Route path="/carsi" element={<GetirCarsi />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;