import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import ethereum from "../../assets/img/ethereum.png";
import "./swap.scss";
const Swap = () => {
  return (
    <>
      <Layout>
        <div className="buy-container">
          <div className="buy-header">
            <div className="header-logo">
              <div className="icon-button__circle">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z"
                    fill="#e9ad56"
                    stroke="#e9ad56"
                    strokeWidth="0.1"
                  ></path>
                </svg>
              </div>
              <h2>Swap</h2>
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
          <div className="card">
            <div className="swap-content">
              <div className="swap-from">
                <p>Swap From</p>
                <div className="swap-from-group">
                  <div className="swap-from-select">
                    <div className="swap-from-icon">
                      <img src={ethereum} />
                    </div>
                    <div className="swap-from-label">
                      <p>ETH</p>
                    </div>
                    <div className="swap-from-drop">
                      <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                  </div>
                  <input type="number" className="input-password w100" />
                </div>
                <p className="available">0.0003 ETH available to swap</p>
              </div>
              <div className="swap-icon">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1714 9.66035V12.3786H4.68253C4.51685 12.3786 4.38253 12.2443 4.38253 12.0786V10.5478C4.38253 10.1888 3.94605 10.0116 3.69574 10.269L0.978328 13.0641C0.827392 13.2193 0.827392 13.4665 0.978328 13.6217L3.69573 16.4168C3.94604 16.6742 4.38253 16.497 4.38253 16.1379V14.6072C4.38253 14.4415 4.51685 14.3072 4.68253 14.3072H14.9992H15.0492V14.2572V9.66035C15.0492 9.14182 14.6288 8.72146 14.1103 8.72146C13.5918 8.72146 13.1714 9.14182 13.1714 9.66035ZM2.55476 2.55003H2.50476V2.60003V7.19686C2.50476 7.71539 2.92511 8.13575 3.44364 8.13575C3.96218 8.13575 4.38253 7.71539 4.38253 7.19686V4.70619C4.38253 4.5805 4.48443 4.47861 4.61012 4.47861H12.8714C13.0371 4.47861 13.1714 4.61292 13.1714 4.77861V6.30937C13.1714 6.66845 13.6079 6.84566 13.8582 6.5882L16.5756 3.79315C16.7266 3.6379 16.7266 3.39074 16.5756 3.23549L13.8582 0.440443C13.6079 0.182981 13.1714 0.360188 13.1714 0.719273V2.25004C13.1714 2.41572 13.0371 2.55003 12.8714 2.55003H2.55476Z"
                    fill="#e9ad56"
                    stroke="#e9ad56"
                    strokeWidth="0.1"
                  ></path>
                </svg>
              </div>
              <div className="swap-to">
                <p>Swap To</p>
                <div className="swap-from-group">
                  <select className="input-password w100"></select>
                </div>
              </div>
            </div>
            <div className="swap-advance">
              <h3>Advanced Options</h3>
              <div className="slippage">
                <p>
                  Slippage
                  <br />
                  Tolerance
                </p>
                <div>2%</div>
                <div>3%</div>
                <div>Custom</div>
              </div>
            </div>
            <div className="swap-button">
              <Link className="btn-puc" to="/home">
                Review Swap
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Swap;
