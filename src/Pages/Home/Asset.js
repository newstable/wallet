import React from "react";
import { Link } from "react-router-dom";
import ethereum from "../../assets/img/ethereum.png";
import arrow from "../../assets/img/right-arrow.png";
const Assets = () => {
  return (
    <>
      <div className="tabs-content">
        <div className="list-item-assets">
          <div className="list-item__icon">
            <img
              className="identicon identicon__image-border"
              src={ethereum}
              alt="0.0003 ETH"
              style={{ height: "34px", borderRadius: "16px" }}
            />
          </div>
          <div className="list-item__heading">
            <button
              className="asset-list-item__token-button"
              title="0.0003 ETH"
            >
              <h2>
                <span className="asset-list-item__token-value">0.0003</span>
                <span className="asset-list-item__token-symbol">ETH</span>
              </h2>
            </button>
          </div>
          <div className="list-item__right-content">
            <img src={arrow} />
          </div>
        </div>
        <div className="list-item-assets">
          <div className="list-item__icon">
            <img
              className="identicon identicon__image-border"
              src={ethereum}
              alt="0.0003 ETH"
              style={{ height: "34px", borderRadius: "16px" }}
            />
          </div>
          <div className="list-item__heading">
            <button
              className="asset-list-item__token-button"
              title="0.0003 ETH"
            >
              <h2>
                <span className="asset-list-item__token-value">0.0003</span>
                <span className="asset-list-item__token-symbol">ETH</span>
              </h2>
            </button>
          </div>
          <div className="list-item__right-content">
            <img src={arrow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
