import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import "./styles.css";
const Header = () => {
  const ModelInfo = [
    {
      id: "0",
      modelName: "Model S",
      img: "1(1).jpg",
      paths: "/models"
    },
    {
      id: "1",
      modelName: "Model 3",
      img: "1(2).jpg",
    },
    {
      id: "2",
      modelName: "Model X",
      img: "1(3).jpg",
    },
    {
      id: "3",
      modelName: "Model Y",
      paths: "/modely",
      img: "1(4).jpg",
    },
    {
      id: "4",
      modelName: "Model 4",
      img: "1(5).jpg",
    },
    {
      id: "5",
      modelName: "Model 5",
      img: "1(6).jpg",
    },
  ];
  const dispatch = useDispatch()
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
        {ModelInfo.map((item) => (
          <Link to={item?.paths} className="header__modelNames">
            {item.modelName}
          </Link>
        ))}
      </div>
      <div className="header__right">
        <Link
          to="/shop"
          className="header__modelNames header_links"
        >
          <p>SHOP</p>
        </Link>
        <Link
          to="/login"
          className="header__modelNames header_links"
        >
          <p>ACCOUNT</p>
        </Link>
        <div
          className="header__menu"
          onClick={() => dispatch({type:"CLOSE_MENU",payload:true})}
        >
          <p className="header_links header__modelNames">Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
