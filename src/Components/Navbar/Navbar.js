import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineBars3 } from "react-icons/hi2";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import CardGiftcardTwoToneIcon from "@mui/icons-material/CardGiftcardTwoTone";
import RoomTwoToneIcon from "@mui/icons-material/RoomTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { useMediaQuery } from "@mui/material";
import getir from "../../Assets/logoPics/getir.svg";
import getirYemek from "../../Assets/logoPics/getiryemek.svg";
import getirBuyuk from "../../Assets/logoPics/getirbuyuk.svg";
import getirSu from "../../Assets/logoPics/getirsu.svg";
import getirCarsi from "../../Assets/logoPics/getircarsi.svg";
import { MdLanguage } from "react-icons/md";

import { BiSolidGift } from "react-icons/bi";
import avatar from "../../Assets/logoPics/avatar.jpg"
import {BiSolidChevronDown} from "react-icons/bi"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [selectedButton, setSelectedButton] = useState("");

  const handleImageClick = (buttonId) => {
    setSelectedButton(buttonId);
  };


  const images = document.querySelectorAll('.logo');

  images.forEach(image => {
    image.addEventListener('click', function () {
      images.forEach(img => img.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  const menuOptions = [
    {
      text: "Kampanyalar",
      icon: <CardGiftcardTwoToneIcon />,
      id: "kampanyalar",
      to: "/kampanyalar",
    },
    {
      text: "Adreslerim",
      icon: <RoomTwoToneIcon />,
      id: "adreslerim",
      to: "/adreslerim",
    },
    {
      text: "Favori Ürünlerim",
      icon: <FavoriteTwoToneIcon />,
      id: "favori-urunlerim",
      to: "/favori-urunlerim",
    },
    {
      text: "Geçmiş Siparişlerim",
      icon: <LocalMallTwoToneIcon />,
      id: "gecmis-siparislerim",
      to: "/gecmis-siparislerim",
    },
    {
      text: "Ödeme Yöntemlerim",
      icon: <CreditCardTwoToneIcon />,
      id: "odeme-yontemlerim",
      to: "/odeme-yontemlerim",
    },
    {
      text: "Fatura Bilgileri",
      icon: <DescriptionTwoToneIcon />,
      id: "fatura",
      to: "/fatura",
    },
    {
      text: "İletişim Tercihlerim",
      icon: <EmailTwoToneIcon />,
      id: "iletisim-tercihleri",
      to: "/iletisim-tercihleri",
    },
    {
      text: "Çıkış Yap",
      icon: <LogoutTwoToneIcon />,
      id: "home",
      to: "/",
    },
  ];

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-links-container">
          <div className="navbar-items">

            <div
              className={`logo ${selectedButton === "getir" ? "selected" : ""}`}
              onClick={() => handleImageClick("getir")}
            >
              <div className="link">
                <Link to="/">
                  <img className="img-size" src={getir} alt="getir-svg" />
                </Link>
              </div>
            </div>
            <div
              className={`logo ${selectedButton === "getiryemek" ? "selected" : ""}`}
              onClick={() => handleImageClick("getiryemek")}
            >
              <div className="link">
                <Link to="/yemek">
                  <img className="img-size" src={getirYemek} alt="getiryemek-svg" />
                </Link>
              </div>
            </div>
            <div
              className={`logo ${selectedButton === "getirbuyuk" ? "selected" : ""}`}
              onClick={() => handleImageClick("getirbuyuk")}
            >
              <div className="link">
                <Link to="/buyuk">
                  <img className="img-size" src={getirBuyuk} alt="getirbuyuk-svg" />
                </Link>
              </div>
            </div>
            <div
              className={`logo ${selectedButton === "getirsu" ? "selected" : ""}`}
              onClick={() => handleImageClick("getirsu")}
            >
              <div className="link">
                <Link to="/su">
                  <img className="img-size" src={getirSu} alt="getirsu-svg" />
                </Link>
              </div>
            </div>
            <div
              className={`logo ${selectedButton === "getircarsi" ? "selected" : ""}`}
              onClick={() => handleImageClick("getircarsi")}
            >
              <div className="link">
                <Link to="/carsi">
                  <img className="img-size" src={getirCarsi} alt="getircarsi-svg" />
                </Link>
              </div>


            </div>
            <div className="nav-items-right">
              <button href="" className="nav-item-1" target="_blank" rel="noreferrer noopener"><MdLanguage className="MdLanguage" />Türkçe (TR)</button>
              <a href="/kampanyalar" className="nav-item-2"><BiSolidGift className="BiSolidGift" />Kampanyalar</a>

              <div class="dropdown">
                <button className="nav-item-3 dropbtn">  <FontAwesomeIcon icon={faUser} style={{color: "#cbd0d7",}} className="faUser"/>Profil<BiSolidChevronDown/></button>
                <div class="dropdown-content">
                  <a className="account-back" href="/hesap">
                    <div className="dropdown-account">
                      <div className="dropdown-avatar">
                        <div className="dropdown-avatar-img"><img src={avatar} alt="avatar-png" /></div>
                      </div>
                      <div className="dropdown-account-name-phone-container">
                        <span className="account-name">Aisan Kheiri</span>
                        <span className="account-number">+905528618606</span>
                      </div>
                    </div>
                  </a>
                  <a href="/hesap/adreslerim">Adreslerim</a>
                  <a href="/hesap/favori-urunlerim">Favori Ürünlerim</a>
                  <a href="/hesap/gecmis-siparislerim">Geçmiş Siparişlerim</a>
                  <a href="/hesap/odeme-yontemlerim">Ödeme Yöntemlerim</a>
                  <a href="/hesap/fatura">Fatura Bilgileri</a>
                  <a href="/hesap/iletisim-tercihlerim">İletişim Tercihlerim</a>
                  <a href="/logout" className="dropdown-logout">Çıkış yap</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </nav>
    

      <div className="nav-second">
        {isSmallScreen && (
          <div>
            <HiOutlineBars3
              className="menu-option-icon"
              onClick={() => setOpenMenu(true)}
            />
          </div>
        )}
        <div className="nav-second-text"></div>

        <SearchTwoToneIcon className="search-icon" />

        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="left"
        >
          <Box
            sx={{ width: 450 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <div className="name-surname-container">
              <Link to="/hesap">
                <PersonOutlineTwoToneIcon className="account-icon" />
              </Link>
              <div>
                <div className="name-surname-text">Aisan Kheiri</div>
                <div className="name-surname-number">+905555555555</div>
              </div>
              <Link to="/">
                <ClearTwoToneIcon className="delete-icon" />
              </Link>
            </div>

            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component={Link} to={item.to}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>

    </div>

  );
};

export default Navbar;
