import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Layout from "../Layout/header";
import Switch from "../../components/Switch";

import "./setting.scss";

const Alerts = () => {
  const [toggle, setValue] = useState(false);
  return (
    <>
      <Layout>
        <div className="setting-general">
          <div className="card">
            <h2 style={{ textAlign: "center" }}>Alerts</h2>
            <div className="general-content">
              <div className="account-menu__divider"></div>
              <div className="alert-content">
                <div className="alert-description">
                  Browsing a website with an unconnected account selected
                </div>
                <div>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </div>
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="account-menu__divider"></div>
              <div className="alert-content">
                <div className="alert-description">
                  Browsing a website with an unconnected account selected
                </div>
                <div>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </div>
                <div style={{ display: "flex" }}>
                  <Switch
                    isOn={toggle}
                    onColor="red"
                    handleToggle={() => setValue(!toggle)}
                  />
                  <label>On</label>
                </div>
              </div>
              <div className="account-menu__divider"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Alerts;
