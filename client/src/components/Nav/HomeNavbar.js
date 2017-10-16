import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

const HomeNavbar = () =>
  <div className="HomeNavbar">
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/ShoppingCart"><i class="material-icons" id="homeIcons">shopping_cart</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Shop"><i class="material-icons" id="homeIcons">shopping_basket</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Fashion"><i class="material-icons" id="homeIcons">photo_camera</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/About"><i class="material-icons" id="homeIcons">chrome_reader_mode</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/FAQ"><i class="material-icons" id="homeIcons">live_help</i></Link>
    </li>
  </div>

export default HomeNavbar;
