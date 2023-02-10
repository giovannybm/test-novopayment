import React from "react";
import PropTypes from "prop-types";
import leftLogo from "../../assets/images/Isotipo.svg";
import rightLogo from "../../assets/images/Private-CEO.svg"
import './Footer.scss'
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer_col">
        <img alt="leftLogo" src={leftLogo}></img>
      </div>
      <div className="footer_col">
        <p>&#169; Novopayment Inc. All rights reserved.</p>
      </div>
      <div className="footer_col">
        <img alt="rightLogo" src={rightLogo}></img>
      </div>
    </div>
  );
};



export default Footer;
