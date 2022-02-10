import React from "react";
import "../components/Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punk__logo" alt="" />
      </div>

      <div className="search__bar">
        <div className="search__icon__container">
          <img src={searchIcon} alt="icon.jpg" />
        </div>
        <input
          className="search__input"
          placeholder="Collection, item or user"
        />
      </div>

      <div className="header__items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header__actions">
        <div className="theme__switch__container">
          <img src={themeSwitchIcon} alt="switch.jpg" />
        </div>

        <div className="login__button">GET IN</div>
      </div>
    </div>
  );
};

export default Header;
