import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "./Layout";
import { ethers } from "ethers";

import "./seed_phrase.scss";

const PhraseConfirm = () => {
  const history = useHistory();
  const [seed, setSeed] = useState([]);
  const [newSeed, setNewSeed] = useState([]);
  var name = "";
  useEffect(() => {
    chrome.storage.local.get("Mnemonic", function (result) {
      setNewSeed(result.Mnemonic.split(" "));
      setSeed(result.Mnemonic.split(" ").sort());
    });
  });
  const [confirmValue, setConfirm] = useState([]);
  const [state, setState] = useState(false);

  const seedClick = (val, element) => {
    if (element.className.indexOf("active") == -1) {
      element.classList.add("active");
      setConfirm([...confirmValue, seed[val]]);
    } else {
      let index = confirmValue.indexOf(seed[val]);
      confirmValue.splice(index, 1);
      element.classList.remove("active");
      setConfirm([...confirmValue]);
    }
    if (confirmValue.length == 11) {
      name = confirmValue.join("") + seed[val];
      if (newSeed.join("") == name) {
        setState(true);
      }
    } else {
      setState(false);
    }
  };

  const doneClick = () => {
    // if (state) {
    history.push("/done");
    // }
  };

  return (
    <>
      <Layout>
        <div style={{ marginTop: "5%" }}>
          <div className="card">
            <h2 style={{ textAlign: "center" }}>
              Confirm your Secret Recovery Phrase
            </h2>
            <p>
              Please select each phrase in order to make sure it is correct.
            </p>
            <div className="word-panel">
              {confirmValue.map((seed, index) => (
                <span className="wordItem" key={index}>
                  {seed}
                </span>
              ))}
            </div>
            <div className="seed">
              {seed.map((seeds, index) => {
                return (
                  <button
                    key={index}
                    className="btn-word"
                    onClick={(e) => seedClick(index, e.target)}
                  >
                    {seeds}
                  </button>
                );
              })}
            </div>
            <div className="row center" style={{ padding: "15px 5px" }}>
              <button className="btn-puc" onClick={() => doneClick()}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PhraseConfirm;
