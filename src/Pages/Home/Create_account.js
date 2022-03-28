import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/header";

const CreateAccount = () => {
  return (
    <>
      <Layout>
        <div className="createAccount">
          <div className="card">
            <h2 style={{ textAlign: "center" }}>Create Account</h2>
            <p>Account Name</p>
            <input
              type="password"
              className="input-password w100"
              placeholder="Account 3"
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
        </div>
      </Layout>
    </>
  );
};

export default CreateAccount;
