import React, { useState } from 'react'
import "./Kategoriler.css";
import { Link } from 'react-router-dom';
import img1 from "./pics/1.png";
import img2 from "./pics/2.png";
import img3 from "./pics/3.png";
import img4 from "./pics/4.png";
import img5 from "./pics/5.png";
import img6 from "./pics/6.png";
import img7 from "./pics/7.png";
import img8 from "./pics/8.png";
import img9 from "./pics/9.png";
import img10 from "./pics/10.png";
import img11 from "./pics/11.png";
import img12 from "./pics/12.png";
import img13 from "./pics/13.png";
import img14 from "./pics/14.png";
import img15 from "./pics/15.png";
import img16 from "./pics/16.png";
import img17 from "./pics/17.png";
import img18 from "./pics/18.png";
import img19 from "./pics/19.png";
import sepetimg from "./pics/sepet-img.svg";
import getirdata from "../../Back/Getir/getirdata";
import ProductItem from "../Products/ProductItem";
import CartItem from "../Cart/CartItem";



const Kategoriler = ({ cartItems, setCartItems }) => {
  const { productItems } = getirdata;


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };

  return (
    <div className='row'>
      <div className='column left'>
        <div className='category'>
          <div className='category-items'>
            <h1 className='category-header'>kategoriler</h1>

            <div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown1}><img src={img1} />Yaza Özel</button>
                {isOpen1 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Dondurma</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Su & içecek</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Atıştırmalık</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Meyve & sebze</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Temel Gıda</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Kişisel Bakım</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Bebek</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Ev Bakım</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Cinsel Sağlık</a></div>
                    
                  </div>
                )}
              </div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown2}><img src={img2} />İndirimler</button>
                {isOpen2 && (
                  <div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 1</a></div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 2</a></div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 3</a></div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown3}><img src={img3} />Su & içecek</button>
                {isOpen3 && (
                  <div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 1</a></div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 2</a></div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 3</a></div>
                  </div>
                )}
              </div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown4}><img src={img4} />Meyve & Sebze</button>
                {isOpen4 && (
                  <div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 1</a></div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 2</a></div>
                    <div><a href="#" className='category-btn category-text category-de-acilir-menu'>Element 3</a></div>
                  </div>
                )}
              </div>
            </div>





            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img5} />Fırından</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img6} />Temel Gıda</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img7} />Atıştırmalık</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img8} />Dondurma</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img9} />Süt Ürünleri</button>
            </Link>

            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img10} />Kahvaltılık</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img11} />Yiyecek</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img12} />Fit & Form</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img13} />Kişisel Bakım</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img14} />Ev Bakım</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img15} />Ev & Yaşam</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img16} />Teknoloji</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img17} />Evcil Hayvan</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img18} />Bebek</button>
            </Link>
            <Link to="/aaaa" style={{ textDecoration: "none" }}>
              <button className='category-btn category-text'><img src={img19} />Cinsel Sağlık</button>
            </Link>

          </div>

        </div>
      </div>

      <div className='column middle'>
        <h1 className='product-text'>Yaza Özel</h1>

        <div className="Products-container">

          {productItems.map((productItems) => (
            <ProductItem
              key={productItems.id}
              productItems={productItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}


        </div>




      </div>

      <div className='column right'>
        <h1 className='cart-text-getirsayfa'>Sepetim</h1>

        {cartItems.length >= 1 && (
          <div className='cart'>
            <CartItem
              cartItems={cartItems}
              setCartItems={setCartItems} />
          </div>
        )}

        {cartItems.length === 0 && (
          <div className='cart'>
            <img src={sepetimg} alt='sepetimg' className="cart-img"></img>
            <h4>Sepetiniz şu an boş</h4>
            <p>Sipariş vermek için sepetinize ürün ekleyin</p>
          </div>
        )}
        <div>
          <h1 className='cart-below'>
            Geçmiş Siparişlerim
          </h1>
        </div>








      </div>



    </div>
  )
}

export default Kategoriler
