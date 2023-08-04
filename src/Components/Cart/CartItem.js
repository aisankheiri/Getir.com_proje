import React from "react";
import alertify from "alertifyjs";
import "./CartItem.css";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

const CartItem = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

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
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                <DeleteForeverTwoToneIcon />
              </button>
              <div className="product-quantity">{item.quantity}</div>
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

      <div className="cart-items-total-price-name">
        <div className="cart-items-total-price">
          <div>
            <button className="add-to-cart-btn-sepetim">Sepete git</button>
          </div>
          <div className="total-price">₺ {totalPrice.toFixed(2)} </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
