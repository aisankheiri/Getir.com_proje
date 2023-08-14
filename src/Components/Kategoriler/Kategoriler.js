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
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);
  const [isOpen19, setIsOpen19] = useState(false);

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
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };

  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };

  const toggleDropdown8 = () => {
    setIsOpen8(!isOpen8);
  };

  const toggleDropdown9 = () => {
    setIsOpen9(!isOpen9);
  };

  const toggleDropdown10 = () => {
    setIsOpen10(!isOpen10);
  };
  const toggleDropdown11 = () => {
    setIsOpen11(!isOpen11);
  };

  const toggleDropdown12 = () => {
    setIsOpen12(!isOpen12);
  };

  const toggleDropdown13 = () => {
    setIsOpen13(!isOpen13);
  };

  const toggleDropdown14 = () => {
    setIsOpen14(!isOpen14);
  };

  const toggleDropdown15 = () => {
    setIsOpen15(!isOpen15);
  };
  const toggleDropdown16 = () => {
    setIsOpen16(!isOpen16);
  };

  const toggleDropdown17 = () => {
    setIsOpen17(!isOpen17);
  };

  const toggleDropdown18 = () => {
    setIsOpen18(!isOpen18);
  };

  const toggleDropdown19 = () => {
    setIsOpen19(!isOpen19);
  };


  return (
    <div className='row'>
      <div className='column left'>
        <div className='category'>
          <div className='category-items'>
            <h1 className='category-header'>kategoriler</h1>

            <div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown1}><img src={img1} alt='img1' />Yaza Özel</button>
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
                <button className='category-btn category-text' onClick={toggleDropdown2}><img src={img2} alt='img2' />İndirimler</button>
                {isOpen2 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Su & içecek</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Fırından</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Temel Gıda</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Atıştırmalık</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Dondurma</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Süt Ürünleri</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Kahvaltılık</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Yiyecek</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Fit & Form</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Kişisel Bakım</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Ev Bakım</a></div>
                    <div><a href="#12" className='category-btn category-text category-de-acilir-menu'>Ev & Yaşam</a></div>
                    <div><a href="#13" className='category-btn category-text category-de-acilir-menu'>Bebek</a></div>
                    <div><a href="#14" className='category-btn category-text category-de-acilir-menu'>Cinsel Sağlık</a></div>
                  </div>
                )}
              </div>
            </div>

          
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown3}><img src={img3} />Su & içecek</button>
                {isOpen3 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Su</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Buz</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Gazlı İçecek</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Maden Suyu</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Ayran & Kefir</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Soğuk Çay</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Soğuk Kahve</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Meyve Suyu</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Kahve</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Çay</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Enerji İçeceği</a></div>
                    <div><a href="#12" className='category-btn category-text category-de-acilir-menu'>Fonksiyonel İçecekler</a></div>
                    <div><a href="#13" className='category-btn category-text category-de-acilir-menu'>Süt & Salep</a></div>
                    <div><a href="#14" className='category-btn category-text category-de-acilir-menu'>Vegan</a></div>
                  </div>
                )}
              </div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown4}><img src={img4} alt='img4' />Meyve & Sebze</button>
                {isOpen4 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>İlginizi Çekebilecekler</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Meyve</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Sebze</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Yeşillik</a></div>
                  </div>
                )}
              </div>
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown5}><img src={img5} alt='img5' />Fırından</button>
                {isOpen5 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Birlikte İyi Gider</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Taze Fırın</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Paketli Ekmek</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Unlu Mamüller</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Donuk Fırın</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Glutensiz</a></div>
                  </div>
                )}
              </div>
            
            
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown6}><img src={img6} alt='img6' />Temel Gıda</button>
                {isOpen6 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>İlginizi Çekebilecekler</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Et,Tavuk & Balık</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Makarna</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Pirinç</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Bulgur</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Bakliyat</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Salça</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Sos</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Konserve</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Un</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Sıvı Yağ</a></div>
                    <div><a href="#12" className='category-btn category-text category-de-acilir-menu'>ZeytinYağlı</a></div>
                    <div><a href="#13" className='category-btn category-text category-de-acilir-menu'>Şeker</a></div>
                    <div><a href="#14" className='category-btn category-text category-de-acilir-menu'>Sirke & Salata Sosu</a></div>
                    <div><a href="#15" className='category-btn category-text category-de-acilir-menu'>Baharat</a></div>
                    <div><a href="#16" className='category-btn category-text category-de-acilir-menu'>Çorba</a></div>
                    <div><a href="#17" className='category-btn category-text category-de-acilir-menu'>Tatlı</a></div>
                    <div><a href="#18" className='category-btn category-text category-de-acilir-menu'>Pasta Malzemeleri</a></div>
                    <div><a href="#19" className='category-btn category-text category-de-acilir-menu'>Krema</a></div>
                    <div><a href="#20" className='category-btn category-text category-de-acilir-menu'>Tereyağı & Margarin</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown7}><img src={img7} alt='img7' />Atıştırmalık</button>
                {isOpen7 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Cips</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Kuruyemiş</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Atıştırmalık Paketleri</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Kek</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Bisküvi</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Gofret</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Tablet Çikolata</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Çikolata Bar</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Hediyelik Çikolata</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Sürülebilir</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Kraker & Kurabiye</a></div>
                    <div><a href="#12" className='category-btn category-text category-de-acilir-menu'>Sakız & Şekerleme</a></div>
                    <div><a href="#13" className='category-btn category-text category-de-acilir-menu'>Çocuklara Özel & Draje</a></div>
                    <div><a href="#14" className='category-btn category-text category-de-acilir-menu'>Fit & Form</a></div>
                    <div><a href="#15" className='category-btn category-text category-de-acilir-menu'>Tatlı</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown8}><img src={img8} alt='img8' />Dondurma</button>
                {isOpen8 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>İlginizi Çekebilecekler</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Çubuk</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Bar</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Külah</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Dondurma Paketleri</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Çoklu</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Kutu</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Dondurma Sosu</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown9}><img src={img9} alt='img9' />Süt Ürünleri</button>
                {isOpen9 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>İlginizi Çekebilecekler</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Süt</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Peynir</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Yoğurt</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Tereyağı & Margarin</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Krema</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Ayran & Kefir</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Vegan</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Sütlü Tatlı</a></div>
                  </div>
                )}
              </div>


              <div>
                <button className='category-btn category-text' onClick={toggleDropdown10}><img src={img10} alt='img10' />Kahvaltılık</button>
                {isOpen10 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>İlginizi Çekebilecekler</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Yumurta</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Şarküteri</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Zeytin</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Kahvaltılık Gevrek</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Bal & Reçel</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Sürülebilir</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Peynir</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Çay</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Helva</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Vegan</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown11}><img src={img11} alt='img11' />Yiyecek</button>
                {isOpen11 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Sandviç</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Hazır Yemek</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Konserve</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Turşu</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Dondurulmuş</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Tatlı</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Çiğ Köfte</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Vegan</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Taze Yemek</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Çorba</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown12}><img src={img12} alt='img12' />Fit & Form</button>
                {isOpen12 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Birlikte İyi Gider</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Bar</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Granola</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Süt Ürünleri</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Kraker & Bisküvi</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Kuruyemiş</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Tahıllı Gevrek</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Glutensiz</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Bakliyat & Konserve</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Şarküteri</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>İçecek</a></div>
                    <div><a href="#12" className='category-btn category-text category-de-acilir-menu'>Vegan</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown13}><img src={img13} alt='img13' />Kişisel Bakım</button>
                {isOpen13 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Ağız Bakım</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Saç Bakım</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Duş & Bakım</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Sabun</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Deodorant</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Hijyenik Ped</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Kozmetik</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Tıraş Malzemeleri</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Vucut & El Bakım</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Ağda & Tüy Dökücü</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Islak Havlu</a></div>
                    <div><a href="#12" className='category-btn category-text category-de-acilir-menu'>Genel Sağlık</a></div>
                    <div><a href="#13" className='category-btn category-text category-de-acilir-menu'>Kolonya</a></div>
                    <div><a href="#14" className='category-btn category-text category-de-acilir-menu'>Seyahat ürünleri</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown14}><img src={img14} alt='img14' />Ev Bakım</button>
                {isOpen14 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Öne Çıkanlar</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Temizlik</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Çamaşır</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Kağıt Ürünleri</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Mutfak</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Bulaşık</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Sabun</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Oda Kokusu</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Böcek İlacı</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown15}><img src={img15} alt='img15' />Ev & Yaşam</button>
                {isOpen15 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Gazete & Dergi</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Giyim</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Mutfak Ürünleri</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Küçük Ev Aletleri</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Pil</a></div>
                    <div><a href="#6" className='category-btn category-text category-de-acilir-menu'>Oyun & Oyuncak</a></div>
                    <div><a href="#7" className='category-btn category-text category-de-acilir-menu'>Elektrik & Aydınlatma</a></div>
                    <div><a href="#8" className='category-btn category-text category-de-acilir-menu'>Kırtasiye</a></div>
                    <div><a href="#9" className='category-btn category-text category-de-acilir-menu'>Piknik</a></div>
                    <div><a href="#10" className='category-btn category-text category-de-acilir-menu'>Parti Malzemeleri</a></div>
                    <div><a href="#11" className='category-btn category-text category-de-acilir-menu'>Diğer</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown16}><img src={img16} alt='img16' />Teknoloji</button>
                {isOpen16 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Küçük Ev Aletleri</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Şarj Aleti & Kablo</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Müzik</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Bilgisayar Aksesuar</a></div>
                  </div>
                )}
              </div>
              
              <div>
                <button className='category-btn category-text' onClick={toggleDropdown17}><img src={img17} alt='img17' />Evcil Hayvan</button>
                {isOpen17 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Kedi</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Köpek</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Kuş</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown18}><img src={img18} alt='img18' />Bebek</button>
                {isOpen18 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Bebek Bezi</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Bebek Bakım</a></div>
                    <div><a href="#3" className='category-btn category-text category-de-acilir-menu'>Mama</a></div>
                    <div><a href="#4" className='category-btn category-text category-de-acilir-menu'>Biberon & Emzik</a></div>
                    <div><a href="#5" className='category-btn category-text category-de-acilir-menu'>Çamaşır</a></div>
                  </div>
                )}
              </div>

              <div>
                <button className='category-btn category-text' onClick={toggleDropdown19}><img src={img19} alt='img19' />Cinsel Sağlık</button>
                {isOpen19 && (
                  <div>
                    <div><a href="#1" className='category-btn category-text category-de-acilir-menu'>Prezervatif</a></div>
                    <div><a href="#2" className='category-btn category-text category-de-acilir-menu'>Jel</a></div>
                  </div>
                )}
              </div>


          

            
            
      
            

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
