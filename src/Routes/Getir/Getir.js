import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Kategoriler from "../../Components/Kategoriler/Kategoriler";


const Getir = ({cartItems, setCartItems}) => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Kategoriler cartItems={cartItems} setCartItems={setCartItems}/>
      
    </div>
  );
};

export default Getir;
