import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>
  <div className="Navbar">
    <p id="upTop"> 
       G
    </p>
    <div className="tooltip">
      <li id="firstIcon" className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/"><i className="material-icons" id="navIcons">home</i></Link>
        <span className="tooltiptext">home</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/Shop"><i className="material-icons" id="navIcons">shopping_basket</i></Link>
        <span className="tooltiptext">shop</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/ShoppingCart"><i className="material-icons" id="navIcons">shopping_cart</i></Link>
        <span className="tooltiptext">shopping cart</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/Fashion"><i className="material-icons" id="navIcons">photo_camera</i></Link>
        <span className="tooltiptext">fashion</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/About"><i className="material-icons" id="navIcons">chrome_reader_mode</i></Link>
        <span className="tooltiptext">about</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/FAQ"><i className="material-icons" id="navIcons">live_help</i></Link>
        <span className="tooltiptext">faq</span>
      </li>
    </div>
  </div>
export default Navbar;

