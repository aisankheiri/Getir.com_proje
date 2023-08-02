import React from 'react'
import "./Products.css";
import getirdata from "../../Back/Getir/getirdata";
import ProductItem from "./ProductItem";



const Products = () => {
  const {productItems} = getirdata ;
  
  
  return (

    <div className="work-section-bottom">
      {productItems.map((productItems) => (
        <ProductItem
          productItems={productItems}
        />
      ))}
    </div>


  )
}

export default Products
