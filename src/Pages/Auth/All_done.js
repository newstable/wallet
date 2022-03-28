import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Done = () => {
  return (
    <>
      <Layout>
        <div style={{ marginTop: "-30px" }}>
          <div className="card">
            <h2 style={{ textAlign: "center" }}>Congratulations</h2>
            <p>
              You passed the test keep your Secret Recovery Phrase safe, it's
              your responsibility!
            </p>
            <b className="mt3">Tips on storing it safely</b>
            <p className="p0 m0">• Save a backup in multiple places.</p>
            <p className="p0 m0">• Never share the phrase with anyone.</p>
            <p className="p0 m0">
              • Be careful of phishing! MetaMask will never spontaneously ask
              for your Secret Recovery Phrase.
            </p>
            <p className="p0 m0">
              • If you need to back up your Secret Recovery Phrase again, you
              can find it in Settings - Security.
            </p>
            <p className="p0 m0">
              • If you ever have questions or see something fishy, contact our
              support{" "}
              <a
                style={{ color: "#016da1" }}
                href="https://metamask.io/terms.html"
                target="_blank"
              >
                {" "}
                here
              </a>
              .
            </p>
            <div className="row center">
              <Link className="btn-puc" to="home/lock">
                All Done
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Done;
