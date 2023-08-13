import React from "react";
import "./NavbarBelow.css";
import Footer from "../Footer/Footer";
import AppStordan from "../../Assets/logoPics/App Stordan.svg";
import GooglePlay from "../../Assets/logoPics/Google Play.svg";
import AppGallery from "../../Assets/logoPics/AppGallery.svg";
import Karekod from "../../Assets/karekod.png";
const NavbarBelow = () => {
  return (
    <footer className="footer-container">
      <nav className="navbar-container">
        <div className="navbar-items-container">
          <div className="navbar-item">
            <div className="navbar-item-header">Getir'i indirin!</div>
            <ol className="navbar-item-listitems">
              <li>
                <a
                  href="https://itunes.apple.com/app/id995280265"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={AppStordan} alt="AppStordan" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.getir"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={GooglePlay} alt="GooglePlay" />
                </a>
              </li>
              <li>
                <a
                  href="https://appgallery7.huawei.com/#/app/C100954039"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={AppGallery} alt="AppGallery" />
                </a>
              </li>
            </ol>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-header">Getir'i keşfedin</div>
            <ol className="navbar-item-listitems">
              <li><a href="https://getir.com/hakkimizda/" target="_blank" rel="noreferrer noopener">Hakkımızda</a></li>
              <li><a href="https://career.getir.com/" target="_blank" rel="noreferrer noopener">Kariyer</a></li>
              <li><a href="https://career.getir.com/" target="_blank" rel="noreferrer noopener">Teknoloji Kariyerleri</a></li>
              <li>İletişim</li>
              <li><a href="https://getir.com/sosyal-sorumluluk-projeleri/" target="_blank" rel="noreferrer noopener">Sosyal Sorumluluk Projeleri</a></li>
            </ol>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-header">
              Yardıma mı ihtiyacınız var?
            </div>
            <ol className="navbar-item-listitems">
              <li><a href="https://getir.com/yardim/sss/" target="_blank" rel="noreferrer noopener">Sıkça Sorulan Sorular</a></li>
              <li><a href="https://getir.com/yardim/kvkk/"  target="_blank" rel="noreferrer noopener">Kişisel Verilerin Korunması</a></li>
              <li><a href="https://getir.com/yardim/gizlilik-politikasi/" target="_blank" rel="noreferrer noopener">Gizlilik Politikası</a></li>
              <li><a href="https://getir.com/yardim/kullanim-kosullari/" target="_blank" rel="noreferrer noopener">Kullanım Koşulları</a></li>
              <li><a href="https://getir.com/yardim/cerez-politikasi/"  target="_blank" rel="noreferrer noopener">Çerez Politikası</a></li>
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
          <div className="">
            <div className="navbar-item-header karekod">
              <a
                href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="karekod-img" src={Karekod} alt="Karekod" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Footer />
    </footer>
  );
};

export default NavbarBelow;
