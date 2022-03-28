import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout/header";
import scan from "../../assets/img/scanning.png";
import search from "../../assets/img/search.png";
import ethereum from "../../assets/img/ethereum.png";
import arrow from "../../assets/img/right-arrow.png";

import "./send.scss";

const Send = () => {
  const [selectCoin, setCoin] = useState(false);
  const resizeInput = (element) => {
    element.style.width = element.value.length + "ch";
  };
  const selectType = () => {
    setCoin(!selectCoin);
  };
  return (
    <>
      <Layout>
        <div className="buy-container">
          <div className="buy-header">
            <div className="header-logo">
              <div className="icon-button__circle">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6827 0.889329C13.6458 0.890495 13.609 0.893722 13.5725 0.898996H7.76263C7.40564 0.893947 7.07358 1.08151 6.89361 1.38986C6.71364 1.69821 6.71364 2.07958 6.89361 2.38793C7.07358 2.69628 7.40564 2.88384 7.76263 2.87879H11.3124L1.12335 13.0678C0.864749 13.3161 0.760577 13.6848 0.851011 14.0315C0.941446 14.3786 1.21235 14.6495 1.55926 14.7399C1.90616 14.8303 2.27485 14.7262 2.52313 14.4676L12.7121 4.27857V7.82829C12.7071 8.18528 12.8946 8.51734 13.203 8.69731C13.5113 8.87728 13.8927 8.87728 14.2011 8.69731C14.5094 8.51734 14.697 8.18528 14.6919 7.82829V2.01457C14.7318 1.7261 14.6427 1.43469 14.4483 1.2179C14.2538 1.00111 13.9738 0.880924 13.6827 0.889329Z"
                    fill="#e9ad56"
                  ></path>
                </svg>
              </div>
              <h2>SEND TO</h2>
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
          <div className="send-content card">
            <div className="send-amount">
              <img src={search} />
              <input
                className="send-token"
                type="text"
                placeholder="Search, Public address or ENS"
              />
              <img src={scan} />
            </div>
            <div className="send-main">
              <div className="send-v2__form-row" onClick={() => selectType()}>
                <label>Asset:</label>
                <div className="asset-input">
                  <div className="asset-input-icon">
                    <img src={ethereum} />
                  </div>
                  <div>
                    <div>ETH</div>
                    <div style={{ fontSize: "12px" }}>Balance: 0.0003ETH</div>
                  </div>
                  <img className="arrow" src={arrow} />
                </div>
                {selectCoin ? (
                  <div className="select-coin asset-input">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        padding: "5px 0",
                      }}
                    >
                      <div className="asset-input-icon">
                        <img src={ethereum} />
                      </div>
                      <div>
                        <div>ETH</div>
                        <div style={{ fontSize: "12px" }}>
                          Balance: 0.0003ETH
                        </div>
                      </div>
                      <div style={{ width: "14px" }}></div>
                    </div>
                    <div className="account-menu__divider"></div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        padding: "5px 0",
                      }}
                    >
                      <div className="asset-input-icon">
                        <img src={ethereum} />
                      </div>
                      <div>
                        <div>ETH</div>
                        <div style={{ fontSize: "12px" }}>
                          Balance: 0.0003ETH
                        </div>
                      </div>
                      <div style={{ width: "14px" }}></div>
                    </div>
                    <div className="account-menu__divider"></div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        padding: "5px 0",
                      }}
                    >
                      <div className="asset-input-icon">
                        <img src={ethereum} />
                      </div>
                      <div>
                        <div>ETH</div>
                        <div style={{ fontSize: "12px" }}>
                          Balance: 0.0003ETH
                        </div>
                      </div>
                      <div style={{ width: "14px" }}></div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="send-v2__form-row">
                <div
                  style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                  }}
                >
                  <label>Amount:</label>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#e9ad56",
                      border: "1px solid #e9ad56",
                      borderRadius: "15px",
                      padding: "2px 4px",
                    }}
                  >
                    MAX
                  </div>
                </div>
                <div className="asset-input">
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className="amount-input"
                        type="number"
                        placeholder="0"
                        onChange={(e) => resizeInput(e.target)}
                      />
                      <label>ETH</label>
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      No Conversion Rate Available
                    </div>
                  </div>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z"
                      fill="#404040"
                      stroke="white"
                      strokeWidth="0.1"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="send-v2__form-row">
                <label>Hex Data:</label>
                <textarea
                  style={{ width: "200px", maxWidth: "200px" }}
                ></textarea>
              </div>
            </div>
            <div className="account-menu__divider"></div>
            <div className="send-foot">
              <div className="">
                <Link className="btn-puc btn-puc-cancel" to="/home">
                  Cancel
                </Link>
              </div>
              <div className="">
                <Link className="btn-puc" to="/home">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Send;
