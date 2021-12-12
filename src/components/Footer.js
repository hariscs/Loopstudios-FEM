import React from "react";

import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__logo--container">
          <img src={logo} alt="logo" />
          <div className="footer__logo--actions">
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Events</a>
            <a href="/">Products</a>
            <a href="/">Support</a>
          </div>
        </div>
        <div className="footer__actions">
          <div className="footer__actions--links">
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
              <img src={pinterest} alt="pinterest" />
            </a>
            <a href="/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="footer__copyright">
            <p>&copy; 2020 Loopstudios. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
