import React, { useState } from "react";
import alertify from "alertifyjs";
import "./CartItem.css";
import "./CartSepet.css";
import { BiTrash } from "react-icons/bi";


const CartSepet = ({ cartItems, setCartItems }) => {
  const [loadingProductIds, setLoadingProductIds] = useState([]);

  const handleAddToCart = (product) => {
    setLoadingProductIds([...loadingProductIds, product.id]);

    setTimeout(() => {
      const productExist = cartItems.find((item) => item.id === product.id);
      if (productExist) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
      alertify.success(`${product.name} 1 arttırıldı.`, 4);
      setLoadingProductIds(loadingProductIds.filter((id) => id !== product.id));
    }, 1000);
  };

  const handleRemoveProduct = (product) => {
    setLoadingProductIds([...loadingProductIds, product.id]);

    setTimeout(() => {
      const productExist = cartItems.find((item) => item.id === product.id);
      if (productExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: productExist.quantity - 1 }
              : item
          )
        );
      }
      alertify.success(`${product.name} 1 azaldı.`, 4);
      setLoadingProductIds(loadingProductIds.filter((id) => id !== product.id));

      if (cartItems.length === 1) {
        // Son ürün kaldırıldı, ana sayfaya yönlendir
        window.location.href = "/";
      }
    }, 1000);
  };

  const handleLoader = (productId) => {
    if (loadingProductIds.includes(productId)) {
      return <div className="custom-loader"></div>;
    }
  };

  return (
    <div>
      <div className="information-of-product-in-cart">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-namee">
              <div className="item-price">₺{item.price}</div>
              <div className="name">{item.name}</div>
            </div>

            <div className="cart-items-function">
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                {item.quantity === 1 && <BiTrash className="BiTrash-btn" />}
                {item.quantity > 1 && <div>-</div>}
              </button>
              <div className="cart-product-quantity">
                {handleLoader(item.id) || item.quantity}
              </div>
              <button
                className="cart-items-add"
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartSepet;