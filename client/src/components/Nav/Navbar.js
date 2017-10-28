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
        <Link to="/"><i class="material-icons" id="navIcons">home</i></Link>
        <span class="tooltiptext">home</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/Shop"><i class="material-icons" id="navIcons">shopping_basket</i></Link>
        <span class="tooltiptext">shop</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/ShoppingCart"><i class="material-icons" id="navIcons">shopping_cart</i></Link>
        <span class="tooltiptext">shopping cart</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/Fashion"><i class="material-icons" id="navIcons">photo_camera</i></Link>
        <span class="tooltiptext">fashion</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/About"><i class="material-icons" id="navIcons">chrome_reader_mode</i></Link>
        <span class="tooltiptext">about</span>
      </li>
    </div>
    <div className="tooltip">
      <li className={window.location.pathname === "/advice" ? "active" : ""}>
        <Link to="/FAQ"><i class="material-icons" id="navIcons">live_help</i></Link>
        <span class="tooltiptext">faq</span>
      </li>
    </div>
  </div>
export default Navbar;

