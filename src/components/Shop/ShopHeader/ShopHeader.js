import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./ShopHeader.css";
const ShopHeader = ({ ModelInfo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
          <a href="" className="header__modelNames">
            Charging
          </a>
          <a href="" className="header__modelNames">
              Vehicle Accessories
          </a>
          <a href="" className="header__modelNames">
              Apparel
          </a>
          <a href="" className="header__modelNames">
              lifestyles
          </a>
      </div>
      <div className="header__right">
        <Link
          to="/shop"
          //className={isMenuOpen && "header__link--hidden"}
        >
          Shop
        </Link>
        <Link
          to="/login"
          //className={isMenuOpen && "header__link--hidden"}
        >
          Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <p className="header_links">Menu</p>}
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
