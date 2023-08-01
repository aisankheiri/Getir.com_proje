import React from 'react'
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



const Kategoriler = () => {
  return (
    <div className='category'>
      <div className='category-items'>
        <h1 className='category-header'>kategoriler</h1>

        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img1}/>Yaza Özel</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img2}/>İndirimler</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img3}/>Su & içecek</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img4}/>Meyve & Sebze</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img5}/>Fırından</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img6}/>Temel Gıda</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img7}/>Atıştırmalık</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img8}/>Dondurma</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img9}/>Süt Ürünleri</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img10}/>Kahvaltılık</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img11}/>Yiyecek</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img12}/>Fit & Form</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img13}/>Kişisel Bakım</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img14}/>Ev Bakım</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img15}/>Ev & Yaşam</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img16}/>Teknoloji</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img17}/>Evcil Hayvan</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img18}/>Bebek</button>
        </Link>
        <Link to="/aaaa" style={{ textDecoration: "none" }}>
          <button className='category-btn category-text'><img src={img19}/>Cinsel Sağlık</button>
        </Link>


      </div>


    </div>
  )
}

export default Kategoriler
