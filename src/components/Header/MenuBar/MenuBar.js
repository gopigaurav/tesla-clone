import React from "react";
import "./MenuBar.css";
import CloseIcon from "../../../assets/images/close.png";
import {useDispatch} from "react-redux"
function MenuBar() {
  const dispatch = useDispatch()
  return (
    <div className="menu">
      <div className="closeIcon" onClick={() => dispatch({type:"CLOSE_MENU",payload:false})}>
        <img src={CloseIcon} className="close_icon" />
      </div>
      <div className="menuItem">
        <h4>Existing Inventory</h4>
        <h4>Used Inventory</h4>
        <h4>Trade-In</h4>
        <h4>Cybertruck</h4>
        <h4>Roadster</h4>
        <h4>Semi</h4>
        <h4>Charging</h4>
        <h4>Powerwall</h4>
        <h4>Commercial solar</h4>
        <h4>Test drive</h4>
        <h4>Find us</h4>
        <h4>Support</h4>
        <h4>Investor Relations</h4>
      </div>
    </div>
  );
}

export default MenuBar;
