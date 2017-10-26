import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>
  <div className="Navbar">
    <li id="firstIcon" className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/"><i className="material-icons" id="navIcons">home</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Shop"><i className="material-icons" id="navIcons">shopping_basket</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/ShoppingCart"><i className="material-icons" id="navIcons">shopping_cart</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Fashion"><i className="material-icons" id="navIcons">photo_camera</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/About"><i className="material-icons" id="navIcons">chrome_reader_mode</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/FAQ"><i className="material-icons" id="navIcons">live_help</i></Link>
    </li>
        <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/SignUp" title="SignUp">Register</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/SignIn" title="Sign In">Sign In</Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/LogOut" title="Sign Out">Sign Out</Link>
    </li>
  </div>
export default Navbar;
