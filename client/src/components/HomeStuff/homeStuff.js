import React from "react";
import { Tab, Tabs } from "react-materialize";
import "./homeStuff.css";

const HomeStuff = () =>
    <div>
        {/* About Griarte Image */}
        {<img className="homeImage" alt="Home Image" src={require("../../Images/gigi-hadid3.jpg")} />}
    </div>
export default HomeStuff;
