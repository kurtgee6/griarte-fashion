import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavbar.css";

const HomeNavbar = () =>
  <div className="HomeNavbar">
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Shop"><p id="homeIcons">shop</p></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/Fashion"><p id="homeIcons">fashion</p></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/About"><p id="homeIcons">about</p></Link>
    </li>
    <li className={window.location.pathname === "/advice" ? "active" : ""}>
      <Link to="/FAQ"><p id="homeIcons">faq</p></Link>
    </li>
  </div>

export default HomeNavbar;
