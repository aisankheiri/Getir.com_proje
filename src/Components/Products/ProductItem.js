import React from 'react'
import "./ProductItem.css";

const ProductItem = ({productItems}) => {
  return (
    <div className="work-section-info" >
    <div className="info-boxes-img-container">
      <img className="product-image" src={productItems.image} alt={productItems.name} />
    </div>
    <h2>{productItems.name}</h2>
    <p>{productItems.price}   TL</p>
  </div>
  )
}

export default ProductItem
