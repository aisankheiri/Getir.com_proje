import React, { useState } from "react";
import "./Cart.css";
import CartSepet from "./CartSepet";
import Dialog from "../../Dialog";
import { BiTrash } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../Footer/Footer";
import getir from "../../Assets/logoPics/getir.svg";
import { Link } from "react-router-dom";
import house from "../../Assets/logoPics/House.svg";
import { FaGreaterThan } from "react-icons/fa";


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
      <nav className="cart-navbar">
        <div className="cart-navbar-container">
          <div className="cart-navbar-items">
            <div className="navbar-getir-logo">
              <Link to="/"><img className="navbar-getir-logo-img" src={getir} alt="getir-svg" /></Link>
            </div>
            <div className="navbar-getir-adress">
              <div className="navbar-adress-back"><div className="navbar-adress-text"><img className="navbar-house-img" src={house} alt="house-svg" />Ev <FaGreaterThan className="FaGreaterThan-icon" /></div></div>
              <div className="navbar-adress-time">TVS 8 dk</div>
            </div>
          </div>
        </div>
      </nav>
      <div className="basket">
        <div className="row">
          <div className="column left-cart">
            <div className="cart-header">
              <h5>Sepetim</h5>
              <button className="clear-cart" onClick={() => handleCartClearest()}><BiTrash className="BiTrash" />Sepeti Temizle</button>
            </div>
            {cartItems.length >= 1 && (
              <div className="cart-sepet-container">
                <CartSepet cartItems={cartItems} setCartItems={setCartItems} />
              </div>
            )}
          </div>

          <div className="column right-cart">
            < div className="basket-summery">
              <div className="adress-header">Adres</div>

              <div className="adress-text">
                <IoLocationOutline className="IoLocationOutline" />
                adres text
              </div>

              <div className="cart-total-cart1">Sepet toplamı</div>
              <div className="cart-total-price">
                <div className="cart-text">
                  Sepet Tutarı
                </div>
                <div className="cart-price">
                  ₺ {totalPrice.toFixed(2)}
                  
                </div>
              </div>

              <button className="payment-btn">
                Ödemeye Geç
              </button>

            </div>
          </div>
        </div>
        <Footer />
        

      </div >

      {dialog.isLoading && <Dialog onDialog={areUSureDelete} message={dialog.message} />}

    </div >


  );
};

export default Cart;
