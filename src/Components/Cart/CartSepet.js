import React from "react";
import alertify from "alertifyjs";
import "./CartItem.css";
import "./CartSepet.css";
import { BiTrash } from "react-icons/bi";

const CartSepet = ({ cartItems, setCartItems }) => {
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
    alertify.success(`${product.name} 1 arttırıldı.`, 4);
    //saniye belirlemek ,4
  };

  const handleRemoveProduct = (product) => {
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
    //saniye belirlemek ,4
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
                <BiTrash className="BiTrash-btn" />
              </button>
              <div className="cart-product-quantity">{item.quantity}</div>
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
