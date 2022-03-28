import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";

const ImportAccount = () => {
  const [type, setType] = useState(0);
  const changeType = (val) => {
    setType(val);
  };
  return (
    <>
      <Layout>
        <div className="importAccount">
          <div className="card">
            <div className="import-header">
              <h2 style={{ textAlign: "center" }}>Import Account</h2>
              <div className="import-description">
                Imported accounts will not be associated with your originally
                created MetaMask account Secret Recovery Phrase. Learn more
                about imported accounts
                <span className="new-account-link">here</span>
              </div>
            </div>
            <div className="import-select">
              <label>Select Type</label>
              <select
                className="input-password w100"
                onChange={(e) => changeType(e.target.value)}
              >
                <option value={0}>Private Key</option>
                <option value={1}>JSON File</option>
              </select>
            </div>
            {type == 0 ? (
              <div className="import-form-private">
                <p>Enter your private key string here:</p>
                <input
                  type="password"
                  className="input-password w100"
                  placeholder="Private Key"
                />
                <div className="button-group">
                  <div className="">
                    <Link className="btn-puc btn-puc-cancel" to="/home">
                      Cancel
                    </Link>
                  </div>
                  <div className="">
                    <Link className="btn-puc" to="/home">
                      Create
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="import-form-json">
                <p>Used by a variety of different clients</p>
                <a
                  className="new-account-import-form__help-link"
                  href="https://metamask.zendesk.com/hc/en-us/articles/360015489331-Importing-an-Account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  File import not working? Click here!
                </a>
                <input type="file" />
                <input
                  type="password"
                  className="input-password w100"
                  placeholder="Enter Password"
                />
                <div className="button-group">
                  <div className="">
                    <Link className="btn-puc btn-puc-cancel" to="/home">
                      Cancel
                    </Link>
                  </div>
                  <div className="">
                    <Link className="btn-puc" to="/home">
                      Create
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ImportAccount;
