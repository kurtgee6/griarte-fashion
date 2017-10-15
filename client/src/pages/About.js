import React from "react";
import Navbar from "../components/Nav/Navbar.js";
// import ShoppingCart from "../components/ShoppingCart/ShoppingCart.js"
import AboutGriarte from "../components/AboutG/aboutGriarte.js";
<<<<<<< HEAD
import ScrollHorizontal from "../components/ScrollHorizontal/ScrollHorizontal.js";

class About extends React.Component {
        constructor(props) {
          super(props);
    };
    render() {
    return (
        <div>
            <ScrollHorizontal>
                <AboutGriarte/>
                <ShoppingCart/>
            </ScrollHorizontal>
        </div>
    )};
};
=======
// import Header from "../components/Header/Header.js";

const About = () =>
    <div>
      <AboutGriarte/>
    </div>;
>>>>>>> 23f7722dc89bfa86f4c54acd2005d680148ef6b4
export default About;
