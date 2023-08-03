import React from 'react'
import "./ProductItem.css";
import alertify from "alertifyjs";

const ProductItem = ({productItems,cartItems,setCartItems}) => {

  const handleAddToCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );

  
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alertify.success(`${product.name} sepete eklendi.`, 4);
    //saniye belirlemek ,4
  };

  return (
    <div className="product-category" >
    <div className="product-boxes-img-container">
      <img className="product-image" src={productItems.image} alt={productItems.name} />
      <button className='add-to-cart-btn' onClick={() => handleAddToCart(productItems)}>+</button>
    </div>
    <h2 className='product-price'>₺ {productItems.price}</h2>
    <h3 className='product-name'>{productItems.name}</h3>
   
  </div>
  )
}

export default ProductItem
