import React from "react";
import HomeNavbar from "../components/Nav/HomeNavbar.js";
import Header from "../components/Header/Header.js";
import Authentication from "../components/Authentication/Authentication.js";

const Home = () =>
    <div>
      {/* <Authentication/> */}
      <Header/>
      <HomeNavbar/>
    </div>;

export default Home;
