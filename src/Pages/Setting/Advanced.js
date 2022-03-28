import React, { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/header";
import Select from "../../components/Select";
import Switch from "../../components/Switch";

import "./setting.scss";

const General = () => {
  let option = [
    "USD - United States Dollar",
    "STORJ - Storj",
    "TKN - TokenCard",
    "PAY - TenX",
  ];
  let language = ["English", "Chinese", "Russian", "Spanish"];
  const [toggle, setValue] = useState(false);
  return (
    <>
      <Layout>
        <div className="setting-general">
          <div className="card">
            <h2 style={{ textAlign: "center" }}>Advanced</h2>
            <div className="general-content">
              <div className="general-content-item">
                <span>Start Logs</span>
                <span className="general-content-description">
                  State logs contain your public account addresses and sent
                  transactions.
                </span>
              </div>
              <div className="general-content-item">
                <Select value={option} />
              </div>
              <div className="general-content-item">
                <button className="sucess-button">Download State Logs</button>
              </div>
              <div className="general-content-item">
                <span>Sync with Mobiles</span>
              </div>
              <div className="general-content-item">
                <button className="sucess-button">Sync with Mobile</button>
              </div>
              <div className="general-content-item">
                <span>Reset Account</span>
                <span className="general-content-description">
                  Resetting your account will clear your transaction history.
                  This will not change the balances in your accounts or require
                  you to re-enter your Secret Recovery Phrase.
                </span>
              </div>
              <div className="general-content-item">
                <button className="sucess-button">Reset Account</button>
              </div>
              <div className="general-content-item">
                <span>Advanced gas control</span>
                <span className="general-contetn-description">
                  Select this to show gas price and limit controls directly on
                  the send and confirm screens.
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Show Hex Data</span>
                <span className="general-content-item">
                  Select this to show the hex data field on the send screen
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Show Conversion on test networks</span>
                <span className="general-content-item">
                  Select this to show fiat conversion on test networks
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Show test networks</span>
                <span className="general-content-item">
                  Select this to show test networks in network list
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Customize transaction nonce</span>
                <span className="general-content-item">
                  Turn this on to change the nonce (transaction number) on
                  confirmation screens. This is an advanced feature, use
                  cautiously.
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>Auto-Lock Timer (minutes)</span>
                <span className="general-content-item">
                  Set the idle time in minutes before MetaMask will become
                  locked.
                </span>
              </div>
              <div className="general-content-item">
                <input type="number" className="input-password w100" />
              </div>
              <button className="save-button">save</button>
              <div className="general-content-item">
                <span>Sync data with 3Box (experimental)</span>
                <span className="general-content-item">
                  Turn on to have your settings backed up with 3Box. This
                  feature is currently experimental; use at your own risk.
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="general-content-item">
                <span>IPFS Gateway</span>
                <span className="general-content-item">
                  Enter the URL of the IPFS CID gateway to use for ENS content
                  resolution.
                </span>
              </div>
              <div className="general-content-item">
                <input type="number" className="input-password w100" />
              </div>
              <button className="save-button">save</button>
              <div className="general-content-item">
                <span>Sync data with 3Box (experimental)</span>
                <span className="general-content-item">
                  Turn on to have your settings backed up with 3Box. This
                  feature is currently experimental; use at your own risk.
                </span>
              </div>
              <div className="general-content-item">
                {/* <Select value={language} /> */}
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default General;
