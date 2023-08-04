import React from "react";
import "./Cart.css";
import CartSepet from "./CartSepet";

const Cart = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <div className="cart-navbar"></div>
      <div className="row">

        <div className="column left-cart">
          Sepetim
          {cartItems.length >= 1 && (
            <div className="cart-sepet-container">
              <CartSepet cartItems={cartItems} setCartItems={setCartItems} />
            </div>
          )}
        </div>

        <div className="column right-cart">Adress</div>
      </div>
    </div>
  );
};

export default Cart;
