import React, { useState, useEffect } from "react";
import "../components/Content.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import eth from "../assets/eth.png";
const Content = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="main__content">
        <div className="punk__container">
          <div className="selected__punk__container">
            <img src={activePunk.image_url} alt="" className="selected__punk" />
          </div>
          <div className="punk__details">
            <div className="title">
              <h1>
                {activePunk.name === "Cyber Pun"
                  ? "Cyber Punk"
                  : activePunk.name}
              </h1>{" "}
              <span>#{activePunk.token_id}</span>
            </div>
            <div className="owner__details">
              <div className="owner__image">
                <img className="circle" src={eth} alt="" />
                <h1 className="crypto__wallet">
                  @Kvz {activePunk.owner.address}
                </h1>
              </div>
            </div>
          </div>
          <div className="owner__info">
            <div className="owner__link">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="owner__link">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="owner__link">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
