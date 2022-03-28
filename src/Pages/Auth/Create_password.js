import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "./Layout";
import { ethers } from "ethers";
import cryptoJs from "crypto-js";

var CryptoJS = require("crypto-js");

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [passwordStatus, setValidate] = useState(0);
  const [passwordMatchStatus, setMatch] = useState(0);
  const [termCheck, settermCheck] = useState(false);
  const history = useHistory();

  const validatePass = (val) => {
    val.length == 0
      ? setValidate(1)
      : val.length > 7
      ? setValidate(1)
      : setValidate(0);
    setPassword(val);
  };

  const matchPass = (val) => {
    val.length == 0
      ? setMatch(1)
      : val === password
      ? setMatch(1)
      : setMatch(0);
    setPasswordMatch(val);
  };

  const checkeButton = () => {
    settermCheck(!termCheck);
  };

  const hashlt = async () => {
    const wallet = ethers.Wallet.createRandom();
    var newMnemonic = wallet.mnemonic.phrase;
    var hashmnemonic = CryptoJS.AES.encrypt(
      JSON.stringify(newMnemonic),
      password
    ).toString();
    localStorage.setItem("hash", hashmnemonic);
    chrome.storage.local.set({ Mnemonic: newMnemonic });
    history.push("/seed-phrase");
  };

  //   function Password() {}
  return (
    <>
      <Layout>
        <div style={{ marginTop: "0", padding: "0 1em" }}>
          <div className="card">
            <h2 style={{ textAlign: "center" }}>Create Password</h2>
            <p>New password (min 8 chars)</p>
            <input
              type="password"
              className="input-password w100"
              onChange={(e) => validatePass(e.target.value)}
            />
            {passwordStatus === 0 && password != "" ? (
              <span style={{ color: "#f44336", fontSize: "0.75em" }}>
                Password not long enough
              </span>
            ) : (
              ""
            )}
            <p>Confirm password</p>
            <input
              type="password"
              className="input-password w100"
              onChange={(e) => matchPass(e.target.value)}
            />
            {passwordMatchStatus === 0 && passwordMatch != "" ? (
              <span style={{ color: "#f44336", fontSize: "0.75em" }}>
                Passwords Don't Match
              </span>
            ) : (
              ""
            )}
            <label className=" mt3  container-check">
              I have read and agree to the{" "}
              <a
                style={{ color: "#016da1" }}
                href="https://metamask.io/terms.html"
                target="_blank"
              >
                {" "}
                Terms of Use
              </a>
              <input type="checkbox" onChange={checkeButton} />
              <span className="checkmark"></span>
            </label>
            <div className="row center" style={{ marginTop: "50px" }}>
              {termCheck == true &&
              passwordStatus === 1 &&
              passwordMatchStatus === 1 ? (
                <button className="btn-puc" onClick={() => hashlt()}>
                  Create
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CreatePassword;
