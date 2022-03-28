import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

// import './seed_phrase.scss'

const SeedPhrase = () => {
  const [mnemo, setMnemo] = useState("");
  useEffect(() => {
    chrome.storage.local.get("Mnemonic", function (result) {
      setMnemo(result.Mnemonic);
    });
  });
  return (
    <>
      <Layout>
        <div style={{ marginTop: "5%", textAlign: "center" }}>
          <div className="card">
            <h2>Secret Recovery Phrase</h2>
            <p>
              Your Secret Recovery Phrase makes it easy to back up and restore
              your account.
            </p>
            <p>
              WARNING: Never disclose your Secret Recovery Phrase. Anyone with
              this phrase can take your Ether forever.
            </p>
            <div className="word-panel">{mnemo}</div>
            <div className="row center" style={{ padding: "10px 5px" }}>
              <Link className="btn-puc noeffect" to="/phrase-confirm">
                Remind me later
              </Link>
              <Link className="btn-puc" to="/phrase-confirm">
                Next
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SeedPhrase;
