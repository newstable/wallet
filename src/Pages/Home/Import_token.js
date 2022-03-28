import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";

import search from "../../assets/img/search.png";
import ethereum from "../../assets/img/ethereum.png";

import "./import.scss";

const importToken = () => {
  return (
    <>
      <Layout>
        <div className="importAccount">
          <div className="card">
            <div className="import-header">
              <h2 style={{ textAlign: "center" }}>Import Account</h2>
            </div>
            <div className="actionable-message__message">
              <span>
                {" "}
                New! Improved token detection is available on Ethereum Mainnet
                as an experimental feature.
                <a className="button btn-link import-token__link" role="button">
                  {" "}
                  Enable it from Settings.
                </a>
              </span>
            </div>
            <div className="search-token">
              <img src={search} />
              <input placeholder="Search Tokens" />
            </div>
            <div className="search-result">
              <p>Search Result</p>
              <div className="token-list">
                <div className="token-icon">
                  <img src={ethereum} />
                </div>
                <div className="token-name">Ethereum(ETH)</div>
              </div>
              <div className="token-list">
                <div className="token-icon">
                  <img src={ethereum} />
                </div>
                <div className="token-name">Ethereum(ETH)</div>
              </div>
              <div className="token-list">
                <div className="token-icon">
                  <img src={ethereum} />
                </div>
                <div className="token-name">Ethereum(ETH)</div>
              </div>
            </div>
            <div className="import-foot">
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

export default importToken;
