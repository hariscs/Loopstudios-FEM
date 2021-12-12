import React from "react";

import "./Navbar.css";

const Navbar = ({ onShowNav }) => {
  return (
    <nav className={onShowNav ? "nav active" : "nav"}>
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
  );
};

export default Navbar;
