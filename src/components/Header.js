import { useState } from "react";

import logo from "../images/logo.svg";
import "./Header.css";
import mobileMenu from "../images/icon-hamburger.svg";
import closeMobileMenu from "../images/icon-close.svg";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  function handleNavShow() {
    setShowNav((prevState) => !prevState);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <img src={logo} alt="" className="logo" />

          {/* navbar section */}
          <Navbar onShowNav={showNav} />
          {/* hamburger */}
          <div className="mobileMenu">
            <img
              src={showNav ? closeMobileMenu : mobileMenu}
              alt="menu"
              onClick={handleNavShow}
            />
          </div>
        </div>

        {/* hero section */}
        <Hero />
      </div>
    </header>
  );
};
// path is right tho
export default Header;
