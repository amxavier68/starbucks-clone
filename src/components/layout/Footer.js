import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social">
          <Link to="/">
            <i className="fab fa-spotify"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-pinterest"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
        </div>
        <p>&copy; 2022 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
