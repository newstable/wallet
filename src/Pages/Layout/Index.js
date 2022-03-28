/*global chrome*/

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

import "./index.scss";
// import welcomeImg from "../../assets/img/welcome_back.png";
// import backImg from "../../assets/img/main_back.png";

const Layout = ({ children }) => {
  return (
    <>
      <div className="unlockBack">
        <div className="logo">
          <img src={logo}></img>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
