import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import welcomeImg from "../../assets/img/welcome_back.png";

const Layout = (props) => {
  return (
    <>
      <div
        style={{
          paddingBottom: "20px",
          backgroundImage: `url(${welcomeImg})`,
          width: "100vw",
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <div className="logo">
          <img src={logo}></img>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
