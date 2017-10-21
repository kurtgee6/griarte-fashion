import React from "react";
import HomeNavbar from "../components/Nav/HomeNavbar.js";
import HomeStuff from "../components/HomeStuff/homeStuff.js";
// import Authentication from "../components/Authentication/Authentication.js";

const Home = () =>
    <div>
      {/* <Authentication/> */}
      <HomeStuff/>
      <HomeNavbar/>
    </div>;

export default Home;
