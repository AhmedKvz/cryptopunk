import React from "react";
import "../components/CollectionCard.css";
import weth from "../assets/weth.png";
const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collection__card">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          <h1>{name === "Cyber Pun" ? "Cyber Punk" : name}</h1>
          <div className="id">#{id}</div>
        </div>
      </div>
      <div className="price__container">
        <img src={weth} className="weth__image" alt="" />
        <div className="price">{traits[0]?.value ? 10 : 10}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
