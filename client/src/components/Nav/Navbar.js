import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>
  <div className="Navbar">
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/ShoppingCart"><i class="material-icons">shopping_cart</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Shop"><i class="material-icons">shopping_basket</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Fashion"><i class="material-icons">photo_camera</i></Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/"><i class="material-icons">home</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/About"><i class="material-icons">chrome_reader_mode</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/FAQ"><i class="material-icons">live_help</i></Link>
    </li>
  </div>

export default Navbar;
