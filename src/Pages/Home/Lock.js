import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../Layout/Index";

import "./home.scss";

var CryptoJS = require("crypto-js");

const Lock = () => {
  const history = useHistory();
  const [password, setPassword] = useState();
  const matchPass = (val) => {
    setPassword(val);
  };
  const getHash = () => {
    try {
      var newMnemonic = CryptoJS.AES.decrypt(
        localStorage.getItem("hash"),
        password
      ).toString(CryptoJS.enc.Utf8);
      if (newMnemonic) {
        history.push("/home");
      }
    } catch {
      alert("error");
    }
  };
  return (
    <>
      <Layout>
        <div className="lockContent">
          <h1>Welcome to ICICB Metamask</h1>
          <p>Connecting you to Ethereum and the Decentralized Web.</p>
          <input
            style={{ width: "80%" }}
            type="password"
            className="input-password w100"
            onChange={(e) => matchPass(e.target.value)}
          />
          <div
            style={{
              marginTop: "30px",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="btn-puc1" onClick={() => getHash()}>
              Unlock
            </button>
          </div>
          <label
            className="mt3  container-check"
            style={{ width: "80%", padding: "0", textAlign: "center" }}
          >
            I have read and agree to the{" "}
            <a
              style={{ color: "#016da1" }}
              href="https://metamask.io/terms.html"
              target="_blank"
            >
              {" "}
              Terms of Use
            </a>
          </label>
        </div>
      </Layout>
    </>
  );
};

export default Lock;
