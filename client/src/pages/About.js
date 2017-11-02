import React from "react";
import Navbar from "../components/Nav/Navbar.js";
import AboutGriarte from "../components/AboutG/aboutGriarte.js";
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js";
import SocialMedia from "../components/SocialMedia/SocialMedia.js";

class About extends React.Component {
    render() {
    return (
        <div>
            <ScrollHorizontal>
                <Navbar/>
                <AboutGriarte/>
                {/* <ShoppingCart/> */}
                <SocialMedia/>
            </ScrollHorizontal>
        </div>
    )};
};

export default About;
