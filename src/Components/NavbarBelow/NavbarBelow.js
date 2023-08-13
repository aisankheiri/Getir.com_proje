import React from "react";
import "./NavbarBelow.css";
import Footer from "../Footer/Footer";
import AppStordan from "../../Assets/logoPics/App Stordan.svg";
import GooglePlay from "../../Assets/logoPics/Google Play.svg";
import AppGallery from "../../Assets/logoPics/AppGallery.svg";

const NavbarBelow = () => {
  return (
    <footer className="footer-container">
      <nav className="navbar-container">
        <div className="navbar-items-container">
          <div className="navbar-item">
            <div className="navbar-item-header">Getir'i indirin!</div>
            <ol className="navbar-item-listitems">
              <li><img src={AppStordan} alt="AppStordan"/></li>
              <li><img src={GooglePlay} alt="GooglePlay"/></li>
              <li><img src={AppGallery} alt="AppGallery"/></li>
            </ol>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-header">Getir'i keşfedin</div>
            <ol className="navbar-item-listitems">
              <li>Hakkımızda</li>
              <li>Karıyer</li>
              <li>Teknoloji Kariyerleri</li>
              <li>İletişim</li>
              <li>Sosyal Sorumluluk Projeleri</li>
            </ol>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-header">Yardıma mı ihtiyacınız var?</div>
            <ol className="navbar-item-listitems">
              <li>Sıkça Sorulan Sorular</li>
              <li>Kişisel Verilerin Korunması</li>
              <li>Gizlilik Politikası</li>
              <li>Kullanım Koşulları</li>
              <li>Çerez Politikası</li>
            </ol>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-header">İş Ortağımız Olun</div>
            <ol className="navbar-item-listitems">
              <li>Bayimiz Olun</li>
              <li>Deponuzu Kiralayın</li>
              <li>GetirYemek Restoranı Olun</li>
              <li>GetirÇarşı İşletmesi Olun</li>
              <li>Zincir Restoranlar</li>
            </ol>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-header">karekod</div>
          </div>
        </div>
      </nav>
      <Footer/>
    </footer>
  );
};

export default NavbarBelow;
