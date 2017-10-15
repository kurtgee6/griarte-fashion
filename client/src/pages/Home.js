import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import Header from "../components/Header/Header.js";
import Authentication from "../components/Authentication/Authentication.js";
import TheTeam from "../components/TheTeam/TheTeam.js";

const Home = () =>
    <div>
      <Authentication/>
      <Header/>
      {/* <TheTeam/> */}
      <Navbar/>
    </div>;

export default Home;
