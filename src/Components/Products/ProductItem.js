import React from 'react'
import "./ProductItem.css";

const ProductItem = ({productItems}) => {
  return (
    <div className="product-category" >
    <div className="product-boxes-img-container">
      <img className="product-image" src={productItems.image} alt={productItems.name} />
      <button className='add-to-cart-btn'>+</button>
    </div>
    <h2 className='product-price'>₺ {productItems.price}</h2>
    <h3 className='product-name'>{productItems.name}</h3>
   
  </div>
  )
}

export default ProductItem
