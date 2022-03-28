import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const ImportWallet = () => {
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [passwordStatus, setValidate] = useState(0);
  const [passwordMatchStatus, setMatch] = useState(0);
  const [termCheck, settermCheck] = useState(false);
  const [privateKey, setPrivate] = useState("");
  const [privateStatus, setPrivateStatus] = useState(0);

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

  const privateKeySet = (val) => {
    val.length == 0
      ? setPrivateStatus(1)
      : val.length > 11
      ? setPrivateStatus(1)
      : setPrivateStatus(0);
    setPrivate(val);
  };

  return (
    <>
      <Layout>
        <div style={{ marginTop: "0" }}>
          <div className="card">
            <h3 className="text-center">
              Import a wallet with Secret Recovery Phrase
            </h3>
            <p className="text-center" style={{ lineHeight: "4px" }}>
              Secret Recovery Phrase
            </p>
            <input
              type="password"
              style={{ fontSize: "1em" }}
              onChange={(e) => privateKeySet(e.target.value)}
              className="input-password w100"
              placeholder="Enter your Secret Recovery Phrase"
            />
            {privateStatus === 0 && privateKey != "" ? (
              <span style={{ color: "#f44336", fontSize: "0.75em" }}>
                Secret Recovery Phrases contain 12 words
              </span>
            ) : (
              ""
            )}
            <p className="p">New password (min 8 chars)</p>
            <input
              type="password"
              onChange={(e) => validatePass(e.target.value)}
              className="input-password w100"
            />
            {passwordStatus === 0 && password != "" ? (
              <span style={{ color: "#f44336", fontSize: "0.75em" }}>
                Password not long enough
              </span>
            ) : (
              ""
            )}
            <p className="p">Confirm password</p>
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
            <div className="row center">
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
            </div>
            <div className="row center" style={{ marginTop: "30px" }}>
              {termCheck == true &&
              passwordStatus === 1 &&
              passwordMatchStatus === 1 ? (
                <Link className="btn-puc" to="/done">
                  Import
                </Link>
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

export default ImportWallet;
