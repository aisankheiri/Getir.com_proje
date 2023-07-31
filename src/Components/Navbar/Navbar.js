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

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
    <nav>
      <div className="navbar-links-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="nav-link nav-link-getir-text">getir</button>
        </Link>
        <Link to="/yemek" style={{ textDecoration: "none" }}>
          <button className="nav-link">getiryemek</button>
        </Link>
        <Link to="/su" style={{ textDecoration: "none" }}>
          <button className="nav-link">getirsu</button>
        </Link>
        <Link to="/carsi" style={{ textDecoration: "none" }}>
          <button className="nav-link">getirçarşı</button>
        </Link>
      </div>

      <div className="nav-second">
        <div>
          <HiOutlineBars3
            className="menu-option-icon"
            onClick={() => setOpenMenu(true)}
          />
        </div>
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
    </nav>
  );
};

export default Navbar;
