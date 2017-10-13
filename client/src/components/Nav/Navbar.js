import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => 
  <div className="Navbar">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">GRIARTE</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/About">About</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Shop">Shop</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Fashion"><i class="material-icons">photo_camera</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/FAQ">FAQ</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/ShoppingCart"><i class="material-icons">shopping_basket</i></Link>
    </li>
  </div>

export default Navbar;