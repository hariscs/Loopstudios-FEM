import logo from "../images/logo.svg";
import "./Header.css";
import mobileMenu from "../images/icon-hamburger.svg";
// import { useState } from "react";

const Header = () => {
  // const [showNav, setShowNav] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <img src={logo} alt="" className="logo" />

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/">About</a>
              </li>
              <li className="nav__item">
                <a href="/">Careers</a>
              </li>
              <li className="nav__item">
                <a href="/">Events</a>
              </li>
              <li className="nav__item">
                <a href="/">Products</a>
              </li>
              <li className="nav__item">
                <a href="/">Support</a>
              </li>
            </ul>
          </nav>
          <div className="mobileMenu">
            <img src={mobileMenu} alt="menu" />
          </div>
        </div>

        {/* hero section */}
        <div className="hero">
          <h1 className="heroTitle">Immersive experiences that deliver</h1>
        </div>
      </div>
    </header>
  );
};
// path is right tho
export default Header;
