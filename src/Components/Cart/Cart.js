import React, { useState } from "react";
import "./Cart.css";
import CartSepet from "./CartSepet";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Dialog from "../../Dialog";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";

const Cart = ({ cartItems, setCartItems }) => {
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false
  })
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const handleDialog = (message, isLoading) => {
    setDialog({
      message: message,
      isLoading: isLoading
    })

  }

  const handleCartClearest = () => {
    handleDialog("Sepeti boşaltmak istediğinizden emin misiniz?", true);
  };

  const areUSureDelete = (type) => {
    if (type) {
      setCartItems([]);
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  }
  return (
    <div>
      <div className="cart-navbar"></div>
      <div className="row">

        <div className="column left-cart">
          <div className="cart-header">
            <div>Sepetim</div>
            <button className="clear-cart" onClick={() => handleCartClearest()}><DeleteForeverTwoToneIcon />Sepeti Temizle</button>
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-sepet-container">
              <CartSepet cartItems={cartItems} setCartItems={setCartItems} />
            </div>
          )}
        </div>

        <div className="column right-cart">
          <div className="adress-header">Adress</div>

          <div className="adress-text">
            <RoomTwoToneIcon className="RoomTwoToneIcon" />
            adres text
          </div>
          <div className="cart-total-price">
            <div>Sepet toplamı</div>
            <div className="cart-text">
              Sepet Tutarı
              <div className="cart-price">
                ₺ {totalPrice.toFixed(2)}
              </div>
            </div>

          </div>
          <button className="payment-btn">
            Ödemeye Geç
          </button>

        </div>
      </div >
      {dialog.isLoading && <Dialog onDialog={areUSureDelete} message={dialog.message} />}
    </div >
  );
};

export default Cart;
