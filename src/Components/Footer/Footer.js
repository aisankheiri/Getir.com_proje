import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="cart-footer">
      <article className="footer-items-container">
        <div className="footer-items">
          <div className="footer-item1">© 2023 Getir</div>
          <a
            className="footer-item2"
            href="https://e-sirket.mkk.com.tr/?page=company&company=18806#"
            target="_blank"
            rel="noreferrer noopener"
          >
            . Bilgi Toplumu Hizmetleri
          </a>
          <div className="footer-icons">
            <a href="https://www.facebook.com/getir" className="icon" target="_blank" rel="noreferrer noopener"><BsFacebook className="icon-face" /></a>
            <a href="https://www.twitter.com/getir" className="icon" target="_blank" rel="noreferrer noopener"><BsTwitter className="icon-twit" /></a>
            <a href="https://www.instagram.com/getir" className="icon" target="_blank" rel="noreferrer noopener"><BsInstagram className="icon-insta" /></a>
            <button href="" className="change-language-btn" target="_blank" rel="noreferrer noopener"><MdLanguage className="icon-language" />Türkçe (TR)</button>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
