import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Kategoriler from "../../Components/Kategoriler/Kategoriler";
import Products from "../../Components/Products/Products";

const Getir = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Kategoriler/>
      <Products/>
    </div>
  );
};

export default Getir;
