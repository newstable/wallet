import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "./Layout";

import "./welcome.scss";
const Welcome = () => {
  const history = useHistory();
  const [mnemo, setMnemo] = useState("");
  useEffect(() => {
    if (localStorage.getItem("hash")) {
      chrome.storage.local.get("Mnemonic", function (result) {
        setMnemo(result.Mnemonic);
        if (mnemo) {
          history.push("/home");
        } else {
          history.push("/home/lock");
        }
      });
    }
  });
  return (
    <>
      <Layout>
        <div className="welcomeCotnent">
          <h3>Welcome to ICICB Metamask</h3>
          <p>Connecting you to Ethereum and the Decentralized Web.</p>
          <div>
            <Link className="btn-puc" to="/select-action">
              Get Started
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Welcome;
