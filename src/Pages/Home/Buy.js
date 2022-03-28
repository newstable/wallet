import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";
import wyre from "../../assets/img/wyre.png";

import "./buy.scss";

const Buy = () => {
  return (
    <>
      <Layout>
        <div className="buy-container">
          <div className="buy-header">
            <div className="header-logo">
              <div className="icon-button__circle">
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.62829 14.3216C8.65369 14.2947 8.67756 14.2664 8.69978 14.2368L12.8311 10.1286C13.0886 9.87975 13.1913 9.51233 13.1 9.16703C13.0087 8.82174 12.7375 8.55207 12.3903 8.46129C12.0431 8.37051 11.6736 8.47268 11.4233 8.72869L8.89913 11.2387L8.89913 1.3293C8.90647 0.970874 8.71837 0.636511 8.40739 0.455161C8.0964 0.273811 7.71112 0.27381 7.40014 0.45516C7.08915 0.636511 6.90105 0.970873 6.90839 1.3293L6.90839 11.2387L4.38422 8.72869C4.13396 8.47268 3.76446 8.37051 3.41722 8.46129C3.06998 8.55207 2.79879 8.82174 2.7075 9.16703C2.61621 9.51233 2.71896 9.87975 2.97641 10.1286L7.11049 14.2395C7.28724 14.4717 7.55784 14.6148 7.85026 14.6306C8.14268 14.6464 8.42727 14.5333 8.62829 14.3216Z"
                    fill="#e9ad56"
                  ></path>
                  <rect
                    x="0.260986"
                    y="15.75"
                    width="15.8387"
                    height="2.25"
                    rx="1"
                    fill="#e9ad56"
                  ></rect>
                </svg>
              </div>
              <h2>DEPOSIT ETH</h2>
            </div>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <Link
                className="btn-puc btn-puc-cancel"
                style={{ backgroundColor: "#060000", boxShadow: "none" }}
                to="/home"
              >
                Cancel
              </Link>
            </div>
          </div>
          <div className="buy-content">
            <div className="buy-item">
              <div className="item-icon">
                <img src={wyre} />
              </div>
              <div className="item-description">
                <div className="item-title">Buy ETH with Wyre</div>
                <div className="item-text">
                  Wyre lets you use a debit card to deposit ETH right in to your
                  MetaMask account.
                </div>
              </div>
              <div className="item-connect">
                <Link className="btn-puc" to="/home">
                  Connect Wyre
                </Link>
              </div>
            </div>
            <div className="buy-item">
              <div className="item-icon">
                <img src={wyre} />
              </div>
              <div className="item-description">
                <div className="item-title">Buy ETH with Wyre</div>
                <div className="item-text">
                  Wyre lets you use a debit card to deposit ETH right in to your
                  MetaMask account.
                </div>
              </div>
              <div className="item-connect">
                <Link className="btn-puc" to="/home">
                  Connect Wyre
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Buy;
