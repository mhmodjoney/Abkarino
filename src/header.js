import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Header.css"; // Import the CSS file
import logoimg from "./logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logoimg} alt="Logo" className="logo" />
          <h1 className="website-name">Abkarino</h1>
        </div>
      </div>
      <div className="header-icons">
        <a href="https://www.facebook.com/ABKRENOoOoOo?mibextid=ZbWKwL">
          <FaFacebook size={32} className="icon" />
        </a>
        <a href="https://wa.me/993744451">
          <FaWhatsapp size={32} className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
