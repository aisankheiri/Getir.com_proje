import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Kategoriler from "../../Components/Kategoriler/Kategoriler";
import NavbarBelow from "../../Components/NavbarBelow/NavbarBelow";
const Getir = ({cartItems, setCartItems}) => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Kategoriler cartItems={cartItems} setCartItems={setCartItems}/>
      <NavbarBelow/>
 
      
    </div>
  );
};

export default Getir;
