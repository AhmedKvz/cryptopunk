import React, { useState } from "react";
import "../components/Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import menuIcon from "../assets/hamburger-menu.png";
import "../App.css";
const Header = () => {
  const handleClick = () => {
    window.open(
      "https://thirdweb.com/rinkeby/0x8067fE994Db6f957048090e4EE0454f596Ba1093/nft-collection/0x0902d16c6D7503A30f615f23D52BCB18E972AD0e"
    );
  };

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="header">
      <div className="left__side">
        <ul>
          <img src={punkLogo} className="punk__logo" alt="" />
          <img src={searchIcon} alt="icon.jpg" />

          <input
            className="search__input"
            placeholder="Collection, item or user"
          />
        </ul>
      </div>
      <div className="right__side">
        <ul id={showLinks ? "hidden" : ""}>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
          <button onClick={handleClick} className="login__button">
            GET IN
          </button>
        </ul>
        <button onClick={() => setShowLinks(!showLinks)}>
          <img className="menu__icon" src={menuIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
