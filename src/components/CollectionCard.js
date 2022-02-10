import React from "react";
import "../components/CollectionCard.css";
import weth from "../assets/weth.png";
const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collection__card">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          <h1>{name}</h1>
          <div className="id">#{id}</div>
        </div>
      </div>
      <div className="price__container">
        <img src={weth} className="weth__image" alt="" />
        <div className="price">{traits[0]?.value}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
