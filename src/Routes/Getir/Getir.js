import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Kategoriler from "../../Components/Kategoriler/Kategoriler";
import NavbarBelow from "../../Components/NavbarBelow/NavbarBelow";
import "./Getir.css"
const Getir = ({cartItems, setCartItems}) => {
  return (
    <div>
      <Navbar />
      <div className="for-back-color">
      <Slider />
      <Kategoriler cartItems={cartItems} setCartItems={setCartItems}/>
      <NavbarBelow/>
      </div>
 
      
    </div>
  );
};

export default Getir;
