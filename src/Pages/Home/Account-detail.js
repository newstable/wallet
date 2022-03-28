import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";
import "./account-detail.scss";
import QRCode from "react-qr-code";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Account_detail = () => {
  return (
    <>
      <Layout>
        <div className="account-detail">
          <div className="card">
            <div className="import-header">
              <h2 style={{ textAlign: "center" }}>Import Account</h2>
              <div>
                <div
                  className="identicon"
                  style={{
                    height: "64px",
                    width: "64px",
                    borderRadius: "32px",
                    margin: "auto",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50px",
                      overflow: "hidden",
                      padding: "0px",
                      margin: "0px",
                      width: "64px",
                      height: "64px",
                      display: "inline-block",
                      background: "rgb(200, 20, 83)",
                    }}
                  >
                    <svg x="0" y="0" width="64" height="64">
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="64"
                        transform="translate(4.983221152105917 -13.079409218775442) rotate(314.2 32 32)"
                        fill="#18A2F2"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="64"
                        transform="translate(23.273183023731914 -25.08668920152236) rotate(340.9 32 32)"
                        fill="#FA6C00"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="64"
                        height="64"
                        transform="translate(-34.83942366112994 35.54668045854147) rotate(243.1 32 32)"
                        fill="#03535E"
                      ></rect>
                    </svg>
                  </div>
                </div>
                <div className="editable-label account-details-modal__name">
                  <div className="editable-label__value">Account 1</div>
                  <button className="editable-label__icon-button">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="fas fa-pencil-alt editable-label__icon"
                    />
                  </button>
                </div>
                <div className="qrcode">
                  <QRCode value="" size={150} />
                  <div className="qrcode-address">
                    0x686c626E48bfC5DC98a30a9992897766fed4Abd3
                  </div>
                </div>
                <div className="button-group-account">
                  <button>View on Etherscan</button>
                  <button>Export Private Key</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Account_detail;
