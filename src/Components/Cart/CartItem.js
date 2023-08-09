import React,{useState} from "react";
import alertify from "alertifyjs";
import "./CartItem.css";
import { Link } from 'react-router-dom';
import { BiTrash } from "react-icons/bi";

const CartItem = ({ cartItems, setCartItems }) => {
  const [loadingProductIds, setLoadingProductIds] = useState([]);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const handleAddToCart = (product) => {
    setLoadingProductIds([...loadingProductIds, product.id]);
    
    setTimeout(() => {
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
      setLoadingProductIds(loadingProductIds.filter(id => id !== product.id));
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
      setLoadingProductIds(loadingProductIds.filter(id => id !== product.id));
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
            <div className="cart-items-name">
              {item.name}
              <div className="item-price">₺{item.price}</div>
            </div>

            <div className="cart-items-function">
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                {item.quantity === 1 && (<BiTrash className="BiTrash-btn"/>)}
                {item.quantity >1 && (<div>-</div>)}
               
              </button>
              <div className="product-quantity">{handleLoader(item.id) || item.quantity}</div>
              
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
            <Link to="/cart">
              <button className="add-to-cart-btn-sepetim">Sepete git</button>
            </Link>

          </div>
          <div className="total-price">₺ {totalPrice.toFixed(2)} </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
