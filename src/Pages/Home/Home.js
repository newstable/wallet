import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import ethereum from "../../assets/img/ethereum.png";
import arrow from "../../assets/img/right-arrow.png";
import Assets from "./Asset";
import Activity from "./Activity";
import ReactTooltip from "react-tooltip";
import CopyText from "react-copy-text";
import { ethers } from "ethers";

import "./home.scss";

const Home = () => {
  const [myAccount, setMyAccount] = useState("");
  useEffect(() => {
    // chrome.storage.sync.get("Mnemonic", function (result) {
    //   console.log(typeof result.Mnemonic);
    //   let mnemonicWallet = ethers.Wallet.fromMnemonic(result.Mnemonic);
    //   console.log(typeof mnemonicWallet.privateKey);
    // });
    chrome.storage.local.get("Mnemonic", function (result) {
      let mnemonicWallet = ethers.Wallet.fromMnemonic(result.Mnemonic);
      setMyAccount(mnemonicWallet.privateKey);
    });
  });
  var styledAddress = myAccount
    ? myAccount.slice(0, 4) + "..." + myAccount.slice(-4)
    : "";

  const inputEl = useRef(null);
  const [connectState, setConnectState] = useState(false);
  const [btnState, setBtnState] = useState(1);
  const [dropStatus, setDrop] = useState(false);
  const [changeClass, setChangeClass] = useState("tooltip");
  const [accountCopy, setAccountCopy] = useState("");
  const [tooltip_txt, setTooltip_txt] = useState("Copy to clipboard");
  // const [dropStatus, setDrop] = useState(false);
  function showDropdown() {
    setDrop(!dropStatus);
  }

  function changeStatusActivity(element) {
    if (element.className.indexOf("tab--active") > -1) {
      element.classList.remove("tab--active");
    } else {
      element.classList.add("tab--active");
    }
    setStatus(false);
  }

  const copyAccount = () => {
    setAccountCopy(myAccount);
    setTooltip_txt("Copied");
    setChangeClass("tooltip_Click");
    setTimeout(() => {
      setTooltip_txt("Copy to clipboard");
      setChangeClass("tooltip");
    }, 5000);
  };

  const btStateChange = (val) => {
    setBtnState(val);
  };

  return (
    <>
      <Layout>
        <div className="accountInfo">
          <button className="networkStatus">
            <div className="circle">
              <span></span>
            </div>
            <div className="statusTitle">Not connected</div>
          </button>
          <div
            className="account"
            data-tip={tooltip_txt}
            data-place="bottom"
            data-type="dark"
            onClick={() => copyAccount()}
          >
            <CopyText text={accountCopy.toString()} />
            <p>Account1</p>
            <p>{styledAddress}</p>
            <ReactTooltip className={changeClass} />
          </div>
          <div className="threeDot">
            <ul
              className="dropbtn icons btn-right showLeft"
              onClick={(e) => showDropdown()}
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div
          ref={inputEl}
          id="myDropdown"
          className={`dropdown-content ${dropStatus ? "show" : ""}`}
        >
          <div className="expandView">
            <FontAwesomeIcon icon={faExpandArrowsAlt} />
            <a href="#">Expand View</a>
          </div>
          <div className="expandView">
            <FontAwesomeIcon icon={faUser} />
            <Link to="/home/account-detail">Account Details</Link>
          </div>
        </div>
        <div className="wallet-overview">
          <div className="wallet-overview__balance">
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                border: "1px solid #6c4f24",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "white",
              }}
            >
              <img
                className="identicon identicon__image-border"
                src={ethereum}
                style={{ height: "28px" }}
              />
            </div>
            <div className="eth-overview__balance">
              <span className="currency-display-component__text">0.0003</span>
              <span className="currency-display-component__suffix">ETH</span>
            </div>
          </div>
          <div className="wallet-overview__buttons">
            <button className="icon-button eth-overview__button">
              <Link to="/home/buy" style={{ color: "white" }}>
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
                      fill="white"
                    ></path>
                    <rect
                      x="0.260986"
                      y="15.75"
                      width="15.8387"
                      height="2.25"
                      rx="1"
                      fill="white"
                    ></rect>
                  </svg>
                </div>
                <span>Buy</span>
              </Link>
            </button>
            <button
              className="icon-button eth-overview__button"
              data-testid="eth-overview-send"
            >
              <Link to="/home/send" style={{ color: "white" }}>
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
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <span>Send</span>
              </Link>
            </button>
            <button className="icon-button eth-overview__button">
              <div>
                <div
                  className=""
                  style={{ display: "inline" }}
                  title="Unavailable on this network"
                >
                  <Link to="/home/swap" style={{ color: "white" }}>
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
                          fill="white"
                          stroke="white"
                          strokeWidth="0.1"
                        ></path>
                      </svg>
                    </div>
                    <span>Swap</span>
                  </Link>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="tab">
          <ul className="tabs__list home__tabs">
            <li
              onClick={() => btStateChange(1)}
              className={
                btnState == 1 ? "tab home__tab click" : "tab home__tab noClick"
              }
            >
              <button className="cursor_1">Assets</button>
            </li>
            <li
              onClick={() => btStateChange(2)}
              className={
                btnState == 2 ? "tab home__tab click" : "tab home__tab noClick"
              }
            >
              <button className="activityButton cursor_1">Activity</button>
            </li>
          </ul>
          {btnState == 1 ? <Assets></Assets> : <Activity></Activity>}
          {btnState == 1 ? (
            <div className="box">
              <h6 className="box-typo">Don't see your token?</h6>
              <div className="import-token-link box--flex-direction-row box--text-align-center">
                <a
                  className="button btn-link import-token-link__link"
                  role="button"
                >
                  Refresh list
                </a>
                or
                <Link
                  to="/home/Import-token"
                  className="button btn-link import-token-link__link"
                  role="button"
                >
                  import tokens
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="home__support">
          <span>
            {" "}
            Need help? Contact &nbsp;
            <a
              href="https://support.metamask.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              MetaMask Support
            </a>
          </span>
        </div>
      </Layout>
    </>
  );
};

export default Home;
