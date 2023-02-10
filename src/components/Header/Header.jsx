import React from "react";
import logo from "../../assets/images/Tu PruTec.svg";
import Navbar from "../Navbar/Navbar";
import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <header className="topBar">
        <div className="logoContainer">
          <img alt="logo" src={logo} />
        </div>
        <div className="userMenu">
          <span>USERNAME</span>
        </div>
      </header>
      <Navbar/>
    </div>
  );
};

export default Header;
