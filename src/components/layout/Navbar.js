import React from "react";
import { Link } from "react-router-dom";

import Img from "../../../public/img/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={Img} alt="Starbucks" />
          </Link>
        </div>
        <ul className="navbar-nav-left">
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Rewards</Link>
          </li>
          <li>
            <Link to="/">Gift Cards</Link>
          </li>
        </ul>
        <ul className="navbar-nav-right">
          <li>
            <Link to="/">
              <i className="fas fa-map-marker-alt"></i>
              <span>Find a store</span>
            </Link>
          </li>
          <li>
            <button className="btn btn-dark-outline">
              <Link to="/">Sign in</Link>
            </button>
          </li>
          <li>
            <button className="btn btn-dark">
              <Link to="/">Join now</Link>
            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button type="button" className="hamburger" id="menu-btn">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
