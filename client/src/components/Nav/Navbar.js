import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => 
  <div className="Navbar">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/"><i class="material-icons" title="Home">home</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Fashion"><i class="material-icons" title="Fashion">photo_camera</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Shop"><i class="material-icons" title="Shop">shopping_basket</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/ShoppingCart"><i class="material-icons" title="Shopping Cart">shopping_cart</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/About"><i class="material-icons" title="About Us">chrome_reader_mode</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/FAQ"><i class="material-icons" title="FAQ">live_help</i></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/SignUp"><a title="Sign Up">Register</a></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/LogIn"><a title="Sign In">Sign In</a></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/LogOut"><a title="Sign Out">Sign Out</a></Link>
    </li>
  </div>

export default Navbar;