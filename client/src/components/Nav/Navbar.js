import React from "react";
import { Link } from "react-router-dom";
import {Dropdown, Button, NavItem} from 'react-materialize';
import "./Navbar.css";

const Navbar = () =>
<div>
  <div className="Navbar">
    <p id="upTop"> 
       G
    </p>
    {/* path to Home */}
    <div className="tooltip">
      <li id="firstIcon" className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/"><i className="material-icons" id="navIcons">home</i></Link>
        <span className="tooltiptext">home</span>
      </li>
    </div>
    {/* Path to Shop */}
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/Shop"><i className="material-icons" id="navIcons">shopping_basket</i></Link>
        <span className="tooltiptext">shop</span>
      </li>
    </div>
    {/* Path to Shopping Cart */}
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/ShoppingCart"><i className="material-icons" id="navIcons">shopping_cart</i></Link>
        <span className="tooltiptext">shopping cart</span>
      </li>
    </div>
    {/* Path to Fashion Page */}
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/Fashion"><i className="material-icons" id="navIcons">photo_camera</i></Link>
        <span className="tooltiptext">fashion</span>
      </li>
    </div>
    {/* Path to About  */}
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/About"><i className="material-icons" id="navIcons">chrome_reader_mode</i></Link>
        <span className="tooltiptext">about</span>
      </li>
    </div>
    {/* Path to FAQ */}
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/FAQ"><i className="material-icons" id="navIcons">live_help</i></Link>
        <span className="tooltiptext">faq</span>
      </li>
    </div>
    {/* /////////////Navigation for iPhone//////////// */}
    <div className="NavbarForIphone">
    <Dropdown trigger={
        <Button id="ButtonForIphone"></Button>
      }>
        <div id="dropNav">
          <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">HOME</Link>
          </li>
        </div>
        <div id="dropNav">
          <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/Shop">SHOP</Link>
          </li>
        </div>
        <div id="dropNav">
          <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/ShoppingCart">CART</Link>
          </li>
        </div>
        <div id="dropNav">
        <li className={window.location.pathname === "/advice" ? "active" : ""}>
          <Link to="/About">ABOUT</Link>
        </li>
        </div>
        <div id="dropNav">
          <li className={window.location.pathname === "/advice" ? "active" : ""}>
            <Link to="/FAQ">FAQ</Link>
          </li>
        </div>
    </Dropdown>
  </div>
  </div>
  {/* Navbar for iPhone */}
</div>
export default Navbar;

